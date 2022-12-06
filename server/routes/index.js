const express = require("express");
const router = express.Router();
const request = require("request");

function routes(app) {
  router.get("/tweets", async (req, res) => {
    const config = {
      url: "https://api.twitter.com/2/users/1429883723307110434/tweets",
      auth: {
        bearer: process.env.TWITTER_BEARER_TOKEN,
      },
      timeout: 31000,
    };
    try {
      request(config, function (error, response, body) {
        res.send(body);
      });
    } catch (e) {
      console.log(e);
      res.send(e);
    }
  });

  return router;
}

module.exports = routes;
