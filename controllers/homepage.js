webApp.controller('HomepageController', ['$scope', '$modal', function($scope, $modal){
	$scope.items = ["Apple", "Orange", "Blueberry"];

    $scope.timeNow = new Date();
    $scope.times =[{
        StartTime: new Date()
    },
    {
        StartTime: new Date().setHours(08,0,0)
    },
    {
        StartTime: new Date(new Date().setHours(10,30,0))
    },
    {
        StartTime: new Date().setHours(09,0,0)
    },
    {
        StartTime: new Date().setHours(08,30,0)
    },
    {
        StartTime: new Date().setHours(15,30,0)
    },
    {
        StartTime: new Date().setHours(12,0,0)
    }
                  ];
    console.log($scope.times);
    
	$scope.open = function(){
		$modal.open({
			templateUrl: 'myModalContent.html',
			controller: ['$scope', '$modalInstance', 'items', function ($scope, $modalInstance, items) {

				$scope.items = items;
				$scope.selected = {
					item: $scope.items[0]
				};

				$scope.ok = function () {
					$modalInstance.close($scope.selected.item);
				};

				$scope.cancel = function () {
					$modalInstance.dismiss('cancel');
				};
			}],
			size: 'sm',
			resolve: {
				items: function () {
					return $scope.items;
				}
			}
		}).result.then(function (selectedItem) {
			$scope.selected = {fruit: selectedItem}
		}, function () {
			console.log('Modal dismissed at: ' + new Date());
		});
	};
}]);