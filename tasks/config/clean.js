module.exports = function(grunt) {

  var source = ['<%= config.distDir %>/*'];

  grunt.config.set('clean', {
    dist: {
      options: {
        'no-write': false
      },
      src: source,
    }
  });
};