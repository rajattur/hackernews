

var gulp = require('gulp');
var args = require('yargs');
var config = require('./gulp.config')();
var del = require('del');
var $ = require('gulp-load-plugins')({lazy: true});
var port = process.env.PORT || config.defaultPort;

gulp.task('vet', function () {
	log('Running JSHINT and JSCS');
	return gulp
		.src(config.alljs)
		.pipe($.if(args.verbose, $.print()))
		.pipe($.jscs())
		.pipe($.jshint())
		.pipe($.jshint.reporter('jshint-stylish', {verbose: true}))
		.pipe($.jshint.reporter('fail'));
});

gulp.task('styles',['clean-styles'], function () {
	log('Compiling SASS ---> CSS');
	return gulp
		.src(config.scss)   //less files to compile
		.pipe($.plumber())  //Handles compile errors
		.pipe($.sass())     //Compiles to CSS
		.pipe($.autoprefixer({browsers: ['last 2 versions', '> 5%']})) // Adds vendor prefixes
		.pipe(gulp.dest(config.temp)); // Writes the CSS files
});

gulp.task('clean-styles', function () {
	var files = config.temp + '**/*.css';
	clean(files);
});

gulp.task('sass-watcher', function () {
	gulp.watch([config.scss,config.js], ['styles']);
});


gulp.task('wiredep', function () {
	log('wiring up bower css js and app js files to index.html');
	var options = config.getWiredepDefaultOptions();
	var wiredep = require('wiredep').stream; //Getting stream from wiredep

	return gulp
		.src(config.index)
		.pipe(wiredep(options))
		.pipe($.inject(gulp.src(config.js)))
		.pipe(gulp.dest(config.client));
});


gulp.task('inject',['wiredep', 'styles'], function () {
	return gulp
		.src(config.index)
		.pipe($.inject(gulp.src(config.css)))
		.pipe(gulp.dest(config.client));
});

gulp.task('serve-dev', ['inject'], function () {
	var isDev = true;

	var nodeOptions = {
		script : config.nodeServer,
		delayTime : 1,
		env : {
			'PORT' : port,
			'NODE_ENV' : isDev ? 'dev' : 'build'
		},

		watch : [config.server]
	};

	return $.nodemon(nodeOptions)
		.on('restart', function (ev) {
			log('********* nodemon restarted');
			log('files changed on restart:\n' + ev);
		})
		.on('start', function () {
			log('********* nodemon started');
		})
		.on('crash', function () {
			log('********* nodemon crashed: script crashed for somereason');
		})
		.on('exit', function () {
			log('********* nodemon exited cleanly');
		});
});
///////////////////

function clean(path) {
	log("Cleaning TMP Folder ");
	del(path);
}

function log(msg) {
	if (typeof (msg) === 'object') {
		for (var item in msg) {
			if (msg.hasOwnProperty(item)) {
				$.util.log($.util.colors.blue(msg[item]));
			}
		}
	}
	else {
		$.util.log($.util.colors.blue(msg));
	}
}