var Execution = require('execution');

module.exports = Execution.extend({
    // The type of option could be HTML5 input types: file, directory, number, range, select,
    // url, email, tel, color, date, time, month, time, week, datetime(datetime-local),
    // string(text), boolean(checkbox), array, regexp, function and object.
    options: {
        uri: {
            label: 'File Path or URL',
            type: 'string'
        }
    },
    run: function (inputs, options, logger, settings) {
        if (typeof options === 'string') {
            options = {uri: options};
        }
        return this._run(inputs, options, logger, settings);
    },
    execute: function (resolve, reject) {
        var options = this.options;
        var inputs = this.inputs;
        var logger = this.logger;

        var open = require('open');
        open(options.uri);

        resolve(inputs);
    }
})
