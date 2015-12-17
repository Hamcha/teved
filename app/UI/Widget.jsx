/* @flow */

import React from "react";
import styles from "./Widget.module.scss";

class Widget extends React.Component {
	render(): any {
		return <div className={styles.widget}>
			{this.props.children}
		</div>;
	}
}

export default Widget;