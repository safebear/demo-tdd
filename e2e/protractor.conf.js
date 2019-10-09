exports.config = {

    seleniumAddress: "http://127.0.0.1:4444/wd/hub",

    baseUrl: "http://localhost:52330/src/index.html",

    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),

    specs: [
      "../features/*.feature",
    ],

    onPrepare: () => {
        browser.manage().window().maximize();
    },

    cucumberOpts: {
        format: "json:./results.json",
        profile: false,
        require: ["./step_definitions/*.steps.js", "./support/hooks.js"],
        tags: "@e2e and not @exploratory",
        "no-source": true,
    }
};