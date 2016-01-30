'use strict';

describe('Constants : ', () => {

  let constants;

  beforeEach(() => {
    // instantiate the app module
    module('app');

    // mock the directive
    inject((AppSettings) => {
      constants = AppSettings;
    });
  });

  it('Should exist', () => {
    expect(constants).to.be.defined;
  });

  it('Should have an application name', () => {
    expect(constants.appTitle).to.be.equal('Example Application');
  });

});
