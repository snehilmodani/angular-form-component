module.exports = function(grunt) {

  var source = ['<%= config.distDir %>/**', '<%= config.docsDir %>/**', '<%= config.srcDir %>/**', '<%= config.tasksDir %>/**'];
  var packageSrc = ['<%= config.packageFileName %>'];

  grunt.config.set('gitadd', {
    dist: {
      options: {
        // force: true,
        all: false,
        verbose: true,
      },
      files: {
        src: source
      }
    },
    version: {
      options: {
        // force: true,
        all: true,
        verbose: true,
      },
      files: {
        src: packageSrc
      }
    }
  });
};