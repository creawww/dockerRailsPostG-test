var expect = require('chai').expect

describe('The setup', function () {
  it('working', function () {
    browser.url('/')
    browser.saveScreenshot('captures/0setup.png');

    expect($('[name="csrf-param"]').getAttribute('content')).to.be.equal("authenticity_token")
  })
})
