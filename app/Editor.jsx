/* @flow */

import React from "react";
import Widget from "./UI/Widget";
import SplitContainer from "./UI/Container/SplitContainer";
import DockContainer from "./UI/Container/DockContainer";
import ShaderView from "./UI/Widgets/ShaderView";
import styles from "./Editor.module.scss";

class StageContainer extends Widget {
	displayName: string = "StageContainer";
	static getWidgetName(): string { return "TEV Stages"; }
	renderWidget(): any {
		return <div style={{padding: "0.3rem"}}>hOI!</div>;
	}
}

class Editor extends React.Component {
	displayName: string = "Editor";
	render(): any {
		return <div className={styles.root}>
			<DockContainer>
				<StageContainer dock={{position: "left"}} />
				<SplitContainer dock={{position: "content", noBorder: true}} split="h">
					<StageContainer />
					<ShaderView />
				</SplitContainer>
			</DockContainer>
		</div>;
	}
}

export default Editor;