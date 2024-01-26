const http = require('node:http');
//Un servidor puede hacer dos cosas, peticiones y respuestas, o recibir una peticion o devolver una respuesta
const server = http.createServer((req, res)=>{
    console.log("Request received")
    res.end("Hello World")
})

server.listen(0, ()=>{
    console.log(`server listen on port 3000 http://localhost:${server.address().port}`)
})