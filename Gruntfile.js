var timer = require("grunt-timer");

module.exports = function(grunt) {
	timer.init(grunt, {deferLogs: true, friendlyTime: true});
  	"use strict";

	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		jshint: { // stops compiling when you write bad js.
			all: ['scripts/src/*.js']
		},
		concat: { //concatenates .js files into one.
			debug: {
				src: 'scripts/src/*.js',
				dest: 'scripts/site/global.js'
			}
		},
		sass: {
			options: {
				outputStyle: 'nested'
			},			
			debug: {
				files: {
					'tmp/style.css': 'scss/style.scss'
				}
			}
		},
		autoprefixer: {
			debug: {
				expand:true,
				flatten: true,
				src: 'tmp/style.css',
				dest: '.'
			}
		},
		cmq: { //combines media queries
			debug: {
				'tmp/style.css': ['tmp/style.css']
			}
		},
		clean: {
			debug: {
				src: ["tmp"]
			}			
		},	
		cssmin: {
			options: {
				relativeTo: '../'
			},
			debug: {
				keepSpecialComments: 0,
				expand: true,
				cwd: 'css',
				src: ['*.css'],
				dest: '.',
				ext: '.css'
			}
		},	
		watch: { //checks for specified changes, refreshes browser if plugin is installed
			options: { livereload: true},
			scripts: {
				files: 'scripts/src/*.js',
				tasks: ['js']
			},
			css: {
				files: 'scss/*.scss',
				tasks: ['css']
			},
			img: {
				files: 'images/src/**/*.{jpg,gif,png,svg}',
				tasks: ['img']
			},
			php: {
				files: '*.php',
				tasks: []
			}
		}
	});
	
	require("load-grunt-tasks")(grunt);
	grunt.registerTask('js', ['jshint', 'concat']);
	grunt.registerTask('css', ['sass', 'cmq', 'autoprefixer', 'cssmin', 'clean']);
	grunt.registerTask('default', ['js', 'css']);
}