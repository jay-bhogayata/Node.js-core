const net = require('node:net')

const server = net.createServer(socket => {


    console.log("client connected")
    socket.write("Hello from tcp echo server\n")

    socket.on("data", data => {
        console.log(`received ${data} from client`)

        // write same data back to client
        socket.write(data)
    })

    socket.on("end", () => {
        // send data to client on termination of connection
        console.log("client disconnected")
        socket.write("good bye")
    })
})


const port = 8080
const host = "127.0.0.1"
server.listen(port, host, () => {
    console.log(`tcp server is running on ${host}:${port} and ready to accept the connection`)
})