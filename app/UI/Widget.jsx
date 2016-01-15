/* @flow */

import React from "react";
import styles from "./Widget.module.scss";

export default class Widget extends React.Component {
	static displayName: string = "Widget";
	static getWidgetName(): string { return "Unnamed Widget"; }
	render(): any {
		return <div className={styles.widget}>
			{this.renderWidget()}
		</div>;
	}
	renderWidget() {
		return <span />;
	}
}