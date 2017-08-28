module.exports = function(grunt) {

  var source = ['<%= config.distDir %>/**', '<%= config.docsDir %>/**', '<%= config.srcDir %>/**', '<%= config.tasksDir %>/**'];
  var version = require('../../package.json').version;

  grunt.config.set('gitcommit', {
    dist: {
      options: {
        // Target-specific options go here. 
        message: 'bumped from version: '+ version,
        noVerify: true
      },
      files: {
        src: source
      }
    }
  });
};