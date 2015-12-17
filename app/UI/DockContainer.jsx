/* @flow */

import React from "react";
import styles from "./DockContainer.module.scss";

let multi = function(...parts: Array<string>): string {
	"use strict";
	return parts.join(" ");
};

class DockableWidget extends React.Component {
	render(): any {
		let title = <div draggable="true" className={styles.dockableHead}>
			<i className="fa fa-bars"></i> WIDGET NAME HERE
		</div>;

		// Check for props
		if (typeof this.props.data !== "undefined") {
			const data = this.props.data;

			// Check for no border
			if (typeof data.noBorder === "boolean" && data.noBorder === true) {
				return <div className={styles.widgetContent}>{this.props.children}</div>;
			}

			// Check for hidden head
			if (typeof data.hideHead === "boolean" && data.hideHead === true) {
				title = <span />;
			}
		}

		return <div className={styles.dockableWidget}>
			{title}
			<div className={styles.widgetContent}>
				{this.props.children}
			</div>
		</div>;
	}
}

class DockContainer extends React.Component {
	render(): any {
		let items: {[key: string]: Array<any>} = {
			top      : [],
			left     : [],
			right    : [],
			bottom   : [],
			subtop   : [],
			subbottom: [],
			content  : []
		};

		this.props.children.forEach(function(widget, i) {
			let side = (typeof widget.props.dock === "string" && widget.props.dock in items) ? widget.props.dock : "left";
			items[side].push(<DockableWidget key={"w."+i} data={widget.props.dockProps} >{widget}</DockableWidget>);
		})

		return <div className={styles.container}>
			<div className={multi(styles.zone, styles.top)}>
				{items.top}
			</div>
			<div className={styles.middle}>
				<div className={multi(styles.zone, styles.left)}>
					{items.left}
				</div>
				<div className={styles.center}>
					<div className={multi(styles.zone, styles.subtop)}>
						{items.subtop}
					</div>
					<div className={multi(styles.zone, styles.content)}>
						{items.content}
					</div>
					<div className={multi(styles.zone, styles.subbottom)}>
						{items.subbottom}
					</div>
				</div>
				<div className={multi(styles.zone, styles.right)}>
					{items.right}
				</div>
			</div>
			<div className={multi(styles.zone, styles.bottom)}>
				{items.bottom}
			</div>
		</div>;
	}
}

export default DockContainer;