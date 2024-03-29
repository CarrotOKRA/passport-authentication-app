const mongoose =require('mongoose')
const UserSchema=new mongoose.Schema({
    name:{
        type:string,
        required:true
    },
    email:{
        type:string,
        required:true
    },
    password:{
        type:string,
        required:true
    },
    date:{
        type: Date,
        default:Date.now
    }
})
const user=mongoose.model('user',UserSchema);

module.exports=user;