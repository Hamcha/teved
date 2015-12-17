/* @flow */

import React from "react";
import { render } from "react-dom";
import "./app.scss";
import "source-sans-pro";

import Chrome from "./Chrome";
import Editor from "./Editor";

render(
    <Chrome>
	   <Editor />
    </Chrome>,
	document.getElementById("root")
);