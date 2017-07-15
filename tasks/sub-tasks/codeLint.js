module.exports = function(grunt) {
  grunt.registerTask('codeLint', [
    'jshint:appLint'
  ]);
};