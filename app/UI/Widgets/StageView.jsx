/* @flow */

import React from "react";
import Widget from "../Widget";
import styles from "./StageView.module.scss";

import Pannable from "../Components/Pannable";

import TEV from "../../TEV/Core";

const stageWidth = 200; // px

const stageStyle = {
    width: stageWidth + "px"
};

class Stage extends React.Component {
    static displayName: string = "Stage";
    static propTypes: Object = {
        stageID: React.PropTypes.number,
        tev:     React.PropTypes.instanceOf(TEV)
    };
    render(): any {
        return <div style={stageStyle} className={styles.stage}>
            <header>Stage {this.props.stageID}</header>

        </div>;
    }
}

class Output extends React.Component {
    static displayName: string = "Stage";
    static propTypes: Object = {
        tev: React.PropTypes.instanceOf(TEV)
    };
    render(): any {
        return <div style={stageStyle} className={styles.stage}>
            <header>Output</header>
        </div>;
    }
}

export default class StageView extends Widget {
    static displayName: string = "StageView";
    static propTypes: Object = {
        tev: React.PropTypes.instanceOf(TEV)
    };
    static getWidgetName(): string { return "TEV Inspector"; }
    constructor() {
        super();
    }
    renderWidget(): any {
        const stageContainerStyle = {
            width: stageWidth * (this.props.tev.nstages + 1) + "px"
        };
        return <div className={styles.container}>
            <Pannable>
                <div className={styles.stageContainer} style={stageContainerStyle}>
                    {this.props.tev.GetStages().map((stage, id) =>
                        <Stage key={id} stageID={id} tev={this.props.tev} />
                    )}
                    <Output tev={this.props.tev} />
                </div>
            </Pannable>
        </div>;
    }
}
