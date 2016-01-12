/* @flow */

import React from "react";
import Widget from "../Widget";
import styles from "./StageView.module.scss";

import TEV from "../../TEV/Core";

class StageView extends Widget {
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
        </div>;
    }
}

export default StageView;
