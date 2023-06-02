var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://api.thetavideoapi.com/video',
  'headers': {
    'x-tva-sa-id': 'srvacc_ykzm3n9mqzrddwkvm1phxxi4x',
    'x-tva-sa-secret': '8u9jp5mxp12vg1gku21rtmydbnu79xdq',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({"source_uri":"https://www.youtube.com/watch?v=vMfmxwRv8qs","playback_policy":"public","nft_collection":"0x5d0004fe2e0ec6d002678c7fa01026cabde9e793"})

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
  var a=response.body;
  console.log(JSON.stringify(a.status)
             );
});