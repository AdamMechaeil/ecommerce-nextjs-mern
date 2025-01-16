const { default: mongoose } = require("mongoose");

const clientSchema=mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    phonenumber:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:Array,
        default:[]
    }

})

const Client=mongoose.model("Client",clientSchema)

exports.module=Client
