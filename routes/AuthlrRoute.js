const express=require('express');
const {Register,Login,RsitePassword}=require('../controllers/AuthlrController');
const router=express.Router();
const veriftoken=require('../verifitoken')
const nodemail=require('../nodemailer')


router.post('/register',Register);
router.post('/login',Login);
router.post('/resitpassword',RsitePassword);
// midlllllllwair
router.get('/client',veriftoken.verifiertoken(['client']),(req,res)=>{
    res.send("hello Client")
});
router.get('/livreure',veriftoken.verifiertoken(['livreure']),(req,res)=>{
    res.send("hello livreure")
})
router.get('/*',(req,res)=>{
    res.send("erooore de access a cette page")
})
router.post('/*',(req,res)=>{
    res.send("erooore de access a cette page")
})
// router.get('/Confirmemail/:token',nodemail.ConfirmEmail)


module.exports = router;















// router.get('/Client',veriftoken.verifiertoken(["client"]),(req,res)=>{
//     res.send("hello clien")
// })
// router.get('/admin',veriftoken.verifiertoken(["admin"]),(req,res)=>{
//     res.send("hello admin")
// })
// router.get('/livreure',veriftoken.verifiertoken(["livreure"]),(req,res)=>{
//     res.send("hello livreure")
// })