const mongoose=require('mongoose')
// creat schema users

const roleschema= new mongoose.Schema({
    name:{
        type:String,
    }
})

// comminication  in collection

const Roles=mongoose.model('Roles',roleschema)

module.exports=Roles