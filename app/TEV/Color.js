/* @flow */

class Color {
	r: number;
	g: number;
	b: number;
	a: number;
	constructor(r: number = 0,
	            g: number = 0,
	            b: number = 0,
	            a: number = 255) {
		this.r = r;
		this.g = g;
		this.b = b;
		this.a = a;
	}
}

export default Color;