const express = require('express'),
     http = require('http'),
     bodyParser = require('body-parser'),
     morgan = require('morgan');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));

const dishRouter = require('./routes/dishrouter');

app.use('/dishes', dishRouter);

app.use((req, res, next) => {
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>This is an Express Server sdfsdcs</h1></body></html>');

});

app.use(express.static(__dirname + '/public'));

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});