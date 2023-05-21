

const express = require('express');
var router = express.Router();
const path = require('path'); 
var db = require('../../services/dbrequests/dbreq');
// router.use(express.static(path.join(__dirname,'/client/static')));
 var bodyparser = require('body-parser')
 router.use(bodyparser.json());
 router.use(express.urlencoded({extended: true}));
router.get('/', (req, res) => {
   if(req.session.authenticated){
      res.send("you already logged in");
   }else{

   res.render("login",{auth:req.session.authenticated});
   }
})

router.post('/', async (req, res) => {
    data = req.body ;

tempuser = await db.getuserbyemail(data.email);

if(tempuser.password == data.password)
{
        req.session.user = tempuser;
        req.session.authenticated = true;
      //  res.redirect("/");
        res.json({success : true})
}
else{
   res.send('Invalid username or password');
}
})

module.exports = router;
