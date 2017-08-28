module.exports = function(grunt) {

  var source = ['<%= config.distDir %>/**', '<%= config.docsDir %>/**', '<%= config.srcDir %>/**', '<%= config.tasksDir %>/**'];

  grunt.config.set('gitadd', {
    dist: {
      options: {
        // force: true,
        all: true,
        verbose: true,
      },
      files: {
        src: source
      }
    }
  });
};