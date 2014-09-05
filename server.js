
// modules ====================================================================================
var express = require('express');
var app = express();
var mongo = require('mongoskin');
var bodyParser = require('body-parser');
var methodOverride = require ('method-override');

// configuration ==============================================================================
var dbConfig = require('./config/db-config');
var port = process.env.PORT || 8080;
var db = mongo.db(dbConfig.uri);
// db.collection('students').find().toArray(function(err, items) {
// 	console.log(items);
// });

// how is bodyParser used? what is it used for?
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));
app.use(bodyParser.json({ extended: true}));

app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'));

// routes =====================================================================================
router = express.Router();
require('./app/routes')(router, db);
app.use('/api', router);
app.get('*', function(req, res) {
	res.sendfile('./public/index.html');
});

// start app ==================================================================================
app.listen(port);
console.log('app started using port: ' + port);
exports = module.exports = app; // I don't understand module.exports
