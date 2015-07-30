'use strict';

angular.module('core').controller('HeaderController', ['$scope', 'Authentication', 'Menus','$state',
	function($scope, Authentication, Menus,$state) {
		$scope.authentication = Authentication;
		$scope.isCollapsed = false;
		$scope.menu = Menus.getMenu('topbar');

		$scope.toggleCollapsibleMenu = function() {
			$scope.isCollapsed = !$scope.isCollapsed;
		};

		// Collapsing the menu after navigation
		$scope.$on('$stateChangeSuccess', function() {
			$scope.isCollapsed = false;
		});

		$scope.goToUpload=function(){
			$state.go('uploadDecription');
		};

		$scope.goToMy=function(){
			$state.go('myDecription');
		}
	}
]);
