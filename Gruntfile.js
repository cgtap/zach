module.exports = function(grunt) {

  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),
		
		sass: {
			dist: {
				files: {
					'assets/css/app.css': 'assets/sass/app.scss'
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
					'assets/js/app.min.js': 'assetes/js/app.js'
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
                cwd: 'assets/coffee',
                src: ['**/*.coffee'],
                dest: 'assets/js',
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
					'assets/css/app.min.css': 'assetes/css/app.css'
				}
			}
		},
		
		concat: {
            dist: {
                files: {
                    'assets/js/app.js': ['assets/js/*.js']
                }
            },
        },
		
		uglify: {
			my_target: {
				files: {
					'assets/js/app.min.js': ['assets/js/app.js']
				}
			}
		},

		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass', 'cssmin']
			},
			js: {
				files: '**/*.coffee',
				tasks: ['coffee', 'uglify']
			}
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

  // ===========================================================================
  // CREATE TASKS ==============================================================
  // ===========================================================================
  grunt.registerTask('default', ['sass', 'cssmin', 'coffee', 'watch']);

};