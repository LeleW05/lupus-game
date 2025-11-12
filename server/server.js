const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });
console.log('Server WebSocket in ascolto sulla porta 8080');

wss.on('connection', ws => {
  console.log('Nuovo dispositivo connesso');

  // Messaggi ricevuti dal client
  ws.on('message', message => {
    console.log(`Ricevuto dal client: ${message}`);
    ws.send(`Server: messaggio ricevuto -> ${message}`);
  });

  // Messaggio di benvenuto al client
  ws.send('Connesso al server!');
}); 