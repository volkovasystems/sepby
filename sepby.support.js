"use strict";

/*;
              	@module-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "sepby",
              			"path": "sepby/sepby.js",
              			"file": "sepby.js",
              			"module": "sepby",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/sepby.git",
              			"test": "sepby-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Re-arrange elements of array by condition.
              
              		Remaining elements will be pushed at the back.
              	@end-module-documentation
              
              	@include:
              		{
              			"apiqe": "apiqe",
              			"leveld": "leveld",
              			"shft": "shft",
              			"xtrak": "xtrak",
              			"wichevr": "wichevr"
              		}
              	@end-include
              */

var apiqe = require("apiqe");
var leveld = require("leveld");
var shft = require("shft");
var xtrak = require("xtrak");
var wichevr = require("wichevr");

var sepby = function sepby(array, condition) {
	/*;
                                              	@meta-configuration:
                                              		{
                                              			"array:required": Array,
                                              			"condition:required": [
                                              				"string",
                                              				"function",
                                              				RegExp,
                                              				BOOLEAN,
                                              				FUNCTION,
                                              				NUMBER,
                                              				OBJECT,
                                              				STRING,
                                              				UNDEFINED,
                                              				SYMBOL,
                                              				"*",
                                              				"[*]",
                                              				"...*"
                                              			]
                                              		}
                                              	@end-meta-configuration
                                              */

	if (arguments.length < 2) {
		return wichevr(array, []);
	}

	try {
		return apiqe(leveld(leveld(shft(arguments)).
		map(function (condition) {return xtrak(array, condition);})), array);

	} catch (error) {
		throw new Error("cannot separate array, " + error.stack);
	}
};

module.exports = sepby;

//# sourceMappingURL=sepby.support.js.map