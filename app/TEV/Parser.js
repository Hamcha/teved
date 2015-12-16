/* @flow */

import Core from "./Core";

// Get rid of comments
let stripComments: (code: string) => string = function(code: string): string {
	"use strict";
	//TODO
	return code;
}

class Parser {
	core: Core;
	constructor() {
		this.core = new Core();
	}
	parse(code: string) {
		code = stripComments(code);
		let lines: Array<string> = code.split(";");
		for (let line of lines) {
			let parts: Array<string> = line.split("(");

			// We only support function calls for now
			if (parts.length < 2) {
				continue;
			}
		}
	}
}

export default Parser;