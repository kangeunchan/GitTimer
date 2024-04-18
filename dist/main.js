"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
function createWindow() {
    var win = new electron_1.BrowserWindow({
        width: 1000,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
    });
    win.loadFile("index.html");
}
electron_1.app.whenReady().then(createWindow);
electron_1.app.on("window-all-closed", function () {
    console.log("process is exit");
});
electron_1.app.on("activate", function () {
    console.log("process is activate");
});
