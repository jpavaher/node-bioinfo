let request = require('request');

let personId = 'jpavaher';

let url = `https://torre.bio/api/bios/${personId}/achievements`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let message = JSON.parse(body)
    console.log(message);
  }
});
