angular.module("myCrud").controller("myCrudCtrl", function ($scope, $http) {
	$scope.tit = "CRUD AngularJS e PHP";

	$scope.adicionarUsuario = function (usuario) {
		$http.post("php/salvar.php", usuario).success(function (data){
			delete $scope.usuario;
			$scope.usuarioForm.$setPristine();
			carregarUsuario();
		});
	};

	var carregarUsuario = function () {
		$http.get("php/buscar.php").success(function (data){
			//console.log(data);
			$scope.usuarios = data;
		});
	};

	$scope.apagarUsuario = function (usuario) {
		$http.delete("php/apagar.php", {params: {id: usuario}}).success(function (data, status){
			carregarUsuario();
		});
	};

	var carregaUsuario = function (usuario) {
		//$http.get("php/buscaPEdicao.php", {params: {id: usuario}}).success(function (data){
		$http.get("php/buscaPEdicao.php?id="+usuario).success(function (data){
			console.log(usuario);
			//$scope.usuario = data;
		});
	};

	carregarUsuario();

});