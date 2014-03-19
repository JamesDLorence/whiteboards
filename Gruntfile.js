module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    simplemocha: {
      all: { src: 'test/Linked_List_Class_test.js' },

      options: {
        timeout: 3000,
        ignoreLeaks: false,
        reporter: 'tap'
      }
    },

    jshint: {
      src: ['test/**/*.js', 'Gruntfile.js', 'lib/**/*.js'],
    }
  });

  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', 'simplemocha');
};
