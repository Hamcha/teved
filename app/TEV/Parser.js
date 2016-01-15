/* @flow */

import Core from "./Core";

// Get rid of comments
let stripComments: (code: string) => string = function(code: string): string {
	"use strict";
	const block = /\*.*?\*/g;
	const line = /\/\/.*?\n/g;
	return code.replace(block, "").replace(line, "");
}

export default class Parser {
	core: Core;
	constructor() {
		this.core = new Core();
	}
	parse(code: string) {
		code = stripComments(code);
		const lines: Array<string> = code.split(";");
		for (let line of lines) {
			const parts: Array<string> = line.split("(");

			// We only support function calls for now
			if (parts.length < 2) {
				continue;
			}

			//TODO
		}
	}
}