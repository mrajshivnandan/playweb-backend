require('dotenv').config(); //to save sensitive information on .env file
const express= require('express');
require('./db/conn')  //connect to DB
const app= express();

const PORT= process.env.PORT || 8000;
app.use(express.json())  //to get data from user as json format
app.use(require('./router/auth'));  //all restAPi calls

if(process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));
    // const path = require('path');
    // app.get('*',(req,res)=>{
    //     res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    // })
}

app.listen(PORT,()=>{
    console.log('Connected to port '+PORT);
})