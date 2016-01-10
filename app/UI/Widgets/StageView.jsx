/* @flow */

import React from "react";
import Widget from "../Widget";
import styles from "./StageView.module.scss";

import TEV from "../../TEV/Core";

import Inspector from "../../Inspector/Inspector";

class StageView extends Widget {
    static displayName: string = "StageView";
    static propTypes: Object = {
        tev: React.PropTypes.instanceOf(TEV)
    };
    static getWidgetName(): string { return "TEV Inspector"; }
    renderer: Inspector;
    constructor() {
        super();
        window.addEventListener("resize", this.resize.bind(this), false);
    }
    componentDidMount() {
        this.renderer = new Inspector(this.refs.canvas);
        this.resize();
    }
    resize() {
        this.refs.canvas.width = this.refs.canvas.parentElement.offsetWidth;
        this.refs.canvas.height = this.refs.canvas.parentElement.offsetHeight;
        this.renderer.resize();
    }
    renderWidget(): any {
        return <div className={styles.container}>
            <canvas ref="canvas" className={styles.canvas}>
            </canvas>
        </div>;
    }
}

export default StageView;
