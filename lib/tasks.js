'use strict'

var config = require('./config');
var questioner = require('./questions');
var answers = require('./answers');

var manager = function() {
    var opts = config.get();
    var taskList = [questioner];

    for (var i = 0; i < opts.tasks.length; i++) {
        var task = opts.tasks[i];

        taskList.push(function(callback) {
            this.task(answers.get(), callback);
        }.bind({task: task}));
    }

    return taskList;
}

module.exports = manager;
