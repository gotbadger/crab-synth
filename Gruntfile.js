module.exports = function(grunt) {
  grunt.initConfig({
    bundle_name: 'index',
    js_target_dir: './build/js',
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      assets: { expand: true, cwd: 'static/', src: ['**'], dest: 'build/'}
    },
    clean: ["./build"],
    jshint: {
      options: {
        force:false,
        jshintrc:true,
      },
      all: ['Gruntfile.js', 'src/**/*.js']
    },
    browserify: {
      three:{
        files: {
            '<%= js_target_dir %>/<%= bundle_name %>.js': ['src/index.js'],
        },
        options:{
            debug:true    
        }
      },
    },

    watch: {
      files: [ "./src/**/*.js"],
      tasks: [ 'all' ]
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('all', 'run all tasks', function() {
    grunt.task.run(['clean','jshint','copy','browserify']);
  });
};