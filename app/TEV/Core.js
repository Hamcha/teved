import Stage     from "Stage";
import Register  from "Register";
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
		this.regs = [
			new Register(),
			new Register(),
			new Register()
		];
		this.lastreg = 0;

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
		while (this.stages.length < this.nstages) {
			this.stages.push(new Stage());
		}
	}
	SetTevColorOp(stageid: Number,
	              op     : String,
	              bias   : String,
	              scale  : String,
	              clamp  : String,
	              regid  : String) {
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
}

export default Core;