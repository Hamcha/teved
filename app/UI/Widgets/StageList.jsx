/* @flow */

import React from "react";

import Widget from "../Widget";

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
		const stageOperationSummary = <div className={styles.stageSummary}>
			<div className={styles.stageSummaryLeftHeader}>
				<div className={styles.stageSummaryCellHeader}>&nbsp;</div>
				<div className={styles.stageSummaryColor}>
					C
				</div>
				<div className={styles.stageSummaryColor}>
					A
				</div>
			</div>
			<div className={styles.stageSummaryCell}>
				<div className={styles.stageSummaryCellHeader}>Op</div>
				<div className={styles.stageSummaryColor}>
					{OpNames[this.props.stage.color_op]}
				</div>
				<div className={styles.stageSummaryColor}>
					{OpNames[this.props.stage.alpha_op]}
				</div>
			</div>
			<div className={styles.stageSummaryCell}>
				<div className={styles.stageSummaryCellHeader}>Bias</div>
				<div className={styles.stageSummaryColor}>
					{BiasNames[this.props.stage.color_bias]}
				</div>
				<div className={styles.stageSummaryColor}>
					{BiasNames[this.props.stage.alpha_bias]}
				</div>
			</div>
			<div className={styles.stageSummaryCell}>
				<div className={styles.stageSummaryCellHeader}>Scale</div>
				<div className={styles.stageSummaryColor}>
					{ScaleNames[this.props.stage.color_scale]}
				</div>
				<div className={styles.stageSummaryColor}>
					{ScaleNames[this.props.stage.alpha_scale]}
				</div>
			</div>
			<div className={styles.stageSummaryCell}>
				<div className={styles.stageSummaryCellHeader}>Clamp</div>
				<div className={styles.stageSummaryColor}>
					{this.props.stage.color_clamp ? "✓" : "-"}
				</div>
				<div className={styles.stageSummaryColor}>
					{this.props.stage.alpha_clamp ? "✓" : "-"}
				</div>
			</div>
			<div className={styles.stageSummaryCell}>
				<div className={styles.stageSummaryCellHeader}>RegID</div>
				<div className={styles.stageSummaryColor}>
					{RegNames[this.props.stage.color_regid]}
				</div>
				<div className={styles.stageSummaryColor}>
					{RegNames[this.props.stage.alpha_regid]}
				</div>
			</div>
		</div>;

		return <div className={styles.stageListItem}>
			<header>STAGE {this.props.stageID}</header>
			{stageOperationSummary}
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