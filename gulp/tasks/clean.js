var config = require('../config'),
	gulp = require('gulp'),
	del = require('del');

module.exports = function(taskName) {

	gulp.task(taskName, function(cb) {

		del.sync(config.clean);
		cb();
	});
};