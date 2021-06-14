const http = require('http');

const app = require('./Backend/app');

const port = process.env.port || 3000;  

const server = http.createServer(app);
server.listen(port); 
console.log("Server Stared Now...... So Enjoy The Fake Server")