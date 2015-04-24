'use strict';

var gulp = require('gulp');
var questioner = require('questioner');
var answerControl = require('./answers');
var config = require('./config');

module.exports = function(callback) {
    var opts = config.get();

    questioner(opts.questions, function(answers){
        answerControl.set(answers);
        callback(null, true);
    });
};
