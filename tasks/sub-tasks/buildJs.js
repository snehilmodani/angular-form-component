module.exports = function(grunt) {
  grunt.registerTask('buildJs', [
    'uglify:dist'
  ]);
};