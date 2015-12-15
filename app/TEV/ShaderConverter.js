import Core from "Core"

// Set FP accuracy (should be used in any OpenGL ES/WebGL shader)
const fpHeader: String = "ifdef GL_FRAGMENT_PRECISION_HIGH\n"+
                         "\tprecision highp float;\n" +
                         "#else\n" +
                         "\tprecision mediump float;\n"+
                         "#endif\n";

class ShaderConverter {
	constructor(core: Core) {
		this.core = core;
	}
	buildFragment(): String {
		var code: String = "";
		return fpHeader + code;
	}
}

export default ShaderConverter;