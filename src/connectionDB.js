const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('chuyenbay', 'root', '', {
    host: 'localhost',
    dialect:'mysql',
    logging: false,
});
const ConnectionDatabase = async () =>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
ConnectionDatabase();
module.exports = sequelize;