module.exports = function(grunt) {

  var packageSrc = ['<%= config.packageFileName %>'];
  var semverIncrementLevel = 'patch';
  
  grunt.config.set('version', {
    dist: {
      options: {
        release: semverIncrementLevel
      },
      src: [packageSrc],
    }
  });
};