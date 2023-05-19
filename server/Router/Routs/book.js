
const express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
   res.sendFile(__dirname + '/client/pages/bookdet.html')
})
module.exports = router;