/* @flow */

import React from "react";
import Widget from "./UI/Widget";
import DockContainer from "./UI/DockContainer";
import styles from "./Editor.module.scss";

class StageContainer extends Widget {
	static getWidgetName(): string { return "TEV Stages"; }
	renderWidget(): any {
		return <div style={{padding: "0.3rem"}}>hOI!</div>;
	}
}

class Editor extends React.Component {
	render(): any {
		return <div className={styles.root}>
			<DockContainer>
				<StageContainer dock={{position: "left"}} />
				<StageContainer dock={{position: "left"}} />
				<StageContainer dock={{position: "subbottom"}} />
				<StageContainer dock={{position: "content", noBorder: true}} />
			</DockContainer>
		</div>;
	}
}

export default Editor;