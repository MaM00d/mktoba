
const express = require('express');
var router = express.Router();

var router = express.Router()
router.get('/', (req, res) => {
   res.sendFile(__dirname + '/client/pages/MyBooks.html')
})
module.exports = router;