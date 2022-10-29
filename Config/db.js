const mongoose=require('mongoose')

const DB_HOTE='mongodb://127.0.0.1:27017';
const DB_NAME='mar7abaV2';
const URL=`${DB_HOTE}/${DB_NAME}`
const OPTION={}

const Connect=mongoose.connect(URL,OPTION)
const db=mongoose.Connect
try {
    console.log("connection with servreur is connetecd succefly")
} catch (error) {
    console.log("error de connection with database")
}


