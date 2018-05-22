var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Prbando si anda todo ok con Express!')
})

app.listen(13000, function () {
  console.log('Example app listening on port 13000!')
})