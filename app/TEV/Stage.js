class TEVStage {
	constructor() {
		// Operation and parameters
		this.op = this.bias = this.scale = this.clamp = this.regid = null;
		// Color and/or alphas
		this.a = this.b = this.c = this.d = null;
		// Texcoord id for texture color/alpha
		this.texcoord = this.texmap = this.color = null;
		// Constant for KONST
		this.konst = null;
		// Swap mode tables
		this.ras_swap = this.tex_swap = null;
	}
}

export default TEVStage;