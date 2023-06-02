var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://api.thetavideoapi.com/video/video_z352zecqbp8fd1rkhyfjg0nxsv',
  'headers': {
    'x-tva-sa-id': 'srvacc_ykzm3n9mqzrddwkvm1phxxi4x',
    'x-tva-sa-secret': '8u9jp5mxp12vg1gku21rtmydbnu79xdq'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});