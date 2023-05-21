const express = require('express');
var router = express.Router();
const app = express();

router.get('/', (req, res) => {
   if(req.session.authenticated){
   res.render("profile",  {user:req.session.user,auth:req.session.authenticated});
   }
   else{
      res.send("you arenot loginned");
   }
})

module.exports = router;