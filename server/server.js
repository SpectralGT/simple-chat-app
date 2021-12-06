const WebSocket = require('ws');

const wss = new WebSocket.Server({port:8080});
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
