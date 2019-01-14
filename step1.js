const https = require('https');

function getAndPrintHTMLChunks () {
  const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function(response) {

    response.setEncoding('utf8');

    response.on('data', function(chunk) {
      console.log(chunk + '\n');
    });

    response.on('end', function() {
    console.log('Stream ended');
  });
  });
}

getAndPrintHTMLChunks();
