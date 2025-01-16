const { default: mongoose } = require("mongoose");

exports.connectDb=async()=>{
    try {
        const connect =await mongoose.connect(process.env.MONGO_URL);
        if(connect){
            console.log("Mongo is connected");
        }
    } catch (error) {
        console.log(error);
    }
}