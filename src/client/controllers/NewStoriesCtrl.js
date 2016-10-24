/**
 * Created by raj.attur on 10/16/16.
 */

(function () {
	angular.module('blog')
		.controller('NewStoriesCtrl',['getBlog','$stateParams',GetNewStories]);

	function GetNewStories(getBlog,$stateParams) {

		var vm = this;
		vm.hello = 'New Stories';
		vm.comments = [];
		vm.newStories = [];
		vm.submitted = [];
		vm.id = $stateParams.id ? $stateParams.id : 1;
		vm.userName = $stateParams.userName;

		//Gets all the New stories ID. And calls a getBlog.getNews function from the factory service passing the ID
		// and where the data needs to be pushed.
		getBlog.newStories.query(function (data) {
			for (var i= 0; i < data.length; i++) {
				getBlog.getNews(data[i],vm.newStories)
			}

		});

		//calls the http request from the hackerNewsDataResources.js factory service passing in the vm.userName received
		//from the $stateParams.userName. After the result is received which is a list of all the submitted ID related to
		// the userName passed in. After the result is received getBlog.getCustomeContent function is called and is
		//passed in the id and where the data needs to be pushed.
		getBlog.getUserPostList(vm.userName).then(function (result) {
			for (var i= 0; i < result.data.submitted.length; i++) {
				getBlog.getCustomeContent(result.data.submitted[i],vm.submitted)
			}
		});

		//calls the http request from the hackerNewsDataResources.js factory service passing in the vm.id received
		//from the $stateParams.id. After the result is received which is a list of all the kids ID related to
		// the ID passed in. After the result is received getBlog.getCustomeContent function is called and is
		//passed in the id and where the data needs to be pushed.
		getBlog.getById(vm.id).then(function (result) {
			for (var i= 0; i < result.data.kids.length; i++) {
				getBlog.getCustomeContent(result.data.kids[i],vm.comments)
			}

		});

		var parentName = function (name) {
			vm.name = name;
		};

		getBlog.getParentName(vm.id, parentName)

	}

})();