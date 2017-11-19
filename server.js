// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));


app.get("/", function(req, res){
  var regex = /\((.*?)\)/;
  var regexip = /(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/;
  var regexlang = /(\w{2}-\w{2})\,/;
  var matches = regex.exec(req.headers['user-agent']);
  var ipmatch = regexip.exec(req.ip);
  var langmatch = regexlang.exec()
  console.log(req.headers["accept-language"]);
  res.send('{"ipaddress": "' + ipmatch[1] + '", "language": "", "software": "' + matches[1] + '"}');
});


// // http://expressjs.com/en/starter/basic-routing.html
// app.get("/", function (request, response) {
//   response.sendFile(__dirname + '/views/index.html');
// });

// app.get("/dreams", function (request, response) {
//   response.send(dreams);
// });

// // could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
// app.post("/dreams", function (request, response) {
//   dreams.push(request.query.dream);
//   response.sendStatus(200);
// });

// // Simple in-memory store for now
// var dreams = [
//   "Find and count some sheep",
//   "Climb a really tall mountain",
//   "Wash the dishes"
// ];

// listen for requests :)
app.listen(process.env.PORT);


// function () {
//   console.log('Your app is listening on port ' + listener.address().port);
// }