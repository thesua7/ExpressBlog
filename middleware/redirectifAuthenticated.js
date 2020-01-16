const User = require('../database/models/user')

module.exports = (req,res,next) => {

if(req.session.userId){
   console.log(req.session.userId)
   console.log("OK")
   return res.redirect('/')
}

next()

}
