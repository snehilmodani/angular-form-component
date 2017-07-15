module.exports = function(grunt) {

  var source = ['<%= config.lessDir %>/*.less'];

  grunt.config.set('less', {
    dist: {
      options: {
        compress: true
      },
      files: {
        '<%= config.distDir %>/<%= config.minFileName %>.css': source
      }
    }
  });

  // grunt.loadNpmTasks('grunt-contrib-jshint');
};