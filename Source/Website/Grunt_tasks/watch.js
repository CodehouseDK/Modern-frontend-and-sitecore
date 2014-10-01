'use strict';
module.exports = function watch(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-contrib-watch');
    // Options
    return {
        less: {
            files: 'content/less/*.less',
            tasks: ['less', 'autoprefixer']
        },
        //js: {
        //    files: 'src/Codehouse.Web/scripts/website/**/*.js',
        //    tasks: ['jshint', 'ngAnnotate', 'uglify', 'karma:watch'],
        //    options: {

        //    }
        //}
    };
};
