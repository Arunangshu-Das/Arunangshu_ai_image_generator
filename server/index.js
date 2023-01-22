import express from 'express';
import * as dotenv from 'dotenv';
import connectDB from './mongodb/connect.js';
import cors from 'cors';

import postRoutes from './routes/postRoutes.js';
import imgRoutes from './routes/imgRoutes.js';

dotenv.config();

const app=express()
app.use(cors())
app.use(express.json({limit:'100mb'}))

app.use('/api/v1/post',postRoutes);
app.use('/api/v1/img',imgRoutes);

app.get('/',async(req,res)=>{
    res.send('Hello from Arunangshu')

})

const startServer= async()=>{

    try{
        connectDB(process.env.MONGODB_URL);
        app.listen(8000,()=>console.log('8000 starting'))
    }
    catch(error){

    }
}

startServer()