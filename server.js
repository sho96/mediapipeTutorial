const express = require("express");
const { readFileSync } = require("fs");
const http = require("http");
const app = express();
const httpPort = process.env.PORT || 8000;

app.get("/", (req, resp) => {
  resp.status(200).send(readFileSync("./index.html"))
});

httpServer = http.createServer(app);
httpServer.listen(httpPort);
