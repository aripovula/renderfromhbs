const express = require('express');
const hbs = require('hbs');
const http = require('http');
const path = require('path');

const port = 3002;
var app = express();
var server = http.createServer(app);

app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname , '../public')));

// app.get('/', (req, res) => {
//     res.render('index.html', {
//       pageTitle: 'Home Page',
//       welcomeMessage: 'Welcome'
//     });
//   });

app.get('/home', (req, res) => {
    res.render('home.hbs', {
      pageTitle: 'Home Page',
      welcomeMessage: 'Welcome'
    });
  });
  


server.listen(port, () => {
  //var createdAt = moment().format('h:mm a');
  console.log(`Server is up on port ${port} - started`);
});
