'use strict';

// Grunt Module
module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({

    // Get package meta data
    pkg: grunt.file.readJSON('package.json'),

    // Minify files with UglifyJS
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s)
  grunt.registerTask('default', ['uglify']);

};