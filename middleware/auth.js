const User = require('../database/models/user')

module.exports = (req,res,next) => {

User.findById(req.session.userId,(error,user) => {
    console.log(req.session.userId)
    if(error || !user) {
       
       return res.redirect('/') 
    }

    next()
})





}
