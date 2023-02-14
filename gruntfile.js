module.exports = function(grunt) {

    // Project configuration
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      
      // sass
      sass: {
        dist: {
          options: {
            style: 'compressed'
          },
          files: {
              'css/style.css': 'sass/style.scss'
          }
        }
      },

      // Watch
      watch: {
        css: {
          files: ['sass/**/*.scss'],
          tasks: ['sass'],
          options: {
            spawn: false,
          }
        }
      }

    });
  
    // Load the plugin that provides the "sass" task.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
  
    // Default task(s).
    grunt.registerTask('default', ['sass', 'watch']);
  
  };