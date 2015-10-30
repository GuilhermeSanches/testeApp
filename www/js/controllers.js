angular.module("starter")
    
.controller("ControllerInit", function ($scope, $http, cityAPI) {
    
    $scope.cityList = [];
    
    var loadCities = function () {
        cityAPI.getCities().success(function (data) {
			$scope.cityList = data;
		}).error(function (data, status) {
			$scope.message = "Aconteceu um problema: " + data;
		})    
       };            
	loadCities();              
})

.controller('CTRL', ['$scope', function($scope) {
  $scope.templates =
    [ { name: 'template-select', url: 'templates/_selectListCity.html'}
 ];
  $scope.template_select = $scope.templates[0];
}])


.controller("CtrlDevice", function($scope){
    

  var isIOS = ionic.Platform.isIOS();
  var isAndroid = ionic.Platform.isAndroid();    
    
    if(isIOS){
            
        $('#listCity').css({
          "border-radius": "20px",   
            "appearance": "none",
          "border": "1px solid white",
          "color": "white",
          "padding": "10px"

});
                
    }
    
});