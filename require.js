const getHTML = require('./http-functions');

let requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printHTML (html) {
  console.log('from printHTML:', html);
}

getHTML(requestOptions, printHTML);
