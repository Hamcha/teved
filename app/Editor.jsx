/* @flow */

import React from "react";

import Widget from "./UI/Widget";
import SplitContainer from "./UI/Container/SplitContainer";
import DockContainer from "./UI/Container/DockContainer";
import StageView from "./UI/Widgets/StageView";
import ShaderView from "./UI/Widgets/ShaderView";

import TEV from "./TEV/Core";

import styles from "./Editor.module.scss";

class StageContainer extends Widget {
	static displayName: string = "StageContainer";
	static getWidgetName(): string { return "TEV Stages"; }
	renderWidget(): any {
		return <div style={{padding: "0.3rem"}}>hOI!</div>;
	}
}

class Editor extends React.Component {
	static displayName: string = "Editor";
	tev: TEV;
	constructor() {
		super();
		this.tev = new TEV();
	}
	render(): any {
		return <div className={styles.root}>
			<DockContainer>
				<StageContainer dock={{position: "left"}} />
				<SplitContainer dock={{position: "content", noBorder: true}} split="h">
					<StageView tev={this.tev} />
					<ShaderView tev={this.tev} />
				</SplitContainer>
			</DockContainer>
		</div>;
	}
}

export default Editor;