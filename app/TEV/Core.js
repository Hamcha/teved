import Stage     from "Stage";
import SwapTable from "SwapTable";

// Default number of stages is 1
const InitialStageCount: Number = 1;
// Maximum number of stages is 16
const MaxStages: Number = 16;

class Core {
	constructor() {
		// Stages
		this.nstages = 0;
		this.SetNumTevStages(InitialStageCount);

		// Registers
		this.register = [0, 0, 0, 0]; // 0 if Intermediate, Color if constant

		// Swap mode tables
		this.swap = [
			new SwapTable(),
			new SwapTable(),
			new SwapTable(),
			new SwapTable()
		];
	}
	SetNumTevStages(n: Number) {
		this.nstages = Math.max(0, Math.min(n, MaxStages));
		// Scale up if we need
		// We don't scale down to preserve settings
		while (this.stages.length < this.nstages) {
			this.stages.push(new Stage());
		}
	}
	SetTevColorOp(stageid: Number,
	              op     : String,
	              bias   : String,
	              scale  : String,
	              clamp  : String,
	              regid  : Number) {
		//TODO Bound check
		this.stages[stageid].setColorOp(op, bias, scale, clamp, regid);
	}
	SetTevAlphaOp(stageid: Number,
	              op     : String,
	              bias   : String,
	              scale  : String,
	              clamp  : String,
	              regid  : Number) {
		//TODO Bound check
		this.stages[stageid].setAlphaOp(op, bias, scale, clamp, regid);
	}
	SetTevSwapModeTable(swapid: Number,
	                    r     : String,
	                    g     : String,
	                    b     : String,
	                    a     : String) {
		// Make swap table id an integer and check boundaries
		swapid = swapid|0;
		if (swapid < 0 || swapid > 3) {
			throw "Invalid swap mode table id";
		}

		// Assign channels
		this.swap[swapid] = new SwapTable(r, g, b, a);
	}
	SetTevColor(regid: Number, color: Color) {
		// Make regid an integer and check boundaries
		regid = regid|0;
		if (regid < 0 || regid > 3) {
			throw "Invalid register id";
		}
		this.register[regid] = color;
	}
}

export default Core;