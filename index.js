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

const server = http.createServer(app)

server.listen(3000)
