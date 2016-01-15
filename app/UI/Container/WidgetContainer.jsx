/* @flow */

import React  from "react"
import Widget from "../Widget"

const addWidgetID = (child, i) => React.cloneElement(child, {ref: "widget-" + i});

export default class WidgetContainer extends Widget {
	static displayName: string = "WidgetContainer";
	static getWidgetName(): string { return "Widget Container";	}
	widgets: Array<Widget> = [];
	constructor(props: Object) {
		super(props);
	}
	render(): string {
		this.widgets = React.Children.map(this.props.children, addWidgetID);
	}
}