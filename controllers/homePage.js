const Post = require('../Database/models/post')


module.exports = async (req,res) => {
    const posts = await Post.find({}); //Going to wait for this method to execute

    console.log(posts)

    res.render('index',{

        posts

    })
}