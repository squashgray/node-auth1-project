const express = require("express");
const configWare = require("./config-middleware");
const apiRouter = require("./api-router.js");
const server = express();

configWare(server);

server.use("/api", apiRouter);

module.exports = server;
