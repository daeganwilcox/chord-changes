/*jshint esversion: 6 */

const express = require("express");
const http = require("http");
const path = require("path");

app = express();
app.use(express.json);
app.use(express.static("express"));

app.use('/', function(req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

const server = http.createServer(app);
const port = 3000;
server.listen(port);