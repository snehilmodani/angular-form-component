module.exports = function(grunt) {

  grunt.config.set('version', {
    dist: {
      options: {
        release: 'minor'
      },
      src: ['package.json'],
    }
  });
};