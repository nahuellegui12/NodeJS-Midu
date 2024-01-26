const { create } = require('node:domain')
const net = require('node:net')

function findAvailablePort (desirePort){
    return new Promise((resolve, reject) => {
        const server = net.createServer()

        server.listen(desirePort, () => {
            const {port} = server.address()
            server.close(()=>{
                resolve(port)
            })
        })
        resolve(0)
    })
}

module.exports = {findAvailablePort}