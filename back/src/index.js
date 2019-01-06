import {createServer} from 'http';

const whenRequestReceived = (req,res) =>{

    res.writeHead(200,{'Content-type':`text/plain`})
    res.write("hello")

    res.end()
}

const server = createServer(whenRequestReceived)

server.listen(8080,()=>{console.log('we are here')})