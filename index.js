var express = require('express')
var app = express()
let bodyParser = require('body-parser')
app.use(bodyParser.json());

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    console.log(req);
    res.json({ 
        name: 'Bill',
        age: 28,
    })
})

app.post('/people', function (req, res) {
    // To get POST variables, access req.body
    res.json({
        name: 'Bill',
        age: 28,
        body: req.body
    })
})

app.listen(8080, function(){
    console.log('app is running.')
})