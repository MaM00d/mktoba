// Imports
const express = require('express')
const app = express()
const port = 8080
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient();
const bodyParser = require('body-parser')
const { PrismaSessionStore } = require('@quixo3/prisma-session-store');

const session =require('express-session');
const cookieParser = require("cookie-parser");
const SESSION_SECRET = "ajslkjalksjdfkl";

// app.use(cookieParser());
//   app.use(
//     session({
//       name: "qid",
//       secret: SESSION_SECRET,
//       resave: false,
//       saveUninitialized: false,
//       store: new PrismaSessionStore(
//       new PrismaClient(),
//       {
//         checkPeriod: 2 * 60 * 1000,  //ms
//         dbRecordIdIsSessionId: true,
//         dbRecordIdFunction: undefined,
//       }
//     ),
//       cookie: {
//         httpOnly: true,
//         secure: process.env.NODE_ENV === "production",
//         maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
//       }
//     })
//   );

app.use(express.json());

app.use(
    express.urlencoded({
      extended: true,
    })
  );app.use(express.json());


app.use(express.static('public'));
// Static Files
// Specific folder example
// app.use('/css', express.static(__dirname + 'public/css'))
// app.use('/js', express.static(__dirname + 'public/js'))
// app.use('/img', express.static(__dirname + 'public/images'))

// Set View's

// Navigation

app.get('/', (req, res) => {
 //  session=req.session;
   //  if(session.userid){
   //      res.send("Welcome User <a href=\'/logout'>click to logout</a>");
   //  }else{

   res.sendFile(__dirname + '/')
   // }
})
app.get('/login', (req, res) => {
   res.sendFile(__dirname + '/login.html')
})
app.get('/mybooks', (req, res) => {
   res.sendFile(__dirname + '/MyBooks.html')
})
app.get('/book', (req, res) => {
   res.sendFile(__dirname + '/bookdet.html')
})



app.get('/register', (req, res) => {
   res.sendFile(__dirname + '/signup.html')
})

app.post('/adduser', async (req, res) => {
    data = req.body;

res.send(data);
  const post = await prisma.User.create({
  data
    })

//  res.json(post);
})
app.post('/loguser', async (req, res) => {

    data = req.body;

const user = await prisma.user.findUnique({

  where: {
    email: data.logemail,
  }
})
if(user.password == data.pass3)
{

        session.userid=user.id;
        res.send(`Hey there, welcome <a href=\'/logout'>click to logout</a>`);
}
else{
   res.send('Invalid username or password');
}
//  res.json(post);
})
app.get('/logout',(req,res) => {
    req.session.destroy();
    res.redirect('/');
});

app.listen(port, () => console.info(`App listening on port ${port}`))

