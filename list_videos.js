const https = require('https');

const options = {
  hostname: 'api.thetavideoapi.com',
  path: '/video/srvacc_ykzm3n9mqzrddwkvm1phxxi4x/list?page=1&number=100',
  method: 'GET',
  headers: {
    'x-tva-sa-id': 'srvacc_ykzm3n9mqzrddwkvm1phxxi4x',
    'x-tva-sa-secret': '8u9jp5mxp12vg1gku21rtmydbnu79xdq'
  }
};

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on('data', d => {
    process.stdout.write(d);
  });
});

req.on('error', error => {
  console.error(error);
});

req.end();
