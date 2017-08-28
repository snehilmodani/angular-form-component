module.exports = function(grunt) {

  grunt.config.set('version', {
    dist: {
      options: {
        release: 'patch'
      },
      src: ['package.json'],
    }
  });
};