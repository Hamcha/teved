/* @flow */

import React           from "react";
import Widget          from "../Widget";
import WidgetContainer from "./WidgetContainer";
import styles          from "./DockContainer.module.scss";

import { DropTarget, DragDropContext, DragSource } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

const DragSourceType = {
	WIDGET: "widget"
};

const widgetSource = {
	beginDrag(props: Object): Object {
		"use strict";
		return { id: props.widgetid };
	},
	endDrag(props: Object, monitor: DragSourceMonitor) {
		"use strict";
		if (!monitor.didDrop()) {
			return;
		}

		const item: Object = monitor.getItem();
		const target: Object = monitor.getDropResult();
		props.parent.moveWidget(item.id, target.zone);
	}
}

const zoneTarget = {
	drop(props) {
		"use strict";
		return { zone: props.zone };
	}
}

const multi = (parts: Array<string>) => parts.join(" ");

@DragSource(DragSourceType.WIDGET, widgetSource, (connect, monitor) => ({
	connectDragSource: connect.dragSource(),
	connectDragPreview: connect.dragPreview(),
	isDragging: monitor.isDragging()
}))
class DockableWidget extends React.Component {
	static displayName: string = "DockableWidget";
	static propTypes: Object = {
		widgetid: React.PropTypes.number.isRequired,
		data    : React.PropTypes.object,
		children: React.PropTypes.node,
		// React DND
		connectDragSource: React.PropTypes.func.isRequired,
		connectDragPreview: React.PropTypes.func.isRequired,
		isDragging: React.PropTypes.bool.isRequired
	};
	render(): any {
		const { connectDragSource, connectDragPreview } = this.props;

		let title = <div className={styles.dockableHead}>
			<i className="fa fa-bars"></i> {React.Children.only(this.props.children).type.getWidgetName()}
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

		return connectDragPreview(
			<div className={styles.dockableWidget}>
				{connectDragSource(title)}
				<div className={styles.widgetContent}>
					{this.props.children}
				</div>
			</div>
		);
	}
}

@DropTarget(DragSourceType.WIDGET, zoneTarget, (connect, monitor) => ({
	connectDropTarget: connect.dropTarget(),
	isOver: monitor.isOver(),
	canDrop: monitor.canDrop()
}))
class DockZone extends React.Component {
	static displayName: string = "DockZone";
	static propTypes: Object = {
		zone: React.PropTypes.string.isRequired,
		items: React.PropTypes.arrayOf(DockableWidget).isRequired,
		// React DND
		connectDropTarget: React.PropTypes.func.isRequired,
		isOver: React.PropTypes.bool.isRequired,
		canDrop: React.PropTypes.bool.isRequired
	};
	getZoneItems(item: Widget): Array<Widget> {
		const data = item.props.data;
		let side = "left"; // Default if not set
		if (typeof data !== "undefined" && typeof data.position === "string") {
			side = data.position;
		}
		return side === this.props.zone;
	}
	render(): any {
		const { canDrop, isOver, connectDropTarget } = this.props;

		let zoneStyle = [styles.zone, styles[this.props.zone]];
		if (canDrop) {
			zoneStyle.push(styles.zoneDragTarget);
		}
		if (isOver) {
			zoneStyle.push(styles.zoneDropTarget);
		}
		return connectDropTarget(
			<div className={multi(zoneStyle)}>
				{this.props.items.filter(this.getZoneItems.bind(this))}
			</div>
		);
	}
}

@DragDropContext(HTML5Backend)
export default class DockContainer extends WidgetContainer {
	static displayName: string = "DockContainer";
	static getWidgetName(): string { return "Dock Container"; }
	moveWidget(widgetid: number, zone: string) {
		// Change widget position
		if (typeof this.props.children[widgetid].props.dock === "undefined") {
			this.widgets[widgetid].props.dock = {
				"position": zone
			};
		} else {
			this.widgets[widgetid].props.dock.position = zone;
		}
	}
	render(): any {
		const that = this;

		super.render();
		this.dockableWidgets = this.widgets.map((widget, i) => <DockableWidget parent={that} widgetid={i} key={"w."+i} data={widget.props.dock}>{widget}</DockableWidget>);

		return <div className={styles.container}>
			<DockZone parent={this} items={this.dockableWidgets} zone="top" ref="zone.top" />
			<div className={styles.middle}>
				<DockZone parent={this} items={this.dockableWidgets} zone="left" ref="zone.left" />
				<div className={styles.center}>
					<DockZone parent={this} items={this.dockableWidgets} zone="subtop" ref="zone.subtop" />
					<DockZone parent={this} items={this.dockableWidgets} zone="content" ref="zone.content" />
					<DockZone parent={this} items={this.dockableWidgets} zone="subbottom" ref="zone.subbottom" />
				</div>
				<DockZone parent={this} items={this.dockableWidgets} zone="right" ref="zone.right" />
			</div>
			<DockZone parent={this} items={this.dockableWidgets} zone="bottom" ref="zone.bottom" />
		</div>;
	}
}