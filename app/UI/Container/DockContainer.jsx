/* @flow */

import React           from "react";
import WidgetContainer from "./WidgetContainer";
import styles          from "./DockContainer.module.scss";

const multi = function(...parts: Array<string>): string {
	"use strict";
	return parts.join(" ");
};

/* START Drag callbacks */
const startDrag = function(parent: DockContainer, id: number): (ev: Event) => void {
	"use strict";
	return function(ev: Event) {
		parent.setDrag(true, id);
		ev.dataTransfer.setData("text/plain", id);
	};
};

const endDrag = function(parent: DockContainer): (ev: Event) => void {
	"use strict";
	return function() {
		parent.setDrag(false);
	};
};

const allowDrop = function(container: DockZone): (ev: Event) => void {
	"use strict";
	return function(ev: Event) {
		ev.preventDefault();
		ev.dataTransfer.dropEffect = "move";
		container.setDrop(true);
	}
};

const resetDrop = function(container: DockZone): (ev: Event) => void {
	"use strict";
	return function(ev: Event) {
		ev.preventDefault();
		container.setDrop(false);
	}
};

const handleDrop = function(parent: DockContainer, zone: string): (ev: Event) => void {
	"use strict";
	return function(ev: Event) {
		parent.moveWidget(ev.dataTransfer.getData("text"), zone);
		ev.stopPropagation();
		ev.preventDefault();
	}
};
/* END Drag callbacks */

class DockableWidget extends React.Component {
	displayName: string = "DockableWidget";
	static propTypes: Object = {
		widgetid: React.PropTypes.number.isRequired,
		data    : React.PropTypes.object
	};
	render(): any {
		let title = <div draggable="true" onDragStart={startDrag(this.props.parent, this.props.widgetid)} className={styles.dockableHead}>
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

		return <div className={styles.dockableWidget}>
			{title}
			<div className={styles.widgetContent}>
				{this.props.children}
			</div>
		</div>;
	}
}

class DockZone extends React.Component {
	displayName: string = "DockZone";
	static propTypes: Object = {
		zone: React.PropTypes.string.isRequired,
		drag: React.PropTypes.bool
	};
	state: Object = {
		drop: false
	};
	setDrop(drop: bool) {
		this.setState({ drop });
	}
	render(): any {
		let zoneStyle = [styles.zone, styles[this.props.zone]];
		if (this.props.drag === true) {
			zoneStyle.push(styles.zoneDragTarget);
		}
		if (this.state.drop === true) {
			zoneStyle.push(styles.zoneDropTarget);
		}
		return <div onDrop={handleDrop(this.props.parent, this.props.zone)}
		            onDragOver={allowDrop(this)}
		            onDragLeave={resetDrop(this)}
		            onDragExit={resetDrop(this)}
		            className={multi.apply(this, zoneStyle)}>
			{this.props.children}
		</div>;
	}
}

class DockContainer extends WidgetContainer {
	displayName: string = "DockContainer";
	static getWidgetName(): string { return "Dock Container";	}
	state: Object = {
		drag: false,
		dragid: 0
	};
	setDrag(drag: bool, dragid: number) {
		this.setState({ drag, dragid });
	}
	moveWidget(widgetid: number, zone: string) {
		// Reset zone highlight status
		this.refs["zone." + zone].setDrop(false);
		// Change widget position
		if (typeof this.props.children[widgetid].props.dock === "undefined") {
			this.props.children[widgetid].props.dock = {
				"position": zone
			};
		} else {
			this.props.children[widgetid].props.dock.position = zone;
		}
	}
	render(): any {
		super.render();

		let items: {[key: string]: Array<any>} = {
			top      : [],
			left     : [],
			right    : [],
			bottom   : [],
			subtop   : [],
			subbottom: [],
			content  : []
		};

		const that = this;
		this.widgets.forEach(function(widget, i): (widget: any, i: number) => void {
			const data = widget.props.dock;
			let side = "left"; // Default if not set
			if (typeof data !== "undefined") {
				// Check side
				if (typeof data.position === "string" && data.position in items) {
					side = data.position;
				}
			}

			items[side].push(<DockableWidget parent={that} widgetid={i} key={"w."+i} data={widget.props.dock}>{widget}</DockableWidget>);
		})

		const drag = this.state.drag;
		return <div onDragEnd={endDrag(this)} className={styles.container}>
			<DockZone parent={this} drag={drag} zone="top" ref="zone.top">
				{items.top}
			</DockZone>
			<div className={styles.middle}>
				<DockZone parent={this} drag={drag} zone="left" ref="zone.left">
					{items.left}
				</DockZone>
				<div className={styles.center}>
					<DockZone parent={this} drag={drag} zone="subtop" ref="zone.subtop">
						{items.subtop}
					</DockZone>
					<div className={multi(styles.zone, styles.content)}>
						{items.content}
					</div>
					<DockZone parent={this} drag={drag} zone="subbottom" ref="zone.subbottom">
						{items.subbottom}
					</DockZone>
				</div>
				<DockZone parent={this} drag={drag} zone="right" ref="zone.right">
					{items.right}
				</DockZone>
			</div>
			<DockZone parent={this} drag={drag} zone="bottom" ref="zone.bottom">
				{items.bottom}
			</DockZone>
		</div>;
	}
}

export default DockContainer;