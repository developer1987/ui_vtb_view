const express = require('express');
const cors = require('cors');
const {createProxyMiddleware} = require('http-proxy-middleware');
const path = require('path');
const server = express();

// server.use(cors());
// server.options('*', cors());

server.use(function(req, res, next) {
  if (req.headers.origin) {
    res.header('Access-Control-Allow-Origin', '*');
    // eslint-disable-next-line max-len
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Authorization');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE');
    if (req.method === 'OPTIONS') return res.send(200);
  }
  next();
});

const PORT = process.env.PORT || 80;
console.log(process.env.PORT);
server.use(express.static(__dirname));

/* server.get('/', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/dist`, 'index.html'));
}); */

server.post('/api/users/signin', (req, res) => {
  res.json({
    id: 666,
    login: 'user_name',
    name: 'Иван',
    middlename: 'Иванович',
    surname: 'Иванов'
  });
});

server.get('/api/users/signout', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.json({});
});

/* server.use(express.static('dist'));

server.use(
    '/api',
    createProxyMiddleware({
      target: 'http://declks01app01.corp.dev.vtb/',
      changeOrigin: true
    })
);

server.use(
    '/images',
    createProxyMiddleware({
      target: 'http://declks01app01.corp.dev.vtb/',
      changeOrigin: true
    })
);*/

server.listen(PORT, () => {
  console.log('Server has been started...');
});
