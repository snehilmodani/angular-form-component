module.exports = function(grunt) {
  grunt.registerTask('dist', [
    'build', 'commitChanges', 'publishTag'
  ]);
};