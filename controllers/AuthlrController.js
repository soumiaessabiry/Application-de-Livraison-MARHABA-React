const db=require('../Config/db')
const usersm=require('../models/UserModel')
const rolesm=require('../models/RoleModel')
const bcrypt = require("bcrypt");
const bcryptjs = require("bcryptjs");
const locltorage=require('local-storage')
const jwt=require('jsonwebtoken')
const env=require('dotenv')
const nodemail=require('../nodemailer')
const Role_Client=process.env.Role_Client
const Role_Manger=process.env.Role_Client
const Role_Livreur=process.env.Role_Client

//**register**/
const Register=async (req,res)=>{
    // const {body} = req
    const checkemail= await usersm.findOne({email:req.body.email})
    if(checkemail){
        return res.send("email is already registered")
    }
    const salt=await bcrypt.genSalt(10)
    const Rpwd=req.body.password.toString()
    const hachpassword=await bcrypt.hash(Rpwd,salt)

    // insrtrt user
    const InsertUser=new usersm({
        // ...body,
        username:req.body.username,
        email:req.body.email,
        password:hachpassword,
        role:Role_Client
    })
    // save user
    const saveuser=await InsertUser.save()
    try {

        res.send(saveuser)
    } catch (error) {
        res.send("erroor de insert user")

    }
}

//**login**/
const Login=async (req,res)=>{
    const pwdlogin=req.body.password.toString();
    const emaillogin=req.body.email;
    const checkuser= await usersm.findOne({
        email:emaillogin
    })
    if(checkuser){
        const compartpwt=await bcrypt.compare(pwdlogin,checkuser.password)
        if(!compartpwt){
            res.send('pwd incorect')
        }else{
            const tokene=jwt.sign({checkuser},process.env.TOKEN_SECRET)
            locltorage('tokene',tokene)
            // locltorage('email',email)
            res.send(`hello ${checkuser.username} votre role et ${checkuser.role}`)

        }
    }else{
        res.send("user do not exiiiist")
    }

}
const RsitePassword= async(req,res)=>{
    let emaillog=req.body.email;
    let passwordlog=req.body.password.toString();
    let newpasswordlog=req.body.newpassword.toString()
    let newpwdhach=await bcrypt.hash(newpasswordlog,10)
    const checUser= await usersm.findOne({
        email:emaillog,
    })
    if(checUser){
        // res.send(checUser)
        const comppwd=await bcrypt.compare(passwordlog,checUser.password)
        if(comppwd){
            // res.send("b7al b7alll")
            const updpwd=await usersm.updateOne({email:emaillog},{$set:{password:newpwdhach}})
            if(updpwd){
             res.send("tbadal")

            }else{
                res.send("matabdlchtbadal")
            }

        }else{
            res.send("machi b7al b7alll")

        }
    }else{
        res.send("user makaynch")
    }
}
// creat role
const InsertRole=new rolesm({
    name:'Manger'
})
InsertRole.save()


module.exports={
    Register,
    Login,
    RsitePassword,
}