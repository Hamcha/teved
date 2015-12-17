/* @flow */

import React  from "react";
import styles from "./Chrome.module.scss";

class TBButton extends React.Component {
    render(): any {
        return <div className={styles.tbButton} style={this.props.style}>{this.props.children}</div>
    }
}

class TitleBar extends React.Component {
    render(): any {
        return <div className={styles.titleBar}>
            <div className={styles.titleText}>TEVed - TEV Editor</div>
            <div className={styles.btnContainer}>
                <TBButton style={{"font-weight": "bold"}}>&#8212;</TBButton>
                <div className={styles.hlbtn}>
                    <TBButton>&#10006;</TBButton>
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