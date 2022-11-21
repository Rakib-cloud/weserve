const router = require('express').Router();





router.post('/register', (req, res) => {
 console.log(req.body);
 res.send('i get your data');
  })







module.exports=router;