/* eslint strict: 0 */
"use strict";

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const crashReporter = electron.crashReporter;
const shell = electron.shell;
let mainWindow = null;

crashReporter.start();

if (process.env.NODE_ENV === "development") {
	require("electron-debug")();
}

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") app.quit();
});

app.on("ready", () => {
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		frame: false
	});
	mainWindow.setMenu(null);

	if (process.env.HOT) {
		mainWindow.loadURL(`file://${__dirname}/app/hot-app.html`);
	} else {
		mainWindow.loadURL(`file://${__dirname}/app/app.html`);
	}

	mainWindow.on("closed", () => {
		mainWindow = null;
	});

	if (process.env.NODE_ENV === "development") {
		mainWindow.openDevTools();
	}
});