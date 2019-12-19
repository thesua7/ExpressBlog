const mongoose = require('mongoose')



///Users,Posts,Products

//create schema structure
const PostSchema = new mongoose.Schema(
    {
        title: String,
        description: String,
        content: String,
        createAt: {
            type: Date,
            default: new Date()
        },
        username: String
    }
)


const Post = mongoose.model('Post',PostSchema)
//.model('Schema name','Schema structure name')



module.exports = Post