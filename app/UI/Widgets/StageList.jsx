/* @flow */

import React from "react";

import Widget from "../Widget";
import Dropdown from "../Components/Dropdown";

import TEV       from "../../TEV/Core";
import TEVStage  from "../../TEV/Stage";
import {TevOp, TevBias, TevScale, Registers}  from "../../TEV/Enums";
import type {Operation, Bias, Scale, Register} from "../../TEV/Enums";

import styles from "./StageList.module.scss";

const OpNames: { [key: Operation]: String } = {};
OpNames[TevOp.Add] = "Add";
OpNames[TevOp.Sub] = "Sub";
OpNames[TevOp.CompRedGt] = "R=";
OpNames[TevOp.CompRedEq] = "R>";
OpNames[TevOp.CompGreenRedGt] = "GR=";
OpNames[TevOp.CompGreenRedEq] = "GR>";
OpNames[TevOp.CompBlueGreenRedGt] = "BGR=";
OpNames[TevOp.CompBlueGreenRedEq] = "BGR>";
OpNames[TevOp.CompRGB8Gt] = "RGB=";
OpNames[TevOp.CompRGB8Eq] = "RGB>";
OpNames[TevOp.CompAlphaGt] = "A>";
OpNames[TevOp.CompAlphaEq] = "A=";

const BiasNames: { [key: Bias]: String } = {};
BiasNames[TevBias.Zero] = "-";
BiasNames[TevBias.HalfAdd] = "+0.5";
BiasNames[TevBias.HalfSub] = "-0.5";

const ScaleNames: { [key: Scale]: String } = {};
ScaleNames[TevScale.NoScale] = "-";
ScaleNames[TevScale.Mult2] = "× 2";
ScaleNames[TevScale.Mult4] = "× 4";
ScaleNames[TevScale.Div2] = "÷ 2";

const RegNames: { [key: Register]: String } = {};
RegNames[Registers.Previous] = "Prev";
RegNames[Registers.Reg0] = "R0";
RegNames[Registers.Reg1] = "R1";
RegNames[Registers.Reg2] = "R2";

class StageListItem extends React.Component {
	static displayName: string = "StageListItem";
	static propTypes: Object = {
		stageID: React.PropTypes.number,
		stage:   React.PropTypes.instanceOf(TEVStage)
	};
	render(): any {
		const stage = this.props.stage;
		/*const genBlock = (data) => <div className={styles.stageSummaryCell}>
			<div className={styles.stageSummaryCellHeader}>{data.Name}</div>
				{data.Blocks.map((item) => <div>{item}</div>)}
		</div>;

		const fnblocks = [
			{
				Name: "Op",
				Blocks: [ OpNames[stage.color_op], OpNames[stage.alpha_op] ]
			},{
				Name: "Bias",
				Blocks: [ BiasNames[stage.color_bias], BiasNames[stage.alpha_bias] ]
			},{
				Name: "Scale",
				Blocks: [ ScaleNames[stage.color_scale], ScaleNames[stage.alpha_scale] ]
			},{
				Name: "Clamp",
				Blocks: [ stage.color_clamp ? "✓" : "-", stage.alpha_clamp ? "✓" : "-" ]
			},{
				Name: "RegID",
				Blocks: [ RegNames[stage.color_regid], RegNames[stage.alpha_regid] ]
			}
		];

		const opblocks = [
			{ Name: "A", Blocks: [ "lol" ] },
			{ Name: "B", Blocks: [ "lol" ] },
			{ Name: "C", Blocks: [ "lol" ] },
			{ Name: "D", Blocks: [ "lol" ] }
		]

		const stageOperationSummary = <div className={styles.stageSummary}>
			<div className={styles.stageSummaryLeftHeader}>
				<div className={styles.stageSummaryCellHeader}>&nbsp;</div>
				<div className={styles.stageSummaryLeftHeaderIcon}>
					<img src="resources/Images/colorcircle.svg" />
				</div>
				<div className={styles.stageSummaryLeftHeaderIcon}>
					<img src="resources/Images/alphabox.svg" />
				</div>
			</div>
			{fnblocks.map(genBlock)}
		</div>;

		const stageOperandsSummary = <div className={styles.stageSummary}>
			{opblocks.map(genBlock)}
		</div>;*/

		return <div className={styles.stageListItem}>
			<header>STAGE {this.props.stageID}</header>
			<Dropdown label="test" choices={["a", "bb", "ca c"]} />
		</div>;
	}
}

export default class StageList extends Widget {
	static displayName: string = "StageList";
	static getWidgetName(): string { return "TEV Stages"; }
	static propTypes: Object = {
        tev: React.PropTypes.instanceOf(TEV)
    };
	renderWidget(): any {
		return <div className={styles.container}>
			{this.props.tev.GetStages().map((stage, id) =>
				<StageListItem key={id} stageID={id} stage={stage} />
			)}
			<div className={styles.remaining}>
				{this.props.tev.stages.length - this.props.tev.nstages} stages available<br />
			</div>
		</div>;
	}
}