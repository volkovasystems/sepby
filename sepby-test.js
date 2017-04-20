
const sepby = require( "./sepby.js" );

var timestamp = Date.now( );
console.log( sepby( [ "hello", "world", 1, 2, 3, true, false, 5, 6 ], NUMBER ) );
console.log( Date.now( ) - timestamp );
