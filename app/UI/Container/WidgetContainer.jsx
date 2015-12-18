/* @flow */

import React  from "react"
import Widget from "../Widget"

class WidgetContainer extends Widget {
	widgets: Array<Widget> = [];
	static getWidgetName(): string { return "Widget Container";	}
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