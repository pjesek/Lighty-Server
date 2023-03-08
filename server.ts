import { WebSocketServer } from "ws";

const port = 1234;
const wss = new WebSocketServer({port});

wss.on('connection', (ws) => {

    ws.on('message', (data) => {
        console.log(`Received message from client: ${data}`);
    })

    ws.send(`Hello, this is server.ts!`);
})

console.log(`Listening at ${port}...`)