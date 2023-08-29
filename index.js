var http = require('http');
var express = require('express')

const app =new express();
app.get('/', function (req, res) {
    res.send('hello world')
  })
app.listen(3000,()=>{
    console.log("I AM MONK")
})
