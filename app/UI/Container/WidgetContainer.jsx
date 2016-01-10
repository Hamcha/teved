/* @flow */

import React  from "react"
import Widget from "../Widget"

class WidgetContainer extends Widget {
	static displayName: string = "WidgetContainer";
	static getWidgetName(): string { return "Widget Container";	}
	widgets: Array<Widget> = [];
	constructor(props: Object) {
		super(props);
	}
	componentWillReceiveProps() {
		this.setState({
			dirty: true
		});
	}
	render(): string {
		this.widgets = React.Children.map(this.props.children, function (child, i) {
			return React.cloneElement(child, {
				ref: "widget-" + i
			});
		});
	}
}

export default WidgetContainer;