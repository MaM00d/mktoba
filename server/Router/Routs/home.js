
const express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
     
    if('authenticated' in req.session){
      if(req.session.authenticated){

   res.render("indexlogged");
      }
  }
else{

   res.render("index");
     }
})

module.exports = router;