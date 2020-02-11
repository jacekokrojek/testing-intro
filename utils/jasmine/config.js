const Jasmine = require('jasmine');
const JasmineConsoleReporter = require('jasmine-console-reporter');
const jasmine = new Jasmine();
var reporter = new JasmineConsoleReporter({
        colors: 1,
        cleanStack: 3,
        verbosity: 0,//{ pending: false, disabled: false, specs: true, summary: true },
        listStyle: 'indent',
        activity: false,

});
jasmine.addReporter(reporter);
jasmine.showColors(true);
jasmine.loadConfigFile('utils/jasmine/jasmine.json');
jasmine.execute();