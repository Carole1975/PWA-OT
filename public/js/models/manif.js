const Sequelize = require('sequelize');
const db = require('db');


const evenement = db.define('evenement', {
	evenement: Sequelize.STRING,
	date_debut: Sequelize.DATE,
	date_fin: Sequelize.DATE,
	heure: Sequelize.DATETIME,
	place: Sequelize.STRING,
	description: Sequelize.STRING
}, {
    timestamps: false,
    createdAt: false,
    updatedAt: false
});

let manif1 = {
	evenement : "Test d'evenement",
	date_debut : "12/12/17",
	date_fin: "13/12/17",
	heure: 15:30:00,
	place: 15:45:00,
	description: "Saint-Gaudens",
}

manif.create(manif1).then(evenement => {
	console.log(`manif created successfully : ${evenement}`);
})

Location.findAll().then(evenement => {
	console.log(evenements)
});

module.exports.manif = manif;