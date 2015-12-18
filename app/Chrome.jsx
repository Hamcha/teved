/* @flow */

import React  from "react";
import styles from "./Chrome.module.scss";

const close = function() {
	"use strict";
	const app = require("electron").remote.app;
	app.quit();
}

const minimize = function() {
	"use strict";
	require("electron").remote.getCurrentWindow().minimize();
}

class TBButton extends React.Component {
	render(): any {
		return <div className={styles.tbButton}
		            style={this.props.style}
		            onClick={this.props.action}>
				{this.props.children}
		</div>;
	}
}

class TitleBar extends React.Component {
	render(): any {
		return <div className={styles.titleBar}>
			<div className={styles.titleText}>TEVed - TEV Editor</div>
			<div className={styles.btnContainer}>
				<TBButton action={minimize} style={{"fontWeight": "bold"}}>&#8212;</TBButton>
				<div className={styles.hlbtn}>
					<TBButton action={close}>&#10006;</TBButton>
				</div>
			</div>
		</div>;
	}
}

class Chrome extends React.Component {
	render(): any {
		return <div className={styles.rootWnd}>
			<TitleBar />
			<div className={styles.uiWrapper}>
				<div className={styles.uiContainer}>
					{this.props.children}
				</div>
			</div>
		</div>;
	}
}

export default Chrome;