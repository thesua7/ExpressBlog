const mongoose = require('mongoose')



///Users,Posts,Products

//create schema structure
const PostSchema = new mongoose.Schema(
    {
        title: String,
        description: String,
        content: String,
        author:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        image: String,

        createAt: {
            type: Date,
            default: new Date()
        },
     
    }
)


const Post = mongoose.model('Post',PostSchema)
//.model('Schema name','Schema structure name')



module.exports = Post