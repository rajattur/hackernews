
module.exports = function () {
	var client = './src/client/';
	var clientApp = client + 'app/';
	var temp = './.tmp/';
	var server = './src/server/';


	var config = {

		temp : temp,

		scss : client + 'styles/*.scss',

		index : client + 'index.html',

		client : client,

		css : temp + 'styles.css',

		bootstrap : './bower_components/bootstrap/dist/css/bootstrap.css',

		js: [
			client + '**/*.js',
			'!' + client + '**/*.spec.js'
		],

		alljs : [
			'./src/**/*js','./*js'
		],

		bower : {
			json : require('./bower.json'),
			directory : './bower_components',
			ignorePath : '../..'
		},

		defaultPort : 3000,
		nodeServer : './src/server/app.js',
		server : server

	};

	config.getWiredepDefaultOptions = function () {
		var options = {
			bowerJson : config.bower.json,
			directory : config.bower.directory,
			ignorePath : config.bower.ignorePath
		};


		return options;
	};

	return config;
};
