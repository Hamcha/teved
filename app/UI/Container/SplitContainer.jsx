/* @flow */

import React           from "react"
import WidgetContainer from "./WidgetContainer"
import styles          from "./SplitContainer.module.scss"

const multi = function(...parts: Array<string>): string {
	"use strict";
	return parts.join(" ");
};

class SplitContainer extends WidgetContainer {
	static propTypes: Object = {
		split: React.PropTypes.string
	};
	static defaultProps: Object = {
		split: "v"
	};
	static getWidgetName(): string { return "Split Container"; }
	render(): any {
		super.render();
		return <div className={multi(styles.splitContainer, styles["split-"+this.props.split])}>
			{this.widgets.map(function(widget, i) {
				return <div key={"w."+i} className={styles.splitWidget}>
					{widget}
				</div>;
			})}
		</div>;
	}
}

export default SplitContainer;