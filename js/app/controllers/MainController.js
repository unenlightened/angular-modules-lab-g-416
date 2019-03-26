function MainController($scope) {
  $scope.name = 'World';
}

angular
  .module('app')
  .controller('MainController', MainController)