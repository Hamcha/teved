import TEVStage     from "Stage";
import TEVRegister  from "Register";
import TEVSwapTable from "SwapTable";

// Default number of stages is 1
const InitialStageCount: Number = 1;
// Maximum number of stages is 16
const MaxStages: Number = 16;

class TEVCore {
	constructor() {
		// Stages
		this.nstages = 0;
		this.SetNumTevStages(InitialStageCount);

		// Registers
		this.regs = [
			new TEVRegister(),
			new TEVRegister(),
			new TEVRegister()
		];
		this.lastreg = 0;

		// Swap mode tables
		this.swap = [
			new TEVSwapTable(),
			new TEVSwapTable(),
			new TEVSwapTable(),
			new TEVSwapTable()
		];
	}
	SetNumTevStages(n: Number) {
		this.nstages = Math.max(0, Math.min(n, MaxStages));
		while (this.stages.length < this.nstages) {
			this.stages.push(new TEVStage());
		}
	}
	SetTevColorOp(stageid: Number,
	              op     : String,
	              bias   : String,
	              scale  : String,
	              clamp  : String,
	              regid  : String) {
	}
}

export default TEVCore;