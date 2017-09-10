var express = require('express');
var app = express();

app.get("/", function(req, res) {
  res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/pig", function(req, res) {
  res.send("The pig says 'Oink'");
});

app.get("/speak/cow", function(req, res) {
  res.send("The pig says 'Moo'");
});

app.get("/speak/dog", function(req, res) {
  res.send("The pig says 'Woof Woof!'");
});

app.get("/repeat/:word/:iter", function(req, res) {
  var string = "";

  for(var i = 0; i < Number(req.params.iter); i++) {
    string += req.params.word + " ";
  }
  res.send(string);
});

app.get("*", function(req, res) {
  res.send("Sorry, page not found");
})

app.listen('3000', function() {
  console.log("Server started");
});
