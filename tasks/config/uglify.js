module.exports = function(grunt) {

  var source = ['<%= config.srcDir %>/**/*.js'];
  var dest = '<%= config.distDir %>/<%= config.minFileName %>.js';

  grunt.config.set('uglify', {
    dist: {
      options: {
        beautify: false,
        comments: false,
        compress: {
          global_defs: {
            'DEBUG': false
          },
          drop_console: true,
          drop_debugger: true,
          dead_code: true,
          if_return: true,
          join_vars: true,
          hoist_funs: true,
          sequences: true,
          properties: true,
          conditionals: true,
          comparisons: true,
          evaluate: true,
          booleans: true,
          loops: true,
          unused: true,
          cascade: true
        },
        mangle: true
      },
      files: [{
        expand: false,
        src: source,
        dest: dest
      }]
    }
  });

};