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

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;