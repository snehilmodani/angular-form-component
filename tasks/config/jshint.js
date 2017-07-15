/* global process */
module.exports = function(grunt) {

  var source = ['<%= config.srcFolder %>/**/**/*.js'];
  var ignores = ['<%= config.bowerDir %>/**/*.js'];

  grunt.config.set('jshint', {
    options: {
      reporter: require('jshint-stylish'),
      ignores: ignores
    },
    appLint: source
  });

  // grunt.loadNpmTasks('grunt-contrib-jshint');
};