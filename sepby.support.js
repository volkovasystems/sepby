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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcGJ5LnN1cHBvcnQuanMiXSwibmFtZXMiOlsiYXBpcWUiLCJyZXF1aXJlIiwibGV2ZWxkIiwic2hmdCIsInh0cmFrIiwid2ljaGV2ciIsInNlcGJ5IiwiYXJyYXkiLCJjb25kaXRpb24iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJtYXAiLCJlcnJvciIsIkVycm9yIiwic3RhY2siLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4REEsSUFBTUEsUUFBUUMsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNQyxTQUFTRCxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1FLE9BQU9GLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUcsUUFBUUgsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNSSxVQUFVSixRQUFTLFNBQVQsQ0FBaEI7O0FBRUEsSUFBTUssUUFBUSxTQUFTQSxLQUFULENBQWdCQyxLQUFoQixFQUF1QkMsU0FBdkIsRUFBa0M7QUFDL0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBLEtBQUlDLFVBQVVDLE1BQVYsR0FBbUIsQ0FBdkIsRUFBMEI7QUFDekIsU0FBT0wsUUFBU0UsS0FBVCxFQUFnQixFQUFoQixDQUFQO0FBQ0E7O0FBRUQsS0FBRztBQUNGLFNBQU9QLE1BQU9FLE9BQVFBLE9BQVFDLEtBQU1NLFNBQU4sQ0FBUjtBQUNwQkUsS0FEb0IsQ0FDZixVQUFFSCxTQUFGLFVBQWlCSixNQUFPRyxLQUFQLEVBQWNDLFNBQWQsQ0FBakIsRUFEZSxDQUFSLENBQVAsRUFDZ0RELEtBRGhELENBQVA7O0FBR0EsRUFKRCxDQUlDLE9BQU9LLEtBQVAsRUFBYztBQUNkLFFBQU0sSUFBSUMsS0FBSiw2QkFBc0NELE1BQU1FLEtBQTVDLENBQU47QUFDQTtBQUNELENBbkNEOztBQXFDQUMsT0FBT0MsT0FBUCxHQUFpQlYsS0FBakIiLCJmaWxlIjoic2VwYnkuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyo7XHJcblx0QG1vZHVsZS1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcclxuXHJcblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJzZXBieVwiLFxyXG5cdFx0XHRcInBhdGhcIjogXCJzZXBieS9zZXBieS5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJzZXBieS5qc1wiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcInNlcGJ5XCIsXHJcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXHJcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXHJcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcclxuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcclxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcclxuXHRcdFx0XSxcclxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL3NlcGJ5LmdpdFwiLFxyXG5cdFx0XHRcInRlc3RcIjogXCJzZXBieS10ZXN0LmpzXCIsXHJcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcclxuXHRcdH1cclxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXHJcblxyXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcclxuXHRcdFJlLWFycmFuZ2UgZWxlbWVudHMgb2YgYXJyYXkgYnkgY29uZGl0aW9uLlxyXG5cclxuXHRcdFJlbWFpbmluZyBlbGVtZW50cyB3aWxsIGJlIHB1c2hlZCBhdCB0aGUgYmFjay5cclxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImFwaXFlXCI6IFwiYXBpcWVcIixcclxuXHRcdFx0XCJsZXZlbGRcIjogXCJsZXZlbGRcIixcclxuXHRcdFx0XCJzaGZ0XCI6IFwic2hmdFwiLFxyXG5cdFx0XHRcInh0cmFrXCI6IFwieHRyYWtcIixcclxuXHRcdFx0XCJ3aWNoZXZyXCI6IFwid2ljaGV2clwiXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5jb25zdCBhcGlxZSA9IHJlcXVpcmUoIFwiYXBpcWVcIiApO1xyXG5jb25zdCBsZXZlbGQgPSByZXF1aXJlKCBcImxldmVsZFwiICk7XHJcbmNvbnN0IHNoZnQgPSByZXF1aXJlKCBcInNoZnRcIiApO1xyXG5jb25zdCB4dHJhayA9IHJlcXVpcmUoIFwieHRyYWtcIiApO1xyXG5jb25zdCB3aWNoZXZyID0gcmVxdWlyZSggXCJ3aWNoZXZyXCIgKTtcclxuXHJcbmNvbnN0IHNlcGJ5ID0gZnVuY3Rpb24gc2VwYnkoIGFycmF5LCBjb25kaXRpb24gKXtcclxuXHQvKjtcclxuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImFycmF5OnJlcXVpcmVkXCI6IEFycmF5LFxyXG5cdFx0XHRcdFwiY29uZGl0aW9uOnJlcXVpcmVkXCI6IFtcclxuXHRcdFx0XHRcdFwic3RyaW5nXCIsXHJcblx0XHRcdFx0XHRcImZ1bmN0aW9uXCIsXHJcblx0XHRcdFx0XHRSZWdFeHAsXHJcblx0XHRcdFx0XHRCT09MRUFOLFxyXG5cdFx0XHRcdFx0RlVOQ1RJT04sXHJcblx0XHRcdFx0XHROVU1CRVIsXHJcblx0XHRcdFx0XHRPQkpFQ1QsXHJcblx0XHRcdFx0XHRTVFJJTkcsXHJcblx0XHRcdFx0XHRVTkRFRklORUQsXHJcblx0XHRcdFx0XHRTWU1CT0wsXHJcblx0XHRcdFx0XHRcIipcIixcclxuXHRcdFx0XHRcdFwiWypdXCIsXHJcblx0XHRcdFx0XHRcIi4uLipcIlxyXG5cdFx0XHRcdF1cclxuXHRcdFx0fVxyXG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cclxuXHQqL1xyXG5cclxuXHRpZiggYXJndW1lbnRzLmxlbmd0aCA8IDIgKXtcclxuXHRcdHJldHVybiB3aWNoZXZyKCBhcnJheSwgWyBdICk7XHJcblx0fVxyXG5cclxuXHR0cnl7XHJcblx0XHRyZXR1cm4gYXBpcWUoIGxldmVsZCggbGV2ZWxkKCBzaGZ0KCBhcmd1bWVudHMgKSApXHJcblx0XHRcdC5tYXAoICggY29uZGl0aW9uICkgPT4geHRyYWsoIGFycmF5LCBjb25kaXRpb24gKSApICksIGFycmF5ICk7XHJcblxyXG5cdH1jYXRjaCggZXJyb3IgKXtcclxuXHRcdHRocm93IG5ldyBFcnJvciggYGNhbm5vdCBzZXBhcmF0ZSBhcnJheSwgJHsgZXJyb3Iuc3RhY2sgfWAgKTtcclxuXHR9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHNlcGJ5O1xyXG4iXX0=
//# sourceMappingURL=sepby.support.js.map
