const functions = require('firebase-functions').region('europe-west2');

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send('Hello from Firebase!');
});
