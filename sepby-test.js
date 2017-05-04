
const assert = require( "assert" );
const sepby = require( "./sepby.js" );

assert.deepEqual( sepby( [ "hello", "world", 1, 2, 3, true, false, 5, 6 ], NUMBER ), [ 1, 2, 3, 5, 6, "hello", "world", true, false ], "should be equal" );

assert.deepEqual( sepby( [ "hello", "world", 1, true, 6 ], UNDEFINED ), [ "hello", "world", 1, true, 6 ], "should be equal" );

console.log( "ok" );