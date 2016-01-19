/* @flow */

import React from "react";

import Widget from "../Widget";

import styles from "./StageList.module.scss";

class StageListItem extends React.Component {
	static displayName: string = "StageListItem";
	static propTypes: Object = {
		id: React.PropTypes.number
	};
	render(): any {
		return <div className={styles.stageListItem}>
			<header>STAGE {this.props.id}</header>
		</div>;
	}
}

export default class StageList extends Widget {
	static displayName: string = "StageList";
	static getWidgetName(): string { return "TEV Stages"; }
	renderWidget(): any {
		return <div style={styles.container}>
			<StageListItem id={0} />
		</div>;
	}
}