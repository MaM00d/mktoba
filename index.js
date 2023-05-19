// Imports
const express = require('express')
const app = express()
const port =  8080
 const session = require('express-session');
const router = require('./server/Router/routers')
const path = require("path");
app.use(express.static(path.join(__dirname,'/client/static')));
 app.use(express.json());
 app.use(express.urlencoded({extended: true}));

 app.use(express.json());
app.set('view engine', 'ejs'); // register the template engine
app.set('views', path.join(__dirname, '/client/pages'));
const SESSION_SECRET = "ajslkjalksjdfkl";
    app.use(session({
      name: "qid",
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
      }
    }))
app.use('/',router);
// Static Files
// Specific folder example
// app.use('/css', express.static(__dirname + 'public/css'))
// app.use('/js', express.static(__dirname + 'public/js'))
// app.use('/img', express.static(__dirname + 'public/images'))



// app.get('/', (req, res) => {
// console.log(req.sessionID);
//      if('authenticated' in req.session){
//       if(req.session.authenticated){
//    res.sendFile(__dirname + '/indexlogged.html')
//       }
//      }else{

//    res.sendFile(__dirname + '/')
//      }
// })
// app.get('/login', (req, res) => {
//    res.sendFile(__dirname + '/login.html')
// })
// app.get('/mybooks', (req, res) => {
//    res.sendFile(__dirname + '/MyBooks.html')
// })
// app.get('/book', (req, res) => {
//    res.sendFile(__dirname + '/bookdet.html')
// })
// app.get('/profile', async (req, res) => {
//   const user = await prisma.user.findUnique({

//   where: {
//     id: session.user
//   }
// })
//   let User = {
//     fname : user.fname,
//  lname :  user.lname,
//   email :  user.email,
//   password :  user.password,
//   }
//   console.log(User);
//   res.user = JSON.stringify(User);
//   res.sendFile(__dirname + '/profile.html');
// })




// app.get('/register', (req, res) => {
//    res.sendFile(__dirname + '/signup.html')
// })

// app.post('/adduser', async (req, res) => {
//     data = req.body;
// console.log(data);
// res.send(data);
//   const post = await prisma.User.create({
//   data
//     })

// //  res.json(post);
// })
// app.post('/loguser', async (req, res) => {
// console.log("in");
//     data = req.body;

// const user = await prisma.user.findUnique({

//   where: {
//     email: data.logemail,
//   }
// })
// if(user.password == data.password)
// {
//   console.log("inpass");
//         session.user=user.id;
//         req.session.authenticated = true;
//         res.json({success : true})

//         // res.send(`Hey there, welcome <a href=\'/logout'>click to logout</a>`);
// }
// else{
//    res.send('Invalid username or password');
// }
// //  res.json(post);
// })
// app.post('/logout',(req,res) => {
//     req.session.destroy();
//     res.redirect('/');
// });

app.listen(port, () => console.info(`App listening on port ${port}`))

