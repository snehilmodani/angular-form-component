module.exports = function(grunt) {
  grunt.registerTask('commitChanges', [
    'gitadd:dist',
    'gitcommit:dist',
    'gitpush:dist',
  ]);
};