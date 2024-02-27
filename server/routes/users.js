import express from "express";
import {login,register,logout} from "../controllers/auth.js";

const router = express.Router()

router.get("/test",(req,res)=>{
    res.send("it works!")
})

export default router

