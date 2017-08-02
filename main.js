// Dependencies
// ============
var axios = require('axios');
var express = require('express');
var fs = require('fs');

// Helper functions.
// =================
var getMovies = function (genre) {
  var endpoint = 'https://www.gostream.is/genre/' + genre;

  axios.get(endpoint)
    .then(function (response) {
      fs.writeFile('response.html', response.data, function (error) {
        if (error) {
          console.log(error);
          console.log('Error saving file.');
        } else {
          console.log('Success saving file.');
        }
      })
      console.log('Success downloading file.');
    })
    .catch(function (error) {
      console.log(error);
      console.log('Error reading endpoint.');
    });
};

// Server config.
// ==============
var port = 3000;
var host = '127.0.0.1';
var app = express();

app.listen(port, host, function (request, response) {
  console.log(`Listening on ${host}:${port}...`)
})

// Routing and handling.
// =====================
app.get('/scrape', function (req, res) {
  getMovies('adventure');
  res.end('Thanks for coming!');
});