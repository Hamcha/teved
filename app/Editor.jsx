/* @flow */

import React from "react";
import styles from "./Editor.module.scss";

const Editor = React.createClass({
	render(): any {
		"use strict";
		return <div className={styles.root}>
			<textarea style={{"width": "400px", "height": "300px"}}>
			</textarea>
			<button onclick={parsedump}>Parse</button>
		</div>;
	}
});

export default Editor;