// init project
var express = require('express');
var app = express();

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));


app.get("/", function(req, res){
  var regex = /\((.*?)\)/;
  var regexip = /(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/;
  var regexlang = /(\w{2}-\w{2})\,/;
  var matches = regex.exec(req.headers['user-agent']);
  var ipmatch = regexip.exec(req.ip);
  var langmatch = regexlang.exec(req.headers["accept-language"]);
  console.log();
  res.send('{"ipaddress": "' + ipmatch[1] + '", "language": "' + langmatch[1] + '", "software": "' + matches[1] + '"}');
});

// listen for requests :)
app.listen(process.env.PORT);
