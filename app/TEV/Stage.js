/* @flow */

import Color        from "./Color";
import type {Operation, Bias, Scale, RegisterID, Konst} from "./Enums";

export default class Stage {
	// Color operation and parameters
	color_op   : ?Operation;
	color_bias : ?Bias;
	color_scale: ?Scale;
	color_clamp: ?bool;
	color_regid: ?RegisterID;

	// Alpha operation and parameters
	alpha_op   : ?Operation;
	alpha_bias : ?Bias;
	alpha_scale: ?Scale;
	alpha_clamp: ?bool;
	alpha_regid: ?RegisterID;

	// Input parameters for color operation
	color_a: ?string;
	color_b: ?string;
	color_c: ?string;
	color_d: ?string;

	// Input parameters for alpha operation
	alpha_a: ?string;
	alpha_b: ?string;
	alpha_c: ?string;
	alpha_d: ?string;

	// Texcoord id for texture color/alpha
	texcoord: ?number;
	texmap  : ?number;
	color   : ?Color;

	// Constant register id for KONST color and alpha
	color_konst: ?Konst;
	alpha_konst: ?Konst;

	// Swap mode tables
	ras_swap: ?number;
	tex_swap: ?number;

	constructor() {
		// Null everything
		this.color_op = null;
		this.color_bias = null;
		this.color_scale = null;
		this.color_clamp = null;
		this.color_regid = null;
		this.alpha_op = null;
		this.alpha_bias = null;
		this.alpha_scale = null;
		this.alpha_clamp = null;
		this.alpha_regid = null;
		this.color_a = this.color_b = this.color_c = this.color_d = null;
		this.alpha_a = this.alpha_b = this.alpha_c = this.alpha_d = null;
		this.texcoord = this.texmap = this.color = null;
		this.color_konst = this.alpha_konst = null;
		this.ras_swap = this.tex_swap = null;
	}
	setColorOp(op     : Operation,
	           bias   : Bias,
	           scale  : Scale,
	           clamp  : bool,
	           regid  : RegisterID) {
		this.color_op = op;
		this.color_bias = bias;
		this.color_scale = scale;
		this.color_clamp = clamp;
		this.color_regid = regid;
	}
	setAlphaOp(op     : Operation,
	           bias   : Bias,
	           scale  : Scale,
	           clamp  : bool,
	           regid  : RegisterID) {
		this.alpha_op = op;
		this.alpha_bias = bias;
		this.alpha_scale = scale;
		this.alpha_clamp = clamp;
		this.alpha_regid = regid;
	}
	setOrder(texcoord: number,
	         texmap  : number,
	         color   : Color) {
		this.texcoord = texcoord;
		this.texmap = texmap;
		this.color = color;
	}
	setSwapMode(ras_sel: number,
	            tex_sel: number) {
		this.ras_swap = ras_sel;
		this.tex_swap = tex_sel;
	}
	setColorKonst(kid: Konst) {
		this.color_konst = kid
	}
	setAlphaKonst(kid: Konst) {
		this.alpha_konst = kid
	}
}