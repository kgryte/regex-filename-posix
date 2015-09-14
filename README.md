Split Filename
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> [Regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) to split a [POSIX](https://en.wikipedia.org/wiki/POSIX) filename.


## Installation

``` bash
$ npm install regex-filename-posix
```


## Usage

``` javascript
var re = require( 'regex-filename-posix' );
```

#### re

[Regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) to split a [POSIX](https://en.wikipedia.org/wiki/POSIX) filename. 

``` javascript
var parts = re.exec( '/foo/bar/index.js' );
/*
	[
		'/foo/bar/index.js',
		'/',
		'foo/bar/',
		'index.js',
		'.js'
	]
*/

var root = parts[ 1 ];
var dirname = parts[ 2 ];
var basename = parts[ 3 ];
var extname = parts[ 4 ];
```

## Notes

*	When executed against dotfile filenames (e.g., `.gitignore`), the [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) does __not__ capture the basename as a filename extension.

	``` javascript
	var parts = re.exec( '.bash_profile' );
	/*
		[
			'.bash_profile',
			'',
			'',
			'.bash_profile',
			''
		]
	*/

	parts = re.exec( '.travis.yml' );
	/*
		[
			'.travis.yml',
			'',
			'',
			'.travis.yml',
			'.yml'
		]
	*/
	```


## Examples

``` javascript
var re = require( 'regex-filename-posix' );

var parts;

parts = re.exec( 'index.js' );
/*
	[
		'index.js',
		'',
		'',
		'index.js',
		'.js'
	]
*/

parts = re.exec( '/foo/bar/home.html' );
/*
	[
		'/foo/bar/home.html',
		'/',
		'foo/bar/',
		'home.html',
		'.html'
	]
*/

parts = re.exec( 'foo/file.pdf' );
/*
	[
		'foo/file.pdf',
		'',
		'foo/',
		'file.pdf',
		'.pdf'
	]
*/

parts = re.exec( 'beep/boop.' );
/*
	[
		'beep/boop.',
		'',
		'beep/',
		'boop.',
		'.'
	]
*/

parts = re.exec( '' );
/*
	[
		'',
		'',
		'',
		'',
		''
	]
*/

parts = re.exec( '/foo/bar/file' );
/*
	[
		'/foo/bar/file',
		'/',
		'foo/bar/',
		'file',
		''
	]
*/

parts = re.exec( '/foo/bar/.gitignore' );
/*
	[
		'/foo/bar/.gitignore',
		'/',
		'foo/bar/',
		'.gitignore',
		''
	]
*/
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/regex-filename-posix.svg
[npm-url]: https://npmjs.org/package/regex-filename-posix

[travis-image]: http://img.shields.io/travis/kgryte/regex-filename-posix/master.svg
[travis-url]: https://travis-ci.org/kgryte/regex-filename-posix

[codecov-image]: https://img.shields.io/codecov/c/github/kgryte/regex-filename-posix/master.svg
[codecov-url]: https://codecov.io/github/kgryte/regex-filename-posix?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/regex-filename-posix.svg
[dependencies-url]: https://david-dm.org/kgryte/regex-filename-posix

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/regex-filename-posix.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/regex-filename-posix

[github-issues-image]: http://img.shields.io/github/issues/kgryte/regex-filename-posix.svg
[github-issues-url]: https://github.com/kgryte/regex-filename-posix/issues
