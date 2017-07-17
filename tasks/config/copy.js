module.exports = function(grunt) {

  // var source = ['<%= config.srcDir %>/**/*.js'];
  var vendorDest = '<%= config.vendorDir %>/';
  var distDest = '<%= config.docsDistDir %>/';
  var materialFiles = ['angular-material/angular-material.min.js', 'angular-material/angular-material.min.css'];
  var angularFiles = ['angular/angular.min.js', 'angular-animate/angular-animate.min.js', 'angular-aria/angular-aria.min.js', 'angular-messages/angular-messages.min.js', 'angular-material/angular-material.min.js']
  var distFiles = ['form-component.min.css', 'form-component.min.js'];
  grunt.config.set('copy', {
    docs: {
      files: [
        // includes files within path
        {expand: true, flatten: true, cwd: '<%= config.bowerDir %>/', src: materialFiles, dest: vendorDest},
        {expand: true, flatten: true, cwd: '<%= config.bowerDir %>/', src: angularFiles, dest: vendorDest},
        {expand: true, flatten: true, cwd: '<%= config.distDir %>/', src: distFiles, dest: distDest},
      ],
    },
  });

};