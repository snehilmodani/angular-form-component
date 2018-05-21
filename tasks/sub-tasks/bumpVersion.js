module.exports = function(grunt) {
  grunt.registerTask('bumpVersion', [
    'version:dist'
  ]);
};