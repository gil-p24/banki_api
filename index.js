// type of erros to look for
//syntax errors
//logical error
//runtime error

// imports 
const http = require('http');

//imports
const express = require('express');
const app = express()
app.use((req, res, next) => {
  console.log('middle baby');
  next()
  
})
app.use((req, res, next) => {
  console.log(' in in the middle baby');
  res.send('<h1>hello from the otherside</h1>')
  next()
  
})

const server = http.createServer(app)

server.listen(3000)
