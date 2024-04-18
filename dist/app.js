"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
var ipcMain = require("electron").ipcMain;
var findRepository_1 = require("./findRepository");
var createRepository_1 = require("./createRepository");
var createCommit_1 = require("./createCommit");
var createBranch_1 = require("./createBranch.");
var Repo;
var RepoStatus = false;
// RepoStatus = true 면 Repo가 있는 상태
// RepoStatus = false 면 Repo가 없는 상태
var RepositoryName = "GitTimer";
var RepositoryDisclosure = true;
(0, createBranch_1.createAndPushBranch)("master");
function setting() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, findRepository_1.getRepository)("kangeunchan", RepositoryName)];
                case 1:
                    // console.log((await getRepository("kangeunchan", "Web")).name);
                    Repo = _a.sent();
                    if (Repo.name == RepositoryName) {
                        RepoStatus = true;
                        console.log(RepositoryName + " found, RepoStatus : " + RepoStatus);
                    }
                    else {
                        RepoStatus = false;
                        console.log(RepositoryName + " not found, RepoStatus : " + RepoStatus);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function run() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (RepoStatus == false) {
                (0, createRepository_1.createRepository)(RepositoryName, RepositoryDisclosure);
            }
            else {
                console.log("Repo already exists");
            }
            return [2 /*return*/];
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, setting()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, run()];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    if (!true) return [3 /*break*/, 6];
                    console.log(Date() + " : Running...");
                    return [4 /*yield*/, (0, createCommit_1.createCommit)("Commit by GitTimer")];
                case 4:
                    _a.sent(); // 'await' 키워드 추가
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 1000 * 60); })];
                case 5:
                    _a.sent(); // 60초 대기
                    return [3 /*break*/, 3];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.main = main;
ipcMain.on("form-submission", function (event, data) {
    RepositoryName = data.repositoryName;
    RepositoryDisclosure = data.repositoryDisclosure;
    main(); // 폼 제출 후에 main 함수를 실행합니다.
});
