angular.module("myCrud").controller("editarUsuarioCtrl", function ($scope, $routeParams, $http, $location) {
	//console.log($routeParams.id);
	var carregaUsuario = function (usuario) {
		$http.get("php/edicao.php?id="+$routeParams.id).success(function (usuario){
			$scope.usuario = usuario;
		});
	};

	$scope.atualizarUsuario = function (usuario) {
		$http.put("php/editaUsuario.php", usuario).success(function (data){
			$location.path("#/usuarios");
		});
	};

	carregaUsuario();
});