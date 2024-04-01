import express from "express";

const apiRoute=express.Router();

apiRoute.route.post('/login',(req,res)=>res.send("login"));
