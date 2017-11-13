const Sequelize = require('sequelize');

const sequelize = new Sequelize('mysql://enkxjvk8wef144dg:o4gyka44chnqkbr0@gzp0u91edhmxszwf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/dpxbvt128zo10653');

sequelize
.authenticate()
.then(() => {
	console.log('Connection has been established sucessfully.');
})
.catch(err => {
	console.error('Unable to connect to the database:', err);
});

// const User = sequelize.define('user', {
// 	firstName: {
// 		type: Sequelize.STRING
// 	},
// 	lastName: {
// 		type: Sequelize.STRING
// 	}
// });

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


// User.sync({force:true}).then(() => {
// 	//Table created
// 	return User.create({
// 		firstName: 'John',
// 		lastName: 'Hancock'
// 	});
// });

// User.findAll().then(users => {
// 	console.log(users)
// })

// module.exports = {User};
