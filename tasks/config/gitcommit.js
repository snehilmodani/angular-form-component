module.exports = function(grunt) {

  var semver = require('semver');
  var source = ['<%= config.distDir %>/**', '<%= config.docsDir %>/**', '<%= config.srcDir %>/**', '<%= config.tasksDir %>/**', '<%= config.gruntFileName %>'];
  var packageSrc = ['<%= config.packageFileName %>'];
  var currentVersion = ['<%= config.currentVersion %>'];
  var newVersion = semver.inc(currentVersion, 'patch');

  grunt.config.set('gitcommit', {
    dist: {
      options: {
        message: 'code changes commited: '+ currentVersion,
        noVerify: true
      },
      files: {
        src: source
      }
    },
    version: {
      options: {
        message: 'bumped to: '+ newVersion,
        noVerify: true
      },
      files: {
        src: packageSrc
      }
    }
  });
};