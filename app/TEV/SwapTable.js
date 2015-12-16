/* @flow */

import      {Channels} from "./Enums";
import type {Channel}  from "./Enums";

class SwapTable {
	r: Channel;
	g: Channel; // lewd
	b: Channel;
	a: Channel;
	constructor(r: Channel = Channels.Red,
	            g: Channel = Channels.Green,
	            b: Channel = Channels.Blue,
	            a: Channel = Channels.Alpha) {
		// Channels
		this.r = r;
		this.g = g;
		this.b = b;
		this.a = a;
	}
	swap(channel: Channel): Channel {
		switch (channel) {
			case Channels.Red:   return this.r;
			case Channels.Green: return this.g;
			case Channels.Blue:  return this.b;
			case Channels.Alpha: return this.a;
			default: throw "Invalid channel id";
		}
	}
}

export default SwapTable;