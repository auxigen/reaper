module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        supervisor: {
            target: {
                script: "server.js",
                options: {
                    extensions: [ "js,jade" ],
                    watch: [ "server.js,models" ]
                }
            }
        },
        concat: {
            basic: {
                src: [
                        "public/node_modules/angular/angular.js",
                        "public/node_modules/angular-aria/angular-aria.js",
                        "public/node_modules/angular-animate/angular-animate.js",
                        "public/node_modules/angular-material/angular-material.js",
                        "public/node_modules/angulargrid/angulargrid.js",
                        "public/node_modules/d3/d3.js",
                        "public/node_modules/nvd3/build/nv.d3.js",
                        "public/node_modules/leaflet/dist/leaflet-src.js"
                        //"public/node_modules/angular-nvd3/src/angular-nvd3.js"
                ],
                dest: "public/dist/<%= pkg.name %>.js",
                options: {
                }
            },
            
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'public/dist/<%= pkg.name %>.js',
                dest: 'public/dist/<%= pkg.name %>.min.js'
            }
        },
        injector: {
            options: {},
            local_dependencies: {
                files: {
                    'public/index.html': [
                        "public/dist/<%= pkg.name %>.min.js",
                        '**/*.css'
                    ],
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks( "grunt-supervisor" );
    grunt.loadNpmTasks("grunt-injector");
    // Default task(s).
    grunt.registerTask('default', ["concat", "uglify", 'supervisor']);

};