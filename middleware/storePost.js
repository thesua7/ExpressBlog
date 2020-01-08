module.exports = (req,res,next) => {

    if(!req.files || !req.body.username || !req.body.content || !req.body.title || !req.body.discription){
        return res.redirect('/posts/new')
        
    }
    next()
 
}