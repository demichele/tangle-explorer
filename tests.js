var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')
var IOTA = require('iota.lib.js');


var iota = new IOTA({
    'host': 'http://173.212.193.59',
    'port': 14265
});



//{'addresses': ['WZIWCGCRVRUVYUVLYFSFJKKVWSCP9JG9E99KGGXCRFMUSJAUWBDACKDWKAKWNBGKSWDUELRWFWRSNUGEXIELEJQNAX']}


  iota.api.findTransactionObjects({'addresses': ['WZIWCGCRVRUVYUVLYFSFJKKVWSCP9JG9E99KGGXCRFMUSJAUWBDACKDWKAKWNBGKSWDUELRWFWRSNUGEXIELEJQNAX']}, function(error, success) {
        
        if (error) {
            console.error(error);
        } else {
            console.error(success); 
        }
    
    })

