
'use strict';

describe('ExampleService : ', () => {

  let service;

  beforeEach(() => {
    // instantiate the app module
    module('app');

    // mock the service
    inject((ExampleService) => {
      service = ExampleService;
    });
  });

  it('Should exist', () => {
    expect(service).to.be.defined;
  });

  it.skip('Should retrieve data', (done) => {
    service.get()
    .then((result) => {
      expect(result).to.be.equal({data: 1234});
    })
    .catch((error) => {
      expect(error).to.be.undefined;
    })
    .then(done);
  });
});
