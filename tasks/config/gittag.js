module.exports = function(grunt) {

var version = require('../../package.json').version;

  grunt.config.set('gittag', {
    version: {
      options: {
        tag: 'v' + require('../../package.json').version,
        message: 'Bumped to version: ' + version
      }
    }
  });
};