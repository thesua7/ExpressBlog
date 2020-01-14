const User = require('../database/models/user')

module.exports = (req,res,next) => {

User.findById(req.session._Id,(error,user) => {
    if(error || !user) {
       
       return res.redirect('/') 
    }

    next()
})





}
