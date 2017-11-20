var express = require('express');
var bodyParser = require('body-parser');
let Sequelize = require('sequelize');

var app = express();

const port = process.env.PORT || 8000;


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));


const sequelize = new Sequelize('mysql://enkxjvk8wef144dg:o4gyka44chnqkbr0@gzp0u91edhmxszwf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/dpxbvt128zo10653');

sequelize
.authenticate()
.then(() => {
	console.log('Connection has been established sucessfully.');
})
.catch(err => {
	console.error('Unable to connect to the database:', err);
});

const Location = sequelize.define('location', {
	titre: Sequelize.STRING,
	texte: Sequelize.STRING,
	marqueur: Sequelize.INTEGER,
	lat: Sequelize.FLOAT,
	lng: Sequelize.FLOAT
}, {
	timestamps: false,
	createdAt: false,
	updatedAt: false
});



app.get('/', function(req, res){
	res.sendfile(__dirname + '/public/index.html');
});

app.get('/location-creation',function(req,res){
	res.sendfile(__dirname + '/public/formevent.html'); 
});

app.post('/location-create', function(req, res, next) {
	let location1 = {
		titre : req.body.titre,
		texte : "Test de location",
		marqueur: 2,
		lat: 1.00000,
		lng: 2.00000,
	}

	Location.create(location1).then(location => {
		console.log(`Location created successfully : ${location}`);
	})

	Location.findAll().then(locations => {
		console.log(locations)
	});

	res.send(`Location créée: ${req.body.titre}`);
});




app.listen(port, function () {
	console.log(`Example app listening on port ${port}!`);
});

