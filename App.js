import express from "express";

const app=express();

const PORT=8089;

app.listen(PORT,()=>{
    console.log('server is running');
})