const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

var server = http.createServer(app);

app.use(express.static(publicPath));

server.listen(port, () => {
  console.log(`Listening on ${port}`)
});
