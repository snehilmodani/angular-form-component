module.exports = function(grunt) {

  var newVersion = ['<%= config.newVersion %>'];

  grunt.config.set('gittag', {
    version: {
      options: {
        tag: 'v' + newVersion,
        message: 'Bumped to version: ' + newVersion
      }
    }
  });
};