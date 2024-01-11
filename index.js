const express = require('express');

const app = express();

app.get('/',(req, res) => {

  res.end("Express Server 1");
})

app.listen(4000, (req,res) => {console.log("Application running on Port: 4000")});
