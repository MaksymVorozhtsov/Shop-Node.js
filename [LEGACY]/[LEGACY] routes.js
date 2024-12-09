const fs = require('fs');

const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;

    res.setHeader('Content-Type', 'text/html');
    if (url === '/') {
        res.write('<html>');
        res.write(`<body>
            <h1>Form to submit</h1>
            <form method="POST" action="/message">
                <input type="text" name="message" />
                <button type="submit">Submit</button>
            </from>
            </body>`);
        res.write('</html>');
        return res.end();
    } 
    
    if (url === '/message' && method === 'POST') {
        const body = [];
    
        req.on('data', (chunk) => {
            body.push(chunk);
        });
    
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
}

module.exports = requestHandler;