module.exports = function(grunt) {

var version = require('../../package.json').version;

  grunt.config.set('gittag', {
    dist: {
      options: {
        tag: version,
        message: 'Bumped to version: ' + version
      }
    }
  });
};