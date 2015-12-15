import {Channel} from "Enums";

class SwapTable {
	constructor(r: String  = Channel.Red,
	            g: String  = Channel.Green,
	            b: String  = Channel.Blue,
	            a: String  = Channel.Alpha) {
		// Channels
		this.r = r;
		this.g = g;
		this.b = b;
		this.a = a;
	}
	swap(channel: String) {
		switch (channel) {
			case Channel.Red:   return this.r;
			case Channel.Green: return this.g;
			case Channel.Blue:  return this.b;
			case Channel.Alpha: return this.a;
			default: throw "Invalid channel id";
		}
	}
}

export default SwapTable;
