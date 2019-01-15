const https = require('https');

module.exports = function getHTML (options, callback) {
  let totalResponse = '';
  https.get(options, function (response) {
    response.setEncoding('utf8');
    response.on('data', function(chunk) {
      totalResponse += chunk;
    });

    response.on('end', function (){
      callback(totalResponse);
    });
  });
};
