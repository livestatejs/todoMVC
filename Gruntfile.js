module.exports = function(grunt) {

    var src = ['src/**/*.js'],
        specs = ['specs/**/*.js'],
        all = src.concat(specs);

    grunt.initConfig(
        {
            jasmine: {
                default: {
                    src: src,
                    options: {
                        specs: specs,
                        junit: {
                            path: 'reports',
                            consolidate: true
                        },
                        keepRunner: true
                    }
                }
            },
            jslint: {
                default: {
                    src: all,
                    exclude: [],
                    directives: {
                        sloppy: true,
                        browser: true,
                        predef: [
                            'console','describe','it','runs','waitsFor','xdescribe','xit','spyOn','jasmine','expect','beforeEach','afterEach'
                        ]
                    }
                }
            },
            mocha: {
              default: {
                src: ['specs/**/*.spec.js'],
              },
            },
        }
    );

    grunt.loadNpmTasks('grunt-mocha');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-jslint');


    grunt.registerTask('default', ['jslint','jasmine']);
};