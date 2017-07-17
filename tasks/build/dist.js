module.exports = function(grunt) {
  grunt.registerTask('dist', [
    'cleanDist', 'buildTemplates', 'buildJs', 'buildCss', 'buildDocs'
  ]);
};