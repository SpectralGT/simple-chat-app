const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8080;
app.use(express.static(path.join(__dirname,"./client/build")));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
})
app.listen(port);

const WebSocket = require('ws');

const wss = new WebSocket.Server({server:app},()=>{console.log('web socket started')});
console.log("server started");
wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(JSON.parse(data)));
        // console.log('data', JSON.parse(data));
      }
    });
  });
});

