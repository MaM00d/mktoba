
const express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
   res.render("signup");
})

router.post('/', async (req, res) => {
    data = req.body;
console.log(data);
res.send(data);
  const post = await prisma.User.create({
  data
    })

//  res.json(post);

})

module.exports = router;