'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('desafioApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  //it('should be related to mariana-martins', function () {
  //  expect(MainCtrl.username).toBe('mariana-martins');
  //});
  it('should pass', function() {
  });
});