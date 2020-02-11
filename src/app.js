var express = require('express');
var app = express();
var kalkulatory = require('./calculations-v1')   

app.use(express.static('docs'))
app.use(express.json());

app.post('/rest/capital', function (request, response) {
  var oprocentowanie = 0.2;    
  var kapital = request.body.kapital,
    czas = request.body.czas,
    wartosc;
  if (1000 <= kapital ) {
    wartosc = kalkulatory.wartoscLokaty(kapital, czas, oprocentowanie);
  } else {
    wartosc = null;
  }
  response.send({ "capital": wartosc });
});

app.use(function (err, req, res, next) {
  res.status(400).send({ result: err.stack })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

module.exports = app;
