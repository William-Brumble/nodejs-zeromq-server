import zmq from "zeromq";

let server = new zmq.Router();
server.routingId = "server";
await server.bind("tcp://127.0.0.1:3456");

try {

    do {
        const [id, msg] = await server.receive();
        const payload = JSON.parse(msg);
        console.log(`id: ${id}, msg: ${payload.message}`);
    } while (true);

} catch (err) {
    console.log(err);
    server.close();
}