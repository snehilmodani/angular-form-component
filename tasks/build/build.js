module.exports = function(grunt) {
  grunt.registerTask('build', [
    'cleanDist', 'buildTemplates', 'buildJs', 'buildCss', 'buildDocs'
  ]);
};