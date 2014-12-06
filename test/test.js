QUnit.module( 'jQuery.fullscreen' );

QUnit.test( 'sanity', 3, function ( assert ) {
	var $root = $( '<div>' ).appendTo( '#qunit-fixture' );

	assert.ok( $root.enterFullscreen, 'enterFullscreen function is defined' );
	assert.ok( $root.exitFullscreen, 'exitFullscreen function is defined' );
	assert.ok( 'fullscreen' in $.support, 'support is detected' );

	// make sure the functions don't throw errors
	$root.enterFullscreen().exitFullscreen();
} );
