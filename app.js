const NodeMediaServer = require('node-media-server');
const express = require("express");
const app = express();
const fs = require("fs");

const configNMS = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 8000,
    allow_origin: '*'
  }
};

var nms = new NodeMediaServer(configNMS)
nms.run();

app.listen(8001, '0.0.0.0', () => {
  console.log("Server running on port 8001");
})