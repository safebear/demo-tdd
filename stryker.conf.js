module.exports = function(config) {
  config.set({
    mutator: "javascript",
    packageManager: "yarn",
    reporters: ["html", "clear-text", "progress", "dashboard"],
    testRunner: "jest",
    coverageAnalysis: "on",
    // logLevel: 'debug',
    jest: {enableFindRelatedTests: false}

  });
};
