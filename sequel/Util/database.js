const Sequelize = require("sequelize")
const sequelize = new Sequelize("nikhil","postgres","Goldtre9",{
    dialect:"postgres",
    host:"localhost"

})
module.exports = sequelize