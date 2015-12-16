/* @flow */

import Core from "./Core";

// Set FP accuracy (should be used in any OpenGL ES/WebGL shader)
const fpHeader: string = "ifdef GL_FRAGMENT_PRECISION_HIGH\n"+
                         "\tprecision highp float;\n" +
                         "#else\n" +
                         "\tprecision mediump float;\n"+
                         "#endif\n";

class ShaderConverter {
	core: Core;
	constructor(core: Core) {
		this.core = core;
	}
	buildFragment(): string {
		var code: string = "";
		return fpHeader + code;
	}
}

export default ShaderConverter;