/* @flow */

import React from "react";
import Widget from "./UI/Widget";
import DockContainer from "./UI/DockContainer";
import styles from "./Editor.module.scss";

class StageContainer extends React.Component {
	render(): any {
		return <Widget>
			<div>Yay!</div>
		</Widget>;
	}
}

class Editor extends React.Component {
	render(): any {
		return <div className={styles.root}>
			<DockContainer>
				<StageContainer dock="left" />
				<StageContainer dock="content" />
			</DockContainer>
		</div>;
	}
}

export default Editor;