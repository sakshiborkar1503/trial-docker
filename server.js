const http = require('http');
const os = require('os');

const PORT = process.env.PORT || 3001;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<!DOCTYPE html>');
    res.write('<html lang="en">');
    res.write('<head>');
    res.write('<meta charset="UTF-8">');
    res.write('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
    res.write('<title>Server Information</title>');
    res.write('<style>');
    res.write('body { font-family: Arial, sans-serif; }');
    res.write('table { border-collapse: collapse; width: 100%; }');
    res.write('th, td { border: 1px solid #dddddd; text-align: left; padding: 8px; }');
    res.write('th { background-color: #f2f2f2; }');
    res.write('</style>');
    res.write('</head>');
    res.write('<body>');
    res.write('<h1>Server Information</h1>');
    res.write('<table>');
    res.write('<tr><th>Category</th><th>Details</th></tr>');
    res.write(`<tr><td>Total Memory</td><td>${(os.totalmem() / 1024 / 1024).toFixed(2)} MB</td></tr>`);
    res.write(`<tr><td>Free Memory</td><td>${(os.freemem() / 1024 / 1024).toFixed(2)} MB</td></tr>`);
    res.write(`<tr><td>CPU Details</td><td>${JSON.stringify(os.cpus())}</td></tr>`);
    res.write(`<tr><td>Hostname</td><td>${os.hostname()}</td></tr>`);
    res.write(`<tr><td>Platform</td><td>${os.platform()}</td></tr>`);
    res.write(`<tr><td>Release</td><td>${os.release()}</td></tr>`);
    res.write(`<tr><td>Uptime</td><td>${os.uptime()} seconds</td></tr>`);
    res.write('<tr><td>Network Interfaces</td><td>');
    const networkInterfaces = os.networkInterfaces();
    for (const [_, interfaces] of Object.entries(networkInterfaces)) {
        interfaces.forEach(iface => {
            res.write(`<div>${iface.address} (${iface.netmask})</div>`);
        });
    }
    res.write('</td></tr>');
    res.write(`<tr><td>Load Average</td><td>${os.loadavg()}</td></tr>`);
    res.write('</table>');
    res.write('</body>');
    res.write('</html>');
    res.end();
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
