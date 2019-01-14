const https = require('https');

function getAndPrintHTML (options) {
  let totalResponse = '';
  https.get(requestOptions, function(response) {

    response.setEncoding('utf8');

    response.on('data', function(chunk) {
      totalResponse += chunk + '\n';
    });

    response.on('end', function() {
    console.log(totalResponse);
  });
  });

}

  let requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };

getAndPrintHTML(requestOptions);
