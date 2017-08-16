var express = require('express');
var bodyparser = require('body-parser');

var app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.get('/', function(req, res){
  var html = '<form action="/signup/new" method="post">' +
             '<h1>User Name</h1>' +
             '<p>Enter your email</p>' +
             '<input type="text" name="email" placeholder="email address" />' +
             '<button type="submit">Submit</button>' +
         '</form>';
  res.send(html)
})



app.post('/signup/new', function(req, res){
  console.log(req.body);
  let email = req.body.email;
  res.send('Email: ' + email)
});


app.listen(3000, function(){
  console.log("hey its running")
});
