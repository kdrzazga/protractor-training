exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
    browserName: 'chrome',
    platformName: 'Windows'
  },
  specs: ['spec.js']
};
