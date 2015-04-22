'use strict';

describe('Directive: recipeForm', function () {

  // load the directive's module and view
  beforeEach(module('msMealPlannerApp'));
  beforeEach(module('app/recipeForm/recipeForm.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<recipe-form></recipe-form>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the recipeForm directive');
  }));
});