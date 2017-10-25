const Sequelize = require('sequelize');

const sequelize = new Sequelize('evenements', 'root', 'simplon01', {
	host: 'localhost',
	dialect: 'mysql',

	pool: {
		max: 5,
		min: 0,
		idle: 1000
	},
});

sequelize
.authenticate()
.then(() => {
	console.log('Connection has been established sucessfully.');
})
.catch(err => {
	console.error('Unable to connect to the database:', err);
});

const User = sequelize.define('user', {
	firstName: {
		type: Sequelize.STRING
	},
	lastName: {
		type: Sequelize.STRING
	}
});

User.sync({force:true}).then(() => {
	//Table created
	return User.create({
		firstName: 'John',
		lastName: 'Hancock'
	});
});

User.findAll().then(users => {
	console.log(users)
})

module.exports = {User};
