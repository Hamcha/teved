/* @flow */

import React from "react";

type Point = { x: number, y: number };

const cover = {
	position: "absolute",
	top: 0, left: 0, right: 0, bottom: 0
};

export default class Pannable extends React.Component {
	static displayName: string = "Pannable";
	static propTypes: Object = {
		children: React.PropTypes.node
	};
	state: Point = {
		x    : 0,
		y    : 0
	};
	updatePanCallback: (e: MouseEvent) => void;
	stopPanCallback: (e: MouseEvent) => void;
	originalPoint: Point;
	startPoint: Point;
	constructor() {
		super();
		this.updatePanCallback = this.updatePan.bind(this);
		this.stopPanCallback = this.stopPan.bind(this);
	}
	render(): any {
		const {x, y} = this.state;
		return <div ref="extbox" onMouseDown={this.startPan.bind(this)} style={cover}>
			<div ref="container" style={{ position: "absolute", left: x, top: y }}>
				{this.props.children}
			</div>
		</div>;
	}
	startPan(e: MouseEvent) {
		this.originalPoint = { x: this.state.x, y: this.state.y };
		this.startPoint = { x: e.screenX, y: e.screenY };
		addEventListener("mouseup", this.stopPanCallback, false);
		addEventListener("mousemove", this.updatePanCallback, false);
	}
	updatePan(e: MouseEvent) {
		const delta = { x: e.screenX - this.startPoint.x, y: e.screenY - this.startPoint.y };
		let x = this.originalPoint.x + delta.x;
		let y = this.originalPoint.y + delta.y;

		// Constrain to internal box
		const maxWidth = this.refs.extbox.clientWidth - this.refs.container.clientWidth;
		const maxHeight = this.refs.extbox.clientHeight - this.refs.container.clientHeight;
		x = Math.min(0, Math.max(maxWidth, x));
		y = Math.min(0, Math.max(maxHeight, y));

		this.setState({ x, y });
	}
	stopPan() {
		removeEventListener("mouseup", this.stopPanCallback);
		removeEventListener("mousemove", this.updatePanCallback);
	}
}