const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const cor=require('cors');

app.use(bodyParser.json());
app.use(cor());
app.get('/', (req, res) => {
  res.send('weserve server is running')
})

//this routes work is another folder.
app.use(require('./Routes/users'));


app.listen(5000, () => {
    console.log('server is running');
  });
  
  