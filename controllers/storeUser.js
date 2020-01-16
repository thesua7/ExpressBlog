const User = require('../database/models/user')


module.exports = (req,res) => {


    User.create(req.body,(error,user) => {

       if(error){
         const registrationError = Object.keys(error.errors).map(key => error.errors[key].message)


         req.flash('registrationError',registrationError)

         return  res.redirect('/auth/register')
       }


        res.redirect('/')


    })
}
