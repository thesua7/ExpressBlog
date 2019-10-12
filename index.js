const express = require('express');

const path = require('path')
const app = new express();


//npm -i save mongoose installing mongoose
const mongoose = require('mongoose')
//mongo variable
mongoose.connect('mongodb://localhost/BlogApp')

const bodyParser = require('body-parser')
//Intialing bodyparser

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

app.use(bodyParser.json())
//Can accept json from browser
app.use(bodyParser.urlencoded({ extended:true }))


app.use(express.static('public'));


app.get('/',(req,res) =>{
    res.render('index')
})

app.get('/posts/new',(req,res) =>{
    res.render('create')
})


app.post('/posts/store',(req,res)=>{
    console.log(req.body)
    res.redirect('/')
})

app.get('/about',(req,res) =>{
    res.render('about')
})


app.get('/post',(req,res) =>{
    res.render('post')
})


app.get('/contact',(req,res) =>{
   res.render('contact')
})



app.listen(4000,()=>{

console.log("App listening to port 4000");

})




