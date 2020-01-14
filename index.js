const express = require('express');
const expressSession = require('express-session')
const mongoose = require('mongoose');
const connectMongo = require('connect-mongo')
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const path = require('path');
const app = new express();

mongoose.connect('mongodb://localhost/BlogApp');
const mongoStore = connectMongo(expressSession)


app.use(expressSession({
    secret: 'secret',
    store: new mongoStore({
        mongooseConnection: mongoose.connection
    })
}))



//npm -i save mongoose installing mongoose



//mongo variable
//DB Nmae Blogapp






const Post = require('./Database/models/post');

const createPostController = require('./controllers/createPost')
const homePageController = require('./controllers/homePage')
const storePostController = require('./controllers/storePost')
const getPostController = require('./controllers/getPost')
const createUserController = require('./controllers/createUser')
const storeUserController = require('./controllers/storeUser')
const loginController = require('./controllers/login')
const loginUserController = require('./controllers/loginUser')
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

app.use(bodyParser.json());



app.use(fileUpload());

//Can accept json from browser
app.use(bodyParser.urlencoded({ extended:true }));


app.use(express.static('public'));


const storePost = require('./middleware/storePost')
const auth = require('./middleware/auth')

//app.use('/posts/store',storePost);




app.get('/',homePageController)
app.get('/auth/register',createUserController)
app.get('/posts/new',auth,createPostController);
app.get('/auth/login',loginController);
app.get('/post/:id',getPostController);

app.post('/posts/store',auth,storePost,storePostController);
app.post('/users/register',storeUserController);
app.post('/users/login',loginUserController)



app.get('/about',(req,res) =>{
    res.render('about')
})




app.get('/contact',(req,res) =>{
   res.render('contact')
})



app.listen(4000,()=>{

console.log("App listening to port 4000");

})




