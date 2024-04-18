"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.octokit = void 0;
// octokit.ts
var rest_1 = require("@octokit/rest");
require("dotenv").config();
exports.octokit = new rest_1.Octokit({
    auth: process.env.TOKEN,
});
