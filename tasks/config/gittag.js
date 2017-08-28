module.exports = function(grunt) {

var version = require('../../package.json').version;

  grunt.config.set('gittag', {
    version: {
      options: {
        tag: version,
        message: 'Bumped to version: ' + version
      }
    }
  });
};