'use strict';

angular
  .module('msMealPlannerApp.admin', [])
  .controller('AdminCtrl', AdminCtrl);

AdminCtrl.$inject = ['User'];

function AdminCtrl(User) {
  var vm = this;

  vm.users = User.query();

  vm.delete = function(user) {
    User.remove({ id: user._id });
    angular.forEach(vm.users, function(u, i) {
      if (u === user) {
        vm.users.splice(i, 1);
      }
    });
  };
}
