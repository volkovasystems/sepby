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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcGJ5LnN1cHBvcnQuanMiXSwibmFtZXMiOlsiYXBpcWUiLCJyZXF1aXJlIiwibGV2ZWxkIiwic2hmdCIsInh0cmFrIiwid2ljaGV2ciIsInNlcGJ5IiwiYXJyYXkiLCJjb25kaXRpb24iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJtYXAiLCJlcnJvciIsIkVycm9yIiwic3RhY2siLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4REEsSUFBTUEsUUFBUUMsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNQyxTQUFTRCxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1FLE9BQU9GLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUcsUUFBUUgsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNSSxVQUFVSixRQUFTLFNBQVQsQ0FBaEI7O0FBRUEsSUFBTUssUUFBUSxTQUFTQSxLQUFULENBQWdCQyxLQUFoQixFQUF1QkMsU0FBdkIsRUFBa0M7QUFDL0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBLEtBQUlDLFVBQVVDLE1BQVYsR0FBbUIsQ0FBdkIsRUFBMEI7QUFDekIsU0FBT0wsUUFBU0UsS0FBVCxFQUFnQixFQUFoQixDQUFQO0FBQ0E7O0FBRUQsS0FBRztBQUNGLFNBQU9QLE1BQU9FLE9BQVFBLE9BQVFDLEtBQU1NLFNBQU4sQ0FBUjtBQUNwQkUsS0FEb0IsQ0FDZixVQUFFSCxTQUFGLFVBQWlCSixNQUFPRyxLQUFQLEVBQWNDLFNBQWQsQ0FBakIsRUFEZSxDQUFSLENBQVAsRUFDZ0RELEtBRGhELENBQVA7O0FBR0EsRUFKRCxDQUlDLE9BQU9LLEtBQVAsRUFBYztBQUNkLFFBQU0sSUFBSUMsS0FBSiw2QkFBc0NELE1BQU1FLEtBQTVDLENBQU47QUFDQTtBQUNELENBbkNEOztBQXFDQUMsT0FBT0MsT0FBUCxHQUFpQlYsS0FBakIiLCJmaWxlIjoic2VwYnkuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwic2VwYnlcIixcblx0XHRcdFwicGF0aFwiOiBcInNlcGJ5L3NlcGJ5LmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJzZXBieS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJzZXBieVwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvc2VwYnkuZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJzZXBieS10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdFJlLWFycmFuZ2UgZWxlbWVudHMgb2YgYXJyYXkgYnkgY29uZGl0aW9uLlxuXG5cdFx0UmVtYWluaW5nIGVsZW1lbnRzIHdpbGwgYmUgcHVzaGVkIGF0IHRoZSBiYWNrLlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhcGlxZVwiOiBcImFwaXFlXCIsXG5cdFx0XHRcImxldmVsZFwiOiBcImxldmVsZFwiLFxuXHRcdFx0XCJzaGZ0XCI6IFwic2hmdFwiLFxuXHRcdFx0XCJ4dHJha1wiOiBcInh0cmFrXCIsXG5cdFx0XHRcIndpY2hldnJcIjogXCJ3aWNoZXZyXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXBpcWUgPSByZXF1aXJlKCBcImFwaXFlXCIgKTtcbmNvbnN0IGxldmVsZCA9IHJlcXVpcmUoIFwibGV2ZWxkXCIgKTtcbmNvbnN0IHNoZnQgPSByZXF1aXJlKCBcInNoZnRcIiApO1xuY29uc3QgeHRyYWsgPSByZXF1aXJlKCBcInh0cmFrXCIgKTtcbmNvbnN0IHdpY2hldnIgPSByZXF1aXJlKCBcIndpY2hldnJcIiApO1xuXG5jb25zdCBzZXBieSA9IGZ1bmN0aW9uIHNlcGJ5KCBhcnJheSwgY29uZGl0aW9uICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwiYXJyYXk6cmVxdWlyZWRcIjogQXJyYXksXG5cdFx0XHRcdFwiY29uZGl0aW9uOnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRSZWdFeHAsXG5cdFx0XHRcdFx0Qk9PTEVBTixcblx0XHRcdFx0XHRGVU5DVElPTixcblx0XHRcdFx0XHROVU1CRVIsXG5cdFx0XHRcdFx0T0JKRUNULFxuXHRcdFx0XHRcdFNUUklORyxcblx0XHRcdFx0XHRVTkRFRklORUQsXG5cdFx0XHRcdFx0U1lNQk9MLFxuXHRcdFx0XHRcdFwiKlwiLFxuXHRcdFx0XHRcdFwiWypdXCIsXG5cdFx0XHRcdFx0XCIuLi4qXCJcblx0XHRcdFx0XVxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoIGFyZ3VtZW50cy5sZW5ndGggPCAyICl7XG5cdFx0cmV0dXJuIHdpY2hldnIoIGFycmF5LCBbIF0gKTtcblx0fVxuXG5cdHRyeXtcblx0XHRyZXR1cm4gYXBpcWUoIGxldmVsZCggbGV2ZWxkKCBzaGZ0KCBhcmd1bWVudHMgKSApXG5cdFx0XHQubWFwKCAoIGNvbmRpdGlvbiApID0+IHh0cmFrKCBhcnJheSwgY29uZGl0aW9uICkgKSApLCBhcnJheSApO1xuXG5cdH1jYXRjaCggZXJyb3IgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIGBjYW5ub3Qgc2VwYXJhdGUgYXJyYXksICR7IGVycm9yLnN0YWNrIH1gICk7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc2VwYnk7XG4iXX0=
//# sourceMappingURL=sepby.support.js.map
