# Slush Productive

Slush abstraction focusing on productivity

## Instalation

```bash
npm install slush-productive gulp
```

## Usage 

```
'use strict';

var questions = [{
    type: 'input',
    name: 'name',
    message: 'Project name',
    validator: 'notEmpty'
}];

var tasks = [
    function logs(answers, callback) {
        console.log(answers);
        callback();
    },

    function anotherTask(answers, callback) {
        ....
    }
];

function answersParse(answers) {
    ansewers.name = "X - " + answers.name;
    return answers;
}

var slush = require('slush-productive')({
    questions: questions,
    tasks: tasks,
    answers: answersParse
});
```
