const Sequelize = require("sequelize")
const sequelize = require("../Util/database")

const Customer = sequelize.define("customer",{
    sno:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false
    }
})
module.exports = Customer;