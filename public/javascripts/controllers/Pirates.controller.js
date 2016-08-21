angular.module("pirates")
	.controller("PiratesController", PiratesController);

function PiratesController($scope) {
	$scope.name = 'Foo';
}
