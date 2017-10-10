var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
app.use(cors());

// Get request to return JSON 
app.get('/date/:dateValue', function(req, res, next) {
    // Gets the parameter after /date
    var dateValue = req.params.dateValue;

    // Options for formatting the datevalue
    var options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    if (isNaN(dateValue)) {
        var naturalDate = new Date(dateValue);
        naturalDate = naturalDate.toLocaleDateString("en-us", options);
        var unixDate = new Date(dateValue).getTime() / 1000;
    } else {
        var unixDate = dateValue;
        var naturalDate = new Date(dateValue * 1000);
        naturalDate = naturalDate.toLocaleDateString("en-us", options);
    }
    res.json({
        unix: unixDate,
        natural: naturalDate
    });
});

app.listen(3000, function() {
    console.log('Woking')
})