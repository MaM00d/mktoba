
const express = require('express');
var router = express.Router();

var router = express.Router()
router.get('/', (req, res) => {
   res.render("MyBooks");
})
module.exports = router;