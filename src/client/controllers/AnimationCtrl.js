/**
 * Created by raj.attur on 10/22/16.
 */

(function () {
	angular.module('blog')
		.controller('AnimationCtrl',['getBlog',ActivateCss]);

	function ActivateCss(getBlog) {
		var vm = this;

		vm.topStoryTitle = [];

		getBlog.topStory.query(function (data) {
			for (var i= 0; i < data.length; i++) {
				getNews(data[i])
			}

		});

		var getNews = function (id) {
			getBlog.getById(id).then(function (result) {
				var topStories = result.data;
				vm.topStoryTitle.push(topStories);
			})

		};

	}

})();
