// const nodemailer = require("nodemailer");
// const jwt=require('jsonwebtoken')
// const userm=require('./models/UserModel')
// const locltorage=require('local-storage')
// const env=require('dotenv')

//   function main() {
//     let  tokenemail=jwt.sign({emaills},process.env.TOKEN_SECRET)
//     let transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     secure: false, 
//     auth: {
     
//     },
//   });

//   let info ={
//     from: '"soumia 👻" <testnodmtest@gmail.com>', // sender address
//     to: locltorage('email'),
//     subject: "Hello  verfication email✔", // Subject line
//     text: "Hello world", // plain text body
//     // html: '<a class="btn btn-danger" href="http://127.0.0.1:8888/app/auth/Confirmemail/'+tokenemail+'">click pour verfier</a>',
//   };
//   transporter.sendMail(info)
//   console.log(' email verifier')
  
// }

// const ConfirmEmail=async (req,res)=>{
//     const {token}=req.params
//     const tkn=jwt.verify(token,process.env.TOKEN_SECRET)
//     req.emaills=tkn
//     const veremail=await userm.findOneAndUpdate({email:req.emaills.emaills},{confirmEmail:true})
//     if(!veremail){
//         return res.send('note update')
//     }else{
//         res.send('verification de eamil et success')
//     }
// }

// module.exports={main}
