
const express = require('express');
var router = express.Router();
var db = require('../../services/dbrequests/dbreq');

router.get('/', (req, res) => {
   res.render("signup");
})

router.post('/', async (req, res) => {
    User = req.body;
await db.adduser(User);
tempuser = await db.getuserbyemail(User.email);
        req.session.user = tempuser;
        req.session.authenticated = true;
        res.json({success : true});
//  res.json(post);

})

module.exports = router;