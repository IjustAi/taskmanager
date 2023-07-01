const connectDB=require('./db/connection')
const express= require('express');
const app =express();
const tasks =require('./routes/task');
require('dotenv').config()


app.use(express.json())
app.use('api/v1/taskes',tasks);

const port =3000;
const start = async ()=>{
    try{
        await connectDB(process.env.MONGO_URL);
        app.listen(port,console.log('listening '));

    }catch(error){
        console.log(error)
    }
}

start();