/* @flow */

import React from "react";
import { render } from "react-dom";
import "./app.scss";
import "source-sans-pro";

import Editor from "./Editor";

render(
	<Editor />,
	document.getElementById("root")
);