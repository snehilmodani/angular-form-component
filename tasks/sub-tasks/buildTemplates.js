module.exports = function(grunt) {
  grunt.registerTask('buildTemplates', [
    'ngtemplates:prod' // build ng template cache
  ]);
};