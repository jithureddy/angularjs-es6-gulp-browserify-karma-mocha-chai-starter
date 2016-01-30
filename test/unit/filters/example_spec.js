'use strict';

describe('ExampleFilter : ', () => {

  let $filter;

  beforeEach(() => {
    // instantiate the app module
    module('app');

    // mock the filter
    inject((_$filter_) => {
      $filter = _$filter_;
    });
  });

  it('Should replace the word "keyboard" with "leopard"', () => {
    let testString = 'Computers are operated by keyboards';
    let resultString = $filter('ExampleFilter')(testString);

    expect(resultString).to.be.equal('Computers are operated by leopards');
  });

});
