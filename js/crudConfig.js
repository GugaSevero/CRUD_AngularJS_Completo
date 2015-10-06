angular.module("myCrud").config(function ($routeProvider){
	$routeProvider.when("/usuarios", {
		templateUrl: "view/usuarios.html",
		controller: "myCrudCtrl"
	});
	$routeProvider.when("/novoUsuario", {
		templateUrl: "view/novoUsuario.html",
		controller: "novoUsuarioCtrl",
	});
	$routeProvider.when("/editarUsuario/:id", {
		templateUrl: "view/editar.html",
		controller: "editarUsuarioCtrl",
	});
	$routeProvider.otherwise({redirectTo: "/usuarios"});
});