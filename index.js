const express = require('express');

const path = require('path')
const app = new express();

//{
// const expressEdge = require('express-edge'); 
// //npm install express-edge --save {Edge templating}

// app.use(expressEdge);
// app.set('views',`${__dirname}/views`);

// //}

const { config, engine } = require('express-edge');

// Configure Edge if need to
config({ cache: process.env.NODE_ENV === 'production' });

// Automatically sets view engine and adds dot notation to app.render
app.use(engine);
app.set('views', `${__dirname}/views`);


app.use(express.static('public'));


app.get('/',(req,res) =>{
    res.render('index')
})


app.get('/about',(req,res) =>{
    res.sendFile(path.resolve(__dirname,'pages/about.html'))
})


app.get('/post',(req,res) =>{
    res.sendFile(path.resolve(__dirname,'pages/post.html'))
})


app.get('/contact',(req,res) =>{
    res.sendFile(path.resolve(__dirname,'pages/contact.html'))
})



app.listen(4000,()=>{

console.log("App listening to port 4000");

})