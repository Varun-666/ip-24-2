import http from 'http'
import { upperCase as uc } from 'upper-case';

http.createServer( (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(uc("Hello World! This is a new sever"));
    res.end();
}).listen(8080);