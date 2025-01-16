const { default: mongoose } = require("mongoose");

const sellerSchema=mongoose.Schema({
    sellerName:{
        type:String,
        required:true
    },
    sellerLogo:{
        type:String,
        required:true
    },
    sellerEmail:{
        type:String,
        required:true 
    },
    password:{
        type:String,
        required:true 
    },
    verified:{
        type:Boolean,
        default:false
    },
    token:{
        type:String
    }
})

const Seller=mongoose.model("Seller",sellerSchema);
module.exports=Seller
