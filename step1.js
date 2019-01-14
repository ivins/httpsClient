const https = require('https');

function getAndPrintHTMLChunks () {

  const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };
  let totalResponse = '';
  https.get(requestOptions, function(response) {

    response.setEncoding('utf8');

    response.on('data', function(chunk) {
      // totalResponse += chunk + '\n';
      totalResponse += chunk + '\n';
    });

    response.on('end', function() {
    console.log(totalResponse);
  });
  });
}

getAndPrintHTMLChunks();
