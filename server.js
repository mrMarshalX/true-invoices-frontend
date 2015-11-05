var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var content = {
	clients: require('./serverData/clients.js').clients,
	invoices: require('./serverData/invoices.js').invoices
};

var CONFIG = {
	URL: 'localhost',
	PORT: 3002,
	ROOT: 'serverData'
};
Object.freeze(CONFIG);

app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/api/clients', function (req, res) {
	res.send(content.clients);
});

app.get('/api/invoices', function (req, res) {
	res.send(content.invoices);
});

app.get('*', function (req, res) {
    res.sendfile('./public/index.html');
});

app.listen(CONFIG.PORT);

console.log('Sample API and data server is running on ' + CONFIG.URL + ':' + CONFIG.PORT);