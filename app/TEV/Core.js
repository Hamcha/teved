import Stage     from "Stage";
import SwapTable from "SwapTable";
import Color     from "Color";

// Default number of stages is 1
const InitialStageCount: Number = 1;
// Maximum number of stages is 16
const MaxStages: Number = 16;

class Core {
	constructor() {
		// Stages
		this.stages = [];
		while (this.stages.length < MaxStages) {
			this.stages.push(new Stage());
		}
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
		// Make n an integer and check boundaries
		n = n|0;
		if (n < 0 || n > MaxStages) {
			throw "Stage number must be between 0 and " + MaxStages;
		}
		this.nstages = n;
	}
	checkStage(stageid: Number) {
		// Check boundaries
		if (stageid < 0 || stageid > MaxStages) {
			return false;
		}
		if (stageid > this.nstages) {
			console.warn("Modifying an inactive stage");
		}
		return true;
	}
	SetTevOrder(stageid: Number, texcoord: Number, texmap: Number, color: Color) {
		stageid = stageid|0;
		if (!this.checkStage(stageid)) {
			throw "Invalid stage id";
		}
	}
	SetTevColorOp(stageid: Number,
	              op     : String,
	              bias   : String,
	              scale  : String,
	              clamp  : String,
	              regid  : Number) {
		// Make stageid an integer and check boundaries
		stageid = stageid|0;
		if (!this.checkStage(stageid)) {
			throw "Invalid stage id";
		}
		this.stages[stageid].setColorOp(op, bias, scale, clamp, regid);
	}
	SetTevAlphaOp(stageid: Number,
	              op     : String,
	              bias   : String,
	              scale  : String,
	              clamp  : String,
	              regid  : Number) {
		stageid = stageid|0;
		if (!this.checkStage(stageid)) {
			throw "Invalid stage id";
		}
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
