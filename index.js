require('dotenv').config()

const express = require('express');
const expressSession = require('express-session')
const mongoose = require('mongoose');
const connectMongo = require('connect-mongo')
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const edge = require('edge.js')
const path = require('path');
const connetFlash = require('connect-flash')
const cloudinary = require('cloudinary')

const app = new express();

mongoose.connect(process.env.DB_URL);
const mongoStore = connectMongo(expressSession)


app.use(expressSession({
    secret: process.env.EXPRESS_SESSION_KEY,
    store: new mongoStore({
        mongooseConnection: mongoose.connection
    })
}))


const Post = require('./Database/models/post');

const storePost = require('./middleware/storePost')
const auth = require('./middleware/auth')
const redirectifAuthenticated = require('./middleware/redirectifAuthenticated')


cloudinary.config({
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    cloud_name: process.env.CLOUDINARY_NAME
})


app.use('*',(req,res,next) => {
    edge.global('auth',req.session.userId)
    next()
})
app.use(connetFlash());




const createPostController = require('./controllers/createPost')
const homePageController = require('./controllers/homePage')
const storePostController = require('./controllers/storePost')
const getPostController = require('./controllers/getPost')
const createUserController = require('./controllers/createUser')
const storeUserController = require('./controllers/storeUser')
const loginController = require('./controllers/login')
const loginUserController = require('./controllers/loginUser')
const logoutController = require('./controllers/logout')
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


//app.use('/posts/store',storePost);




app.get('/',homePageController)
app.get('/auth/register',redirectifAuthenticated,createUserController)
app.get('/posts/new',auth,createPostController);
app.get('/auth/login',redirectifAuthenticated,loginController);
app.get('/post/:id',getPostController);
app.get('/auth/logout',auth,logoutController);
// app.use((req,res) => res.render('not-found'));


app.post('/posts/store',auth,storePost,storePostController);
app.post('/users/register',redirectifAuthenticated,storeUserController);
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




