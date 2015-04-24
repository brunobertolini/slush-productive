'use strict';

var _s = require('underscore.string');
var config = require('./config');

module.exports = {
    _errors: [],
    _answers: [],

    get: get,
    set: set,
    parse: parse,

    errors: errors
};

/////////////////////////////

function set(answers) {
    if (!answers.length) {
        var opts = config.get();

        this._answers = answers;
        this.parse();

        if (opts.answers) {
            this._answers = opts.answers(this._answers);
        }
    }
}

function get() {
    return this._answers;
}

function parse() {
    this._answers.commands = [];
    this._answers.slugName = _s.slugify(this._answers.name);
}

function errors(err) {
    if (err) {
        this._errors.push(err);
    }

    return this._errors;
}
