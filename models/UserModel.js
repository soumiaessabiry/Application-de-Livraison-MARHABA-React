const mongoose=require('mongoose')
// creat schema users

const userschema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        min:3
    },
    email:{
        type:String,
        required:true,
        min:3
    },
    password:{
        type:String,
        required:true,
        min:4
    },
    role:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Roles'
    }],
    dateInscription:{
        type:Date,
        default: Date.now,


    },
    confirmEmail:{
        type:Boolean,
        defaul:false
    }
    
})

// comminication  in collection

const Users=mongoose.model('Users',userschema)

module.exports=Users