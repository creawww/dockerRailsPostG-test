exports.config = {
  specs: [
    './specs/**/*.js'
  ],
  maxInstances: 1,
  host: 'selenium',
  port: 4444,
  baseUrl: 'http://rails:3000',
  capabilities: [{
   browserName: 'chrome'
  }],
  reporters: ['spec']
}
