'use strict';

module.exports = {
    _options: {},

    get: function() {
        return this._options;
    },

    set: function(opts) {
        for (var opt in opts) {
            if (Object.prototype.hasOwnProperty.call(opts, opt)) {
                this._options[opt] = opts[opt];
            }
        }
    }
};
