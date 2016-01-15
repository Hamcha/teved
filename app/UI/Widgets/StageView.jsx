/* @flow */

import React from "react";
import Widget from "../Widget";
import styles from "./StageView.module.scss";

import Pannable from "../Components/Pannable";

import TEV from "../../TEV/Core";

class Stage extends React.Component {
    static displayName: string = "Stage";
    static propTypes: Object = {
        stageID: React.PropTypes.number
    };
    render(): any {
        return <div className={styles.stage}>
            <header>Stage {this.props.stageID}</header>
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
        return <div className={styles.container}>
            <Pannable>
                <div className={styles.stageContainer}>
                    <Stage stageID={0} />
                    <Stage stageID={1} />
                    <Stage stageID={2} />
                    <Stage stageID={3} />
                </div>
            </Pannable>
        </div>;
    }
}
