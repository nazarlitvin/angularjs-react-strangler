/*global angular */

angular
  .module('todomvc')
  .controller('SampleLazyCtrl', function SampleLazyCtrl($scope, $ocLazyLoad) {

    $ocLazyLoad.load('AgGrid').then(function () {
      console.log('Ag Grid loaded successfully');
    });
  });
