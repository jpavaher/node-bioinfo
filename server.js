const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index', {personId: null, error: null});
})

app.post('/', function (req, res) {
  let pId = req.body.personId;
  let url = `https://torre.bio/api/bios/${pId}/achievements`

  request(url, function (err, response, body) {
    if(err){
      res.render('index', {personId: null, error: 'Error, please try again'});
    } else {
      let bio = JSON.parse(body)
      console.log(bio) 
      if(bio == undefined){
        res.send('Error, please try again');
      } else {
        res.send(bio);
      }
    }
  });
})

app.listen(3000, function () {
  console.log('Service running on port 3000!')
})
