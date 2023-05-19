

const express = require('express');
var router = express.Router();
const path = require('path'); 
var db = require('../../services/dbrequests/dbreq');
// router.use(express.static(path.join(__dirname,'/client/static')));
 var bodyparser = require('body-parser')
 router.use(bodyparser.json());
 router.use(express.urlencoded({extended: true}));
router.get('/', (req, res) => {
   res.render("login");
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
