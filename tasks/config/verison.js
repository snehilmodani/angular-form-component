module.exports = function(grunt) {

  var packageSrc = ['<%= config.packageFileName %>'];
  
  grunt.config.set('version', {
    dist: {
      options: {
        release: '<%= config.semverIncrementLevel %>'
      },
      src: [packageSrc],
    }
  });
};