'use strict';

var assert = require('assert');
var Open = require('../lib/open');

function errorHandler(err){
    process.nextTick(function rethrow() { throw err; });
}

(new Open).run(
    [], // inputs
    {
        uri: 'http://taobao.com'
    }, // options
    console // logger
).then(function(inputs){

}).catch(errorHandler)
