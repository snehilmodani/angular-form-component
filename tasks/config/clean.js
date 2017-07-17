module.exports = function(grunt) {

  var source = ['<%= config.distDir %>/*'];
  var docsSource = ['<%= config.docsDistDir %>/*'];
  var docsVendorSource = ['<%= config.vendorDir %>/*'];

  grunt.config.set('clean', {
    dist: {
      options: {
        'no-write': false
      },
      src: source,
    },
    docsDist: {
      options: {
        'no-write': false
      },
      src: docsSource,
    },
    docsVendor: {
      options: {
        'no-write': false
      },
      src: docsVendorSource,
    }
  });
};