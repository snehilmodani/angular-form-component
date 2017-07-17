module.exports = function(grunt) {
  grunt.registerTask('cleanDist', [
    'clean:dist', 'clean:docsDist', 'clean:docsVendor'
  ]);
};