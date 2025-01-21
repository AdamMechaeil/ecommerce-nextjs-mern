const express=require("express");
const morgan=require("morgan");
const cors=require("cors");
const dotenv=require("dotenv");
const { connectDb } = require("./config/db");
const authRouter = require("./routes/auth");
dotenv.config({path:"./config/config.env"})
connectDb();
const app=express();
app.use(cors())
app.use(express.json());
app.use(morgan("dev"));
app.get("/",(req,res)=>{
    res.send("Welcome")
})
app.use("/auth",authRouter)
app.listen(process.env.PORT,()=>{
    console.log("server is running");
})
