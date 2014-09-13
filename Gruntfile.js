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
            jasmine_node: {
                options: {
                    forceExit: true,
                    match: '.',
                    matchall: false,
                    extensions: 'js',
                    specNameMatcher: 'Spec'
                },
                all: ['specs/']
            },
            cucumberjs: {
                options: {
                    format: 'html',
                    output: './public/report.html',
                    theme: 'foundation'
                },
                features: []
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
    grunt.loadNpmTasks('grunt-jasmine-node');
    grunt.loadNpmTasks('grunt-selenium-webdriver');
    grunt.loadNpmTasks('grunt-cucumberjs');


    grunt.registerTask('default', ['jslint', 'cucumberjs']);
};