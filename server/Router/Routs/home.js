
const express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
     
   res.render("index",{auth:req.session.authenticated});
})

module.exports = router;