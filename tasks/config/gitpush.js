module.exports = function(grunt) {

  grunt.config.set('gitpush', {
    dist: {
      options: {
        // Target-specific options go here. 
        remote: 'origin',
        branch: 'master',
        tags: true
      }
    }
  });
};