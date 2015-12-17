/* @flow */

import React from "react";
import styles from "./DockContainer.module.scss";

class DockableWidget extends React.Component {
	render(): any {
		return <div className={styles.dockableWidget}>
			<div draggable="true" className={styles.titleBar}>WIDGET NAME HERE</div>
			<div className="widget-content">
				{this.props.children}
			</div>
		</div>;
	}
}

class DockContainer extends React.Component {
	render(): any {
		/*return <div className={styles.container}>
			{this.props.children.map((widget) =>
				<DockableWidget dock={widget.props.dock}>
					{widget}
				</DockableWidget>
			)}
		</div>;*/

		let items: {[key: string]: Array<any>} = {
			top      : [],
			left     : [],
			right    : [],
			bottom   : [],
			subtop   : [],
			subbottom: [],
			content  : []
		};

		this.props.children.forEach(function(widget) {
			let side = (typeof widget.props.dock === "string" && widget.props.dock in items) ? widget.props.dock : "left";
			items[side] = <DockableWidget>{widget}</DockableWidget>;
		})

		return <div className={styles.container}>
			<div className={styles.zone}>
				{items.top}
			</div>
			<div className={styles.middle}>
				<div className={styles.zone}>
					{items.left}
				</div>
				<div className={styles.center}>
					<div className={styles.zone}>
						{items.subtop}
					</div>
					<div className={[styles.zone, styles.content].join(" ")}>
						{items.content}
					</div>
					<div className={styles.zone}>
						{items.subbottom}
					</div>
				</div>
				<div className={styles.zone}>
					{items.right}
				</div>
			</div>
			<div className={styles.zone}>
				{items.bottom}
			</div>
		</div>;
	}
}

export default DockContainer;