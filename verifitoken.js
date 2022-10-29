const jwt=require('jsonwebtoken')
const env=require('dotenv')
const locltorage=require('local-storage')

function verifiertoken(data){
    return (req,res,next)=>{
        if(locltorage('tokene')){
            const verftoken=jwt.verify(locltorage('tokene'),process.env.TOKEN_SECRET)
            if(verftoken){
                if(data.includes(verftoken.checkuser.role[0])){
                    next()
                }else{
                    res.send("access deaid !!!!!!!!!!!!!!!!!")
                }
            }else{
                res.send("token inavalid")
            }
        }else{
            res.send(" aucun tokene existe ")
        }
    }
}
module.exports={verifiertoken}









// function verifiertoken(data){
//     return(req,res,next)=>{
//         if(locltorage('tokene')){
//             const verftoken=jwt.verify(locltorage('tokene'),process.env.TOKEN_SECRET)
//             if(verftoken){
//                 req.use=verftoken
//                 if(data.includes(verftoken.checkuser.role)){
//                     next()
//                 }else{
//                     res.send('access denid')
//                 }
//             }else{
//                 res.send("invalid token")
//             }
//         }
//         res.send("token not exixt")


//     }

// }