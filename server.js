// var http = require('http');
//
// var fs = require('fs')
//
// var server = new http.Server;
//
// server.listen(80, '127.0.0.1');
//
// server.on('request', function(req, res){
//   // fs.readFile('./request.html', function(err, data){
//   //   if(err) throw new Error(err);
//   //
//   //
//   // })
//
//   res.end('data');
// });


const express = require('express')
const app = express()
const port = 80

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// var one = function(){
//   app.post('/', (request, response) => {
//
//     response.send('Hello from Express!')
//
//   })}
//
//   setTimeout(one, 5000);


const fs = require('fs')
app.post('/', function (req, res) {
  const user = req.body
  fs.appendToFile('users.txt', JSON.stringify({name: 'user.name', age: 'user.age' }), (err) => {
    res.send('successfully registered')
  })
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port}`)
})
