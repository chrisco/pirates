angular
	.module("pirates", ["ui.router"])
	.config(config);

function config($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('pirates', {
			url: '/',
			controller: PiratesController,
			templateUrl: './views/pirates.html'
		});
}
