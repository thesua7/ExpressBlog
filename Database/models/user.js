const mongoose = require('mongoose')

const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({


    username: {

        type:String ,
        required : true,
        unique:true


    },


    email:{

      type:String ,
      required : true,
      unique:true

    },
    password: {

        type:String ,
        required : true

    }


})


userSchema.pre('save',function(next){

const user = this


bcrypt.hash(user.password,10,function(error,encrypted){

user.password = encrypted

next()


}) 



})


module.exports = mongoose.model('User',userSchema)