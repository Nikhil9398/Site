const sequelize = require("./Util/database")
const Customer = require("./Models/customer")

// sequelize
// //.sync()               it is for intial one
// .sync({force:true})     // it drops the existing tables and recreate tables again
// .then((result)=>{
//     return Customer.create({name:"Nikhil",email:"nik@gmail.com"})
//     console.log(result)
// })
// .then((customer)=>{
//     return customer.findAll({where : customer.id})
// })

// .catch((err)=>{
//     console.log(err)
// })

async function nik(){
    try{
        var name="nik123";
        const data =  await sequelize.sync({force:true})
        const res = await Customer.create({name:"nik123",email:"123@gmail.com"})   //creation or insertion
        const find = await Customer.findAll({where:{name:"nik123"}})    // reading table
        console.log(find)
        const upd = await Customer.update({              //updation
            name:"nik234"
        },
        {
            where: {name:"nik123"}
        })
        const find1 = await Customer.findAll()
        console.log(find1)

        const del1 = await Customer.destroy({
            where : {name:"nik234"}
        })
        const find2 = await Customer.findAll({})
        console.log(find2)
       
    }
    catch(err){
        console.log(err)
    }
   
}
nik()