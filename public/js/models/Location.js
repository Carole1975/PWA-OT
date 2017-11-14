const Sequelize = require('sequelize');
const db = require('db');


const Location = db.define('location', {
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

let location1 = {
	titre : "Test",
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

module.exports.Location = Location;