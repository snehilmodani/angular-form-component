module.exports = function(grunt) {

  var source = ['<%= config.distDir %>/**', '<%= config.docsDir %>/**', '<%= config.srcDir %>/**', '<%= config.tasksDir %>/**', '<%= config.gruntFileName %>'];
  var packageSrc = ['<%= config.packageFileName %>'];
  var currentVersion = ['<%= config.currentVersion %>'];
  var newVersion = ['<%= config.newVersion %>'];

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
        message: 'bumped',
        noVerify: true
      },
      files: {
        src: packageSrc
      }
    }
  });
};