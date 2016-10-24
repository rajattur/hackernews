/**
 * Created by raj.attur on 10/16/16.
 */

(function () {
	var app = angular.module('blog',['ui.router','common.services','angularUtils.directives.dirPagination']);

	app.config(['$stateProvider','$urlRouterProvider', function ($stateProvider,$urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');
		$stateProvider
			.state('home',{
				url:'/home',
				templateUrl: '/src/client/templates/home.html',
				controller: 'AnimationCtrl as vm'
			})
			.state('topstories',{
				url: '/topstories',
				templateUrl: '/src/client/templates/topstories.html',
				controller: 'TopStoriesCtrl as vm'
			})
			.state('newstories',{
				url:'/newstories',
				templateUrl: '/src/client/templates/newstories.html',
				controller: 'NewStoriesCtrl as vm'
			})
			.state('beststories',{
				url:'/beststories',
				templateUrl: '/src/client/templates/beststories.html',
				controller: 'BestStoriesCtrl as vm'
			})
			.state('askstories',{
				url:'/askstories',
				templateUrl: '/src/client/templates/askstories.html',
				controller: 'AskStoriesCtrl as vm'
			})
			.state('topstorycomments',{
				url:'/https://hacker-news.firebaseio.com/v0/item/:id.json',
				templateUrl: '/src/client/templates/topstorycomments.html',
				controller: 'TopStoriesCtrl as vm'
			})
			.state('postlistforuser',{
				url:'/https://hacker-news.firebaseio.com/v0/user/:userName.json',
				templateUrl: '/src/client/templates/userpostlist.html',
				controller: 'TopStoriesCtrl as vm'
			})
			.state('newstorycomments',{
				url:'/https://hacker-news.firebaseio.com/v0/item/:id.json',
				templateUrl: '/src/client/templates/newstorycomments.html',
				controller: 'NewStoriesCtrl as vm'
			})
			.state('postlistfornewsuser',{
				url:'/https://hacker-news.firebaseio.com/v0/user/:userName.json',
				templateUrl: '/src/client/templates/usernewspostlist.html',
				controller: 'TopStoriesCtrl as vm'
			})
			.state('beststorycomments',{
				url:'/https://hacker-news.firebaseio.com/v0/item/:id.json',
				templateUrl: '/src/client/templates/beststorycomments.html',
				controller: 'BestStoriesCtrl as vm'
			})
			.state('postlistforbestuser',{
				url:'/https://hacker-news.firebaseio.com/v0/user/:userName.json',
				templateUrl: '/src/client/templates/userbestpostlist.html',
				controller: 'BestStoriesCtrl as vm'
			})
			.state('askstorycomments',{
				url:'/https://hacker-news.firebaseio.com/v0/item/:id.json',
				templateUrl: '/src/client/templates/askstorycomments.html',
				controller: 'AskStoriesCtrl as vm'
			})
			.state('postlistforaskuser',{
				url:'/https://hacker-news.firebaseio.com/v0/user/:userName.json',
				templateUrl: '/src/client/templates/useraskpostlist.html',
				controller: 'AskStoriesCtrl as vm'
			})
	}])
})();

