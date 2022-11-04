const http = require("http");
const socketIo = require("socket.io");
const request = require("request");
const express = require("express");
const next = require("next");

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN;
let timeout = 0;

const streamURL = new URL(
  "https://api.twitter.com/2/tweets/search/stream?tweet.fields=context_annotations&expansions=author_id"
);

const rulesURL = new URL(
  "https://api.twitter.com/2/tweets/search/stream/rules"
);

const errorMessage = {
  title: "Please Wait",
  detail: "Waiting for new Tweets to be posted...",
};

const authMessage = {
  title: "Could not authenticate",
  details: [
    `Please make sure your bearer token is correct. 
      If using Glitch, remix this app and add it to the .env file`,
  ],
  type: "https://developer.twitter.com/en/docs/authentication",
};

app
  .prepare()
  .then(() => {
    const server = express();
    var served = server.listen(3000, function () {
      console.log("listening for requests on port 3000,");
    });
    var io = socketIo(served);
    // const serverd = http.createServer(server);
    // const io = socketIo(serverd);
    // const io = socketIo(server);
    const showRoutes = require("./routes/index.js");

    server.use("/api", showRoutes(server));
    const sleep = async (delay) => {
      return new Promise((resolve) => setTimeout(() => resolve(true), delay));
    };

    const streamTweets = (socket, token) => {
      let stream;
      const config = {
        url: streamURL,
        auth: {
          bearer: process.env.TWITTER_BEARER_TOKEN,
        },
        timeout: 31000,
      };

      try {
        const stream = request.get(config);

        stream
          .on("data", (data) => {
            try {
              const json = JSON.parse(data);
              if (json.connection_issue) {
                socket.emit("error", json);
                reconnect(stream, socket, token);
              } else {
                if (json.data) {
                  socket.emit("tweet", json);
                } else {
                  socket.emit("authError", json);
                }
              }
            } catch (e) {
              socket.emit("heartbeat");
            }
          })
          .on("error", (error) => {
            // Connection timed out
            socket.emit("error", errorMessage);
            reconnect(stream, socket, token);
          });
      } catch (e) {
        console.log(e);
        socket.emit("authError", authMessage);
      }
    };

    const reconnect = async (stream, socket, token) => {
      timeout++;
      stream.abort();
      await sleep(2 ** timeout * 1000);
      streamTweets(socket, token);
    };

    io.on("connection", async (socket) => {
      try {
        const token = process.env.TWITTER_BEARER_TOKEN;
        console.log("connected");
        io.emit("connected", "Client connected");
        const stream = streamTweets(socket, token);
      } catch (e) {
        console.log(e);
        io.emit("authError", authMessage);
      }
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`> Ready on ${PORT}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
