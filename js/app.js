(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
	$scope.input = "";
	$scope.message = "";
	$scope.textColor = "";
	$scope.borderColor = "";

	$scope.onClick = function() {
		if ($scope.input.length == 0) {
			$scope.textColor = "red";
			$scope.borderColor = "red";
			$scope.message = "Please enter data first";
		} else {
			$scope.textColor = "green";
			$scope.borderColor = "green";

			var result = $scope.input.split(',');
			$scope.message = result.length <= 3 ? "Enjoy!" : "Too much!";						
		}
	}
}

})();