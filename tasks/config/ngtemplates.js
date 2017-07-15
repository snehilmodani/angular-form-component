module.exports = function(grunt) {

  var BOOTSTRAP_ANGULAR_APP_NAME = 'formComponent.template';

  var source = ['<%= config.tplDir %>/**.tpl.html'];
  var dest = '<%= config.tplDir %>/templates.js';
  var cwd = '';

  grunt.config.set('ngtemplates', {
    prod: {
      cwd: cwd,
      src: source,
      dest: dest,
      options: {
        htmlmin: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
          removeComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true
        },
        bootstrap: function(module, script) {
          return 'angular.module(\'' + BOOTSTRAP_ANGULAR_APP_NAME + '\', []).run([\'$templateCache\', function($templateCache) { ' + script + '}]);';
        }
      }
    }
  });

};