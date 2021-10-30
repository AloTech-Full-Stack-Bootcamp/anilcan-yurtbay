const express = require('express')
const path = require('path')
const app = express()
const port = 5000



app.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname,'routes', 'index.html'));
});

app.get('/index', function(req, res) {
    res.sendFile(path.resolve(__dirname,'routes', 'index.html'));
});

app.get('/about', function(req, res) {
    res.sendFile(path.resolve(__dirname,'routes', 'about.html'));
});

app.get('/contact', function(req, res) {
    res.sendFile(path.resolve(__dirname,'routes', 'contact.html'));
});




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});