const express = require('express');
const WebSocket = require('ws');
const app = express();
const path = require('path');
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname,"./client/build")));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
})

const server = require('http').createServer(app);
const wss = new WebSocket.Server({ server:server });

server.listen(port, ()=>{
  console.log("server started");
});

wss.on('listening',()=>{console.log('web sockets started')});

wss.on('connection', (ws) => {
  console.log('started');
  ws.on('message', (data) => {
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(JSON.parse(data)));
        // console.log('data', JSON.parse(data));
      }
    });
  });
});

