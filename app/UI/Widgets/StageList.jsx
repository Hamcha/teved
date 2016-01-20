/* @flow */

import React from "react";

import Widget from "../Widget";

import TEV      from "../../TEV/Core";
import TEVStage from "../../TEV/Stage";

import styles from "./StageList.module.scss";

class StageListItem extends React.Component {
	static displayName: string = "StageListItem";
	static propTypes: Object = {
		id:    React.PropTypes.number,
		stage: React.PropTypes.instanceOf(TEVStage)
	};
	render(): any {
		return <div className={styles.stageListItem}>
			<header>STAGE {this.props.id}</header>
			lol
		</div>;
	}
}

export default class StageList extends Widget {
	static displayName: string = "StageList";
	static getWidgetName(): string { return "TEV Stages"; }
	static propTypes: Object = {
        tev: React.PropTypes.instanceOf(TEV)
    };
	renderWidget(): any {
		return <div className={styles.container}>
			{this.props.tev.GetStages().map((stage, id) =>
				<StageListItem key={id} id={id} stage={stage} />
			)}
			<div className={styles.remaining}>
				{this.props.tev.stages.length - this.props.tev.nstages} stages available<br />
			</div>
		</div>;
	}
}