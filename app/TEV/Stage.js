class TEVStage {
	constructor() {
		// Color operation and parameters
		this.color_op = null;
		this.color_bias = null;
		this.color_scale = null;
		this.color_clamp = null;
		this.color_regid = null;
		// Alpha operation and parameters
		this.alpha_op = null;
		this.alpha_bias = null;
		this.alpha_scale = null;
		this.alpha_clamp = null;
		this.alpha_regid = null;
		// Input parameters for color operation
		this.color_a = this.color_b = this.color_c = this.color_d = null;
		// Input parameters for alpha operation
		this.alpha_a = this.alpha_b = this.alpha_c = this.alpha_d = null;
		// Texcoord id for texture color/alpha
		this.texcoord = this.texmap = this.color = null;
		// Constant register id for KONST color and alpha
		this.color_konst = this.alpha_konst = null;
		// Swap mode tables
		this.ras_swap = this.tex_swap = null;
	}
	setColorOp(op     : String,
	           bias   : String,
	           scale  : String,
	           clamp  : String,
	           regid  : Number) {
		this.color_op = op;
		this.color_bias = bias;
		this.color_scale = scale;
		this.color_clamp = clamp;
		this.color_regid = regid;
	}
	setAlphaOp(op     : String,
	           bias   : String,
	           scale  : String,
	           clamp  : String,
	           regid  : Number) {
		this.alpha_op = op;
		this.alpha_bias = bias;
		this.alpha_scale = scale;
		this.alpha_clamp = clamp;
		this.alpha_regid = regid;
	}
}

export default TEVStage;