/* @flow */

import React  from "react";
import styles from "./Dropdown.module.scss";

type DropdownState = {
	active: boolean
};

type DropdownProps = {
	choices : Array<string>,
	label   : string,
	ddstyle : string,
	disabled: boolean
};

export default class Dropdown extends React.Component {
	static displayName: string = "Dropdown";
	static propTypes: Object = {
		choices : React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
		label   : React.PropTypes.string,
		ddstyle : React.PropTypes.string,
		onChange: React.PropTypes.func,
		disabled: React.PropTypes.bool
	};
	props: DropdownProps = {
		choices : [],
		label   : "",
		ddstyle : "",
		disabled: false
	};
	state: DropdownState = {
		active: false
	};
	render(): any {
		const extraClass = this.props.ddstyle !== "" ? this.props.ddstyle : "";
		const status = this.state.active ? styles.active : styles.closed;
		return <div className={[styles.root, extraClass, status].join(" ")}>
			<span>{this.props.label}</span>
			<ul className={styles.dropdown}>
				{this.props.choices.map((item, i) => <li key={i}>{item}</li>)}
			</ul>
		</div>;
	}
}