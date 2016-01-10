/* @flow */

import React from "react";
import Widget from "../Widget";
import styles from "./ShaderView.module.scss";

import TEV from "../../TEV/Core";
import ShaderViewRenderer from "../../3D/ShaderViewRenderer";

class ShaderView extends Widget {
	static displayName: string = "ShaderView";
    static propTypes: Object = {
        tev: React.PropTypes.instanceOf(TEV)
    };
	static getWidgetName(): string { return "GLSL output"; }
	renderer: ShaderViewRenderer;
	constructor() {
		super()
		window.addEventListener("resize", this.resize.bind(this), false );
	}
	componentDidMount() {
		this.renderer = new ShaderViewRenderer(this.refs.canvas);
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

export default ShaderView;
