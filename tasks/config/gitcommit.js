module.exports = function(grunt) {

  var source = ['<%= config.distDir %>/**', '<%= config.docsDir %>/**', '<%= config.srcDir %>/**', '<%= config.tasksDir %>/**'];
  var packageSrc = ['<%= config.packageFileName %>'];
  var version = require('../../package.json').version;

  grunt.config.set('gitcommit', {
    dist: {
      options: {
        message: 'code changes commited: '+ version,
        noVerify: true
      },
      files: {
        src: source
      }
    },
    version: {
      options: {
        message: 'bumped to: '+ version,
        noVerify: true
      },
      files: {
        src: packageSrc
      }
    }
  });
};