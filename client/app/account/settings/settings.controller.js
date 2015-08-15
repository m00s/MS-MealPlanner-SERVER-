'use strict';

angular
  .module('msMealPlannerApp.account')
  .controller('SettingsCtrl', SettingsCtrl);

SettingsCtrl.$inject = ['Auth'];

function SettingsCtrl(Auth) {
  var vm = this;

  vm.errors = {};

  vm.changePassword = function(form) {
    vm.submitted = true;
    if(form.$valid) {
      Auth.changePassword( vm.user.oldPassword, vm.user.newPassword )
        .then( function() {
          vm.message = 'Password successfully changed.';
        })
        .catch( function() {
          form.password.$setValidity('mongoose', false);
          vm.errors.other = 'Incorrect password';
          vm.message = '';
        });
    }
  };
}
