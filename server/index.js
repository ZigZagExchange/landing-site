const http = require("http");
const express = require("express");
const next = require("next");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    const showRoutes = require("./routes/index.js");
    const corsOpts = {
      origin: "*",
      credentials: true,
      methods: ["GET", "POST", "HEAD", "PUT", "PATCH", "DELETE"],
      allowedHeaders: ["Content-Type"],
      exposedHeaders: ["Content-Type"],
      "Access-Control-Allow-Origin": "https://api.twitter.com",
    };
    server.use(cors(corsOpts));
    server.use("/api", showRoutes(server));

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
