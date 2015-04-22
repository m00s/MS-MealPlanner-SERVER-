'use strict';

describe('Directive: recipeTable', function () {

  // load the directive's module and view
  beforeEach(module('msMealPlannerApp'));
  beforeEach(module('app/recipeTable/recipeTable.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<recipe-table></recipe-table>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the recipeTable directive');
  }));
});