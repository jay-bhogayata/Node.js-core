const dgram = require("node:dgram")

const port = 3000

const server = dgram.createSocket('udp4')

server.on('error', (err) => {
    console.log(`server error : ${err}`)
    server.close()
})


server.on("message", (msg, rinfo) => {
    console.log(`meg: ${msg} , from ${rinfo.address}:${rinfo.port}`)
    server.send(msg, rinfo.port, rinfo.address, (err) => {
        if (err) {
            console.error(`Error sending message to ${rinfo.address}:${rinfo.port}: ${err}`);
        }
    });
})

server.on("listening", () => {
    console.log(`server is running on port ${port} on localhost`)
})

server.bind(port)

// echo "hello" | nc -w1 -u 127.0.0.1 3000