module.exports = function(grunt) {

	var path = require('path');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    config: {
      srcFolder: 'src',
      tplFolder: 'tpl',
      lessFolder: 'less',
      bowerFolder: 'packages',
      distFolder: 'dist',
      srcDir: '<%= config.srcFolder %>',
      lessDir: '<%= config.srcFolder %>/<%= config.lessFolder %>',
      bowerDir: '<%= config.bowerFolder %>',
      distDir: '<%= config.distFolder %>',
      tplDir: '<%= config.srcFolder %>/<%= config.tplFolder %>',
      minFileName: 'form-component.min'
    }
  });

  var includeAll;
  try {
    includeAll = require('include-all');
  } catch (e) {
    console.error('Could not find `include-all` module.');
    console.error('Skipping grunt tasks...');
    console.error('To fix this, please run:');
    console.error('npm install include-all --save-dev');
    console.error();
  }

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-clean');

  function loadTasks(relPath) {
    return includeAll({
      dirname: path.resolve(__dirname, relPath),
      filter: /(.+)\.js$/
    }) || {};
  }

  function invokeConfigFn(tasks) {
    for (var taskName in tasks) {
      if (tasks.hasOwnProperty(taskName)) {
        tasks[taskName](grunt);
      }
    }
  }

  var taskConfigurations = loadTasks('./tasks/config'),
    registerSubTasksDefinitions = loadTasks('./tasks/sub-tasks'),
    registerBuildDefinitions = loadTasks('./tasks/build');

  if (!registerSubTasksDefinitions.default) {
    registerSubTasksDefinitions.default = function(grunt) {
      grunt.registerTask('default', []);
    };
  }

  invokeConfigFn(taskConfigurations);
  invokeConfigFn(registerSubTasksDefinitions);
  invokeConfigFn(registerBuildDefinitions);

};