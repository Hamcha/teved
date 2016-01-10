/* @flow */

import TEV from "../TEV/Core";

class Inspector {
    canvas: HTMLCanvasElement;
    tev   : TEV;
    constructor(canvas: HTMLCanvasElement, tev: TEV) {
        this.tev = tev;
        this.canvas = canvas;
    }
    resize() {

    }
}

export default Inspector;