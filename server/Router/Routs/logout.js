

const express = require('express');
var router = express.Router();
var auth = require('../../services/authentication/auth');
router.use(auth);

router.post('/logout',(req,res) => {
    req.session.destroy();
    res.redirect('/');
});
module.exports = router;

