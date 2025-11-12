const log = document.getElementById('log');
const ws = new WebSocket('ws://172.28.240.1'); // sostituisci IP_DEL_SERVER con l'IP reale del PC admin

ws.onopen = () => log.innerHTML += '<p>Connesso al server</p>';
ws.onmessage = (event) => log.innerHTML += `<p>Ricevuto: ${event.data}</p>`;

function inviaMessaggio() {
  const msg = document.getElementById('msg').value;
  ws.send(msg);
}
