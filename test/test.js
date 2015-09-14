/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	re = require( './../lib' );


// VARIABLES //

var assert = chai.assert;


// TESTS //

describe( 'regex-filename-posix', function tests() {

	it( 'should export a regular expression', function test() {
		assert.isTrue( re instanceof RegExp );
	});

	it( 'should split POSIX filenames', function test() {
		var expected,
			values,
			parts,
			i;

		values = [
			'index.js',
			'/foo/bar/home.html',
			'foo/file.pdf',
			'index.js/',
			'foo/bar/home.html/',
			'.gitigno.re',
			'/foo/bar/.editorconf.ig',
			'main/.travis.yml',
			'.gitignore',
			'boop.'
		];

		expected = [
			['index.js','','','index.js','.js'],
			['/foo/bar/home.html','/','foo/bar/','home.html','.html'],
			['foo/file.pdf','','foo/','file.pdf','.pdf'],
			['index.js/','','','index.js','.js'],
			['foo/bar/home.html/','','foo/bar/','home.html','.html'],
			['.gitigno.re','','','.gitigno.re','.re'],
			['/foo/bar/.editorconf.ig','/','foo/bar/','.editorconf.ig','.ig'],
			['main/.travis.yml','','main/','.travis.yml','.yml'],
			['.gitignore','','','.gitignore',''],
			['boop.','','','boop.','.']
		];

		for ( i = 0; i < values.length; i++ ) {
			parts = re.exec( values[ i ] ).slice();
			assert.deepEqual( parts, expected[ i ] );
		}
	});

});
