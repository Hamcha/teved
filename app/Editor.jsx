/* @flow */

import React from "react";

import SplitContainer from "./UI/Container/SplitContainer";
import DockContainer from "./UI/Container/DockContainer";
import StageList from "./UI/Widgets/StageList";
import StageView from "./UI/Widgets/StageView";
import ShaderView from "./UI/Widgets/ShaderView";

import TEV from "./TEV/Core";

import styles from "./Editor.module.scss";

export default class Editor extends React.Component {
	static displayName: string = "Editor";
	tev: TEV;
	constructor() {
		super();
		this.tev = new TEV();
		this.tev.SetNumTevStages(3);
	}
	render(): any {
		return <div className={styles.root}>
			<DockContainer>
				<StageList tev={this.tev} dock={{position: "left"}} />
				<SplitContainer dock={{position: "content", noBorder: true}} split="h">
					<StageView tev={this.tev} />
					<ShaderView tev={this.tev} />
				</SplitContainer>
			</DockContainer>
		</div>;
	}
}