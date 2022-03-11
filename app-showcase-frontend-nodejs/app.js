const express = require('express');
const app = express();
const router = express.Router();

const path = __dirname + '/views/';
const port = 8084;

router.use(function(req, res, next) {
    console.log('/' + req.method);
    next();
});

router.get('/', function(req, res) {
    res.sendFile(path + 'index.html');
});

router.get('/headers', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.json(req.headers);
});

router.get('/health', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ status: 'UP!' }));
});

router.get('/headers', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.json(req.headers);
});

router.get('/ping', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ ping: 'pong' }));
});

app.use(express.static(path));
app.use('/', router);

app.listen(port, function() {
    console.log('Example app listening on port 8084!')
})