'use strict';

// Grunt Module
module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({

    // Get package meta data
    pkg: grunt.file.readJSON('package.json'),

    // Run tasks whenever watched files change
    watch: {
      compass: {
        files: ['*.{scss,sass}', '**/*.{scss,sass}'],
        tasks: ['compass:dev']
      },
      js: {
        files: ['**/*.js'],
        tasks: ['uglify']
      }
    },

    compass: {
      dev: {
        options: {
          config: 'config.rb',
          environment: 'development'
        }
      },
      prod: {
        options: {
          config: 'config.rb',
          environment: 'production'
        }
      },
    },

    // Minify files with UglifyJS
    uglify: {
      options: {
        // the banner is inserted at the top of the output
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      build: {
        files: {
          'assets/js/min/script.min.js': ['assets/js/script.js'],
        }
      }
    },

    // A grunt task for the browser-sync module
    browserSync: {
      bsFiles: {
        src : 'assets/css/*.css'
      },
      options: {
        server: {
          baseDir: "./"
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s)
  grunt.registerTask('default', ['browserSync', 'watch']);

};