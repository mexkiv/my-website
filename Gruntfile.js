
'use strict';

module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> | ' +
                'last update: <%= grunt.template.today("yyyy-mm-dd") %> */',

        watch: {

            js: {
                files: ['build/js/script.js'],
                tasks: ['uglify','concat'],
                options: {
                    livereload: true,
                },
            },

            css: {
                files: ['build/css/style.styl','build/css/variables.styl'],
                tasks: ['stylus','cssmin'],
                options: {
                    livereload: true
                },
            },

            file: {
                files: ['*.php','**/*.php'],
                options: {
                    livereload: true
                },
            },

            img: {
                files: ['build/img/*'],
                tasks: ['copy:img'],
                options: {
                    livereload: true
                },
            },
        },

        stylus: {
            'bower_components/_temp/style.css': [
                'bower_components/normalize.css/normalize.css',
                'build/css/style.styl'
            ]
        },

        cssmin: {
            'assets/css/style.min.css': [
                'build/css/webfonts.css',
                'bower_components/_temp/style.css'
            ]
        },

        uglify: {
            options: {
                mangle: false,
                preserveComments: false
            },
            target: 
            {
                files: {           
                    'bower_components/_temp/script.js': [
                        'build/js/script.js'
                    ]
                }
            }
        },

        concat: {
            options: {
                separator: ';',
                stripBanners: true
            },
            files: {
                src: [
                    'bower_components/html5shiv/dist/html5shiv.min.js',
                    'bower_components/_temp/script.js',
                ],
                dest: 'assets/js/script.min.js',
            },
        },

        clean: {
            assets: ["assets/*", "!assets/index.php"]
        },

        copy: {
            img: {
                cwd: 'build/img',
                src: ['*.{jpg,png,gif}','!_*.*'],
                dest: 'assets/img/',
                expand: true,
                dot: true
            },
            fonts: {
                cwd: 'build/fonts',
                src: ['*.{eot,svg,ttf,woff}'],
                dest: 'assets/fonts/',
                expand: true,
                dot: true
            },
            silence: {
                files: [
                    { 
                        cwd: './assets', 
                        src: ['index.php'],
                        dest: 'assets/img/',
                        expand: true,
                        dot: true
                    },
                    { 
                        cwd: './assets', 
                        src: ['index.php'],
                        dest: 'assets/css/',
                        expand: true,
                        dot: true
                    },
                    { 
                        cwd: './assets', 
                        src: ['index.php'],
                        dest: 'assets/js/',
                        expand: true,
                        dot: true
                    },
                    { 
                        cwd: './assets', 
                        src: ['index.php'],
                        dest: 'assets/fonts/',
                        expand: true,
                        dot: true
                    },
                ],
            expand: true,
                dot: true
            },
        },

        'ftp-deploy': {
            build: {
                auth: {
                    host: 'mexkiv.com.br',
                    port: 21,
                    authKey: 'key1'
                },
                src: './',
                dest: '/public_html/',
                exclusions: [
                    'node_modules',
                    'bower_components',
                    'Gruntfile.js',
                    'bower.json',
                    'package.json',
                    '.ftppass',
                    '.gitignore',
                    '.git',
                    'build'
                ]
            }
        }


    });
 
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-ftp-deploy');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['clean','copy','stylus','cssmin','uglify','concat','watch']);
    grunt.registerTask('deploy', ['ftp-deploy']);

};

