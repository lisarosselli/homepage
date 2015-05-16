module.exports = function(grunt) {
	grunt.initConfig({
		jshint: {
			all: ['js/*.js']
		},
		csslint: {
			all: ['css/*.css']
		},
		watch: {
			html: {
				files: ['*.html']
			},
			js: {
				files: ['js/*.js'],
				tasks: ['jshint']
			},
			css: {
				files: ['css/*.css'],
				tasks: ['csslint']
			}
		},
		uglify: {
		    my_target: {
					options: {
						sourceMap: true
					},
		      files: {
		        'dist/main.min.js': ['js/main.js']
		      }
		    }
		  },
			cssmin: {
			  options: {
			    shorthandCompacting: false,
			    roundingPrecision: -1
			  },
			  target: {
			    files: {
			      'dist/output.css': ['css/styles.css']
			    }
			  }
			}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	// see .jshintrc for options used in test (vim .jshintrc)
	grunt.registerTask('test', ['jshint']);
	grunt.registerTask('build', ['jshint', 'uglify', 'cssmin']);
};
