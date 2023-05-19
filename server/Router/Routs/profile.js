const express = require('express');
var router = express.Router();
const app = express();

router.get('/', (req, res) => {
   res.render("profile",  {user:req.session.user});
})

module.exports = router;