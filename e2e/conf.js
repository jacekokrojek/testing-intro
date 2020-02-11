exports.config = {

	directConnect: true,

	specs: ['minimal.spec.js'],

	capabilities: {
		'browserName': 'chrome',
	},

	/// MINIMAL CONFIGURATION END /////////////////////////////////////////////////////

	onPrepare: function () {

		browser.manage().window().setSize(1680, 1050);
		browser.ignoreSynchronization = true;

		var SpecReporter = require('jasmine-spec-reporter');
		jasmine.getEnv().addReporter(new SpecReporter({
			displayStacktrace: true
		}));

	},

	jasmineNodeOpts: {
		onComplete: null,
		isVerbose: true,
		showColors: true,
		includeStackTrace: true,
		print: function () { }
	}

};
