module.exports = function(grunt) {
  grunt.registerTask('publishTag', [
    'version:dist',
    'gitadd:version',
    'gitcommit:version',
    'gittag:version',
    'gitpush:version',
  ]);
};