const mongoose = require('mongoose')

const Post = require('./Database/models/post')


mongoose.connect('mongodb://localhost/Test')

//creating post
// Post.create({
//     title:'My first blog post',
//     description: 'Blog des',
//     content:'asdasdasd'
// },(error,post)=>{
//     console.log(error,post)
// })


//find by title
// Post.find({
//     title:'My first blog post'
// },(error,posts)=>{
//     console.log(error,posts)
// })


//find by id
// Post.findById("5d922b609ac925193082e51a",(error,posts)=>{
//     console.log(error,posts)
// })

//find by id and update
// Post.findByIdAndUpdate("5d922b609ac925193082e51a",{

//      title: "My first(modified) blog"

//   },(error,post)=>{
//     console.log(error,post)
//     })

//find all
Post.find({},(error,posts) =>{
    console.log(error,posts);
})