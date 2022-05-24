const express = require('express')
const cors = require('cors')


const app = express();

app.get('/task', (req, res) =>{
  res.send("Hello World")
})

app.get('/addnew', (req, res) => {
  res.send("You can add")
})

app.get('/delete', (req, res) => {
  res.send("You can delete")
})

app.listen(4000, () =>{
  console.log("runing on port 4000")
})