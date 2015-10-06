angular.module("myCrud").controller("novoUsuarioCtrl", function ($scope, $http, $location) {
	$scope.tit = "CRUD AngularJS e PHP";

	$scope.adicionarUsuario = function (usuario) {
		$http.post("php/salvar.php", usuario).success(function (data){
			delete $scope.usuario;
			$scope.usuarioForm.$setPristine();
			$location.path("/usuarios");
		});
	};

});