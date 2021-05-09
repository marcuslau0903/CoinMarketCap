//Load HTTP module
const http = require("http");
const express = require('express');
const cryptoApi = require('./api.js');
const hostname = '127.0.0.1';
const port = 3000;

const app = express();
app.get('/', (req, res) => {
    var fetchedApi = new Promise((resolve, reject) => resolve(cryptoApi()));
    fetchedApi.then(data=> {
        console.log("returned data:")
        console.log(data);
        res.sendFile('./public/index.html', { root: __dirname, data})
    });
});

app.use(express.static('public'));

//Create HTTP server and listen on port 3000 for requests
const server = http.createServer(app);

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
