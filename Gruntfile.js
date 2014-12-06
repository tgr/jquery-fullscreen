/*jshint node:true */
module.exports = function ( grunt ) {
	grunt.loadNpmTasks( 'grunt-contrib-jshint' );
	grunt.loadNpmTasks( 'grunt-jscs-checker' );
	grunt.loadNpmTasks('grunt-contrib-qunit');

	grunt.initConfig({
		jshint: {
			all: ['*.js']
		},
		jscs: {
			all: '<%= jshint.all %>'
		},
		qunit: {
			all: ['test/index.html']
		}
	});

	grunt.registerTask('test', ['jshint', 'jscs', 'qunit']);
	grunt.registerTask('default', ['test']);
};
