'use strict';

var gulp = require('gulp');
var async = require('async');
var $logger = require('./lib/logger');
var configManager = require('./lib/config.js');
var taskManager = require('./lib/tasks');

function run(opts) {
    configManager.set(opts);

    var taskList = taskManager(opts);

    gulp.task('default', function(callback){
        async.series(taskList, onError);

        function onError(err) {
            if (err) {
                $logger.error('error', err);
            }
        }
    });
};

module.exports = run;
