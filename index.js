/*
 * Primary file for API
 */

// Dependencies
const http = require('http');
const url = require('url');

// The server should respond to all the requests with a string
let server = http.createServer((req, res) => {

    // Parse the URL
    let parsedUrl = url.parse(req.url, true);

    // Get the path
    let path = parsedUrl.pathname;
    let trimmedPath = path.replace(/^(\/+|\/+)$/g,'');

    // Get the HTTP method
    let method = req.method.toUpperCase();

    // Get the Query Params
    let queryParams = parsedUrl.query;

    // Get request Headers
    let headers = req.headers;

    // Send the response
    res.end('Hello World!!!\n');

    // Log request
    console.log('Request is received on path:', trimmedPath, 'with method:', method, 'and query params:', JSON.stringify(queryParams), headers);
    
});

// Start the server on port 3000
server.listen(3000, () => {
    console.log('Server is started and listening on port: 3000');
})