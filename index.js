let request = require('request');

let url = `https://api.linkedin.com/v1/people/~?format=json`


https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=78ap0s9jxb123n&redirect_uri=lab-api-rest-1523914019.sa-east-1.elb.amazonaws.com&state=V90xCHFhnXEqMFEv&scope=r_basicprofile

var linkedin = require('node-linkedin')('78ap0s9jxb123n', 'V90xCHFhnXEqMFEv', 'http://lab-api-rest-1523914019.sa-east-1.elb.amazonaws.com');

var token = linkedin.auth.getAccessToken();


request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let message = JSON.parse(body)
    console.log(message);
    console.log(linkedin);
  }
});
