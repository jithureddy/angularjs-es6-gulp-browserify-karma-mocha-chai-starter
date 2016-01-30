'use strict';

describe('ExampleCtrl : ', () => {

  let ctrl;

  beforeEach(() => {
    // instantiate the app module
    module('app');

    inject(($controller) => {
      ctrl = $controller('ExampleCtrl');
    });
  });

  it('Should exist the controller', () => {
    expect(ctrl).to.be.defined;
  });

  it('Should have a number variable equal to 1234', () => {
    expect(ctrl.number).to.be.equal(1234);
  });

});
