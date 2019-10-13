module.exports = function(config) {
  config.set({
    mutate: ['src/**/*.js?(x)', '!src/**/*@(.test|.spec|Spec).js?(x)', '!src/bundle.js'],
    mutator: "javascript",
    packageManager: "yarn",
    reporters: ["html", "clear-text", "progress"],
    testRunner: "jest",
    coverageAnalysis: "off",
    // logLevel: 'debug',
    jest: {enableFindRelatedTests: false}

  });
};
