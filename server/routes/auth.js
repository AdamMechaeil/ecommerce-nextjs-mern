const express=require("express");
const { verify, sellerSignup, sellerSignin } = require("../controllers/auth/auth");
const authRouter=express.Router();

///////seller/////
authRouter.post("/seller/signup",sellerSignup)
authRouter.post("/seller/signin",sellerSignin)
authRouter.get("/seller/verify",verify)
//////client//////
//////admin///////

module.exports=authRouter;