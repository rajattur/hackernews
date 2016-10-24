/**
 * Created by raj.attur on 10/16/16.
 */

(function () {
	angular.module('common.services')
		.factory('getBlog',['$resource','$http',getBlog]);

	function getBlog($resource,$http) {
		var users = $http.get("http://jsonplaceholder.typicode.com/users");
		var post = $resource("http://jsonplaceholder.typicode.com/posts");
		var topStory = $resource("https://hacker-news.firebaseio.com/v0/topstories.json");
		var newStory = $resource("https://hacker-news.firebaseio.com/v0/newstories.json");
		var bestStory = $resource("https://hacker-news.firebaseio.com/v0/beststories.json");
		var askStories = $resource("https://hacker-news.firebaseio.com/v0/askstories.json");


		function getById(id) {
			return $http.get("https://hacker-news.firebaseio.com/v0/item/" +id + ".json");
		}

		function getUserPostList(userName) {
			return $http.get("https://hacker-news.firebaseio.com/v0/user/" +userName+ ".json");
		}

		var getCustomeContent = function (id,pushedTo) {
			getById(id).then(function (result) {
				pushedTo.push(result.data);
			})
		};

		var getParentName = function (id,callback) {
			getById(id).then(function (result) {
				var parentName = result.data.by;
				callback(parentName);
			});
		};

		var getNews = function (id, pushedTo) {
			getById(id).then(function (result) {
				pushedTo.push(result.data);
			})

		};

		return {
			users : users,
			post : post,
			topStory: topStory,
			getById : getById,
			newStories: newStory,
			bestStories: bestStory,
			askStories: askStories,
			getCustomeContent: getCustomeContent,
			getUserPostList: getUserPostList,
			getParentName: getParentName,
			getNews: getNews
		}
	}

})();