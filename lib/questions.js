'use strict';

var gulp = require('gulp');
var questioner = require('questioner');
var answerControl = require('./answers');

module.exports = function(questions) {
    return function(callback) {
        questioner(questions, function(answers){
            answerControl.set(answers);
            callback(null, true);
        });
    }
};
