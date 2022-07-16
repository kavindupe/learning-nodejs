/*
 * Primary file for API
 */

// Dependencies
const http = require('http');
const url = require('url');

// The server should respond to all the requests with a string
let server = http.createServer((req, res) => {

    // Parse the URL
    let parsedUrl = url.pa
    res.end('Hello World!!!\n');
});

// Start the server on port 3000
server.listen(3000, () => {
    console.log('Server is started and listening on port: 3000')
})