module.exports = function(grunt) {

  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		sass: {
			dist: {
				files: {
					'src/assets/css/app.css': 'src/assets/sass/app.scss'
				}
			}
		},

		jshint: {
			options: {
				reporter: require('jshint-stylish')
			},
			all: ['Grunfile.js', 'src/**/*.js']
		},

		uglify: {
			options: {
				banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
			},
			build: {
				files: {
					'src/assets/js/app.min.js': 'src/assetes/js/app.js'
				}
			}
		},

		coffee: {
            compile: {
                options: {
                    bare: false,
                    sourceMap: false
                },
                expand: true,
                flatten: false,
                cwd: 'src/assets/coffee',
                src: ['**/*.coffee'],
                dest: 'src/assets/js',
                ext: '.js',
                extDot: 'last'
            }
        },

		cssmin: {
			options: {
				banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
			},
			build: {
				files: {
					'src/assets/css/app.min.css': 'src/assetes/css/app.css'
				}
			}
		},

		concat: {
            dist: {
                files: {
                    'src/assets/js/app.js': ['src/assets/js/**/*.js']
                }
            },
        },

		uglify: {
			my_target: {
				files: {
					'src/assets/js/app.min.js': ['src/assets/js/app.js']
				}
			}
		},

		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass', 'cssmin', 'copy']
			},
			js: {
				files: '**/*.coffee',
				tasks: ['coffee', 'uglify', 'concat', 'copy']
			}
		},

		copy: {
		  main: {
  			files: [
  			  {expand: true, cwd: 'src/', src: ['**'], dest: 'dist/'}
  			],
		  },
		}

	});

  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');

  // ===========================================================================
  // CREATE TASKS ==============================================================
  // ===========================================================================
  grunt.registerTask('default', ['sass', 'cssmin', 'coffee', 'watch']);

};
