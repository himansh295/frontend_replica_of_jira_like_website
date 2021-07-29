"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var container = document.getElementById("app");
var data = __importStar(require("./mock.json"));
var fetchData = function () {
    var todos = [];
    var inProgress = [];
    var done = [];
    for (var i = 0; i <= data.issues.length; i++) {
        var user = {
            // name: `User-${i}`,
            // type: `Linker`,
            id: data.issues[i].id,
            type: data.issues[i].type,
            priority: data.issues[i].priority,
            affect_versions: data.issues[i].affect_versions,
            components: data.issues[i].components,
            labels: data.issues[i].labels,
            sprint: data.issues[i].sprint,
            story_points: data.issues[i].story_points,
            status: data.issues[i].status,
            resolutions: data.issues[i].resolutions,
            fix_versions: data.issues[i].fix_versions,
            assignee: data.issues[i].assignee,
            reporter: data.issues[i].reporter,
            votes: data.issues[i].votes,
            watchers: data.issues[i].watchers,
            created: data.issues[i].created,
            updated: data.issues[i].updated,
            header_text: data.issues[i].header_text,
            text_text: data.issues[i].text_text,
        };
        switch (user.status) {
            case "To do":
                todos.push(user);
                break;
            case "In Progress":
                inProgress.push(user);
                break;
            case "Done":
                done.push(user);
                break;
        }
    }
    for (var _i = 0, todos_1 = todos; _i < todos_1.length; _i++) {
        var user = todos_1[_i];
        showUser(user);
    }
    for (var _a = 0, inProgress_1 = inProgress; _a < inProgress_1.length; _a++) {
        var user = inProgress_1[_a];
        showUser(user);
    }
    for (var _b = 0, done_1 = done; _b < done_1.length; _b++) {
        var user = done_1[_b];
        showUser(user);
    }
};
function cardTemplate(user) {
    return " \n  <section class=\"cardTemplate\">\n      <div class=\"jc-between d-flex\">\n        <div><strong>ID: " + user.id + "</strong></div>\n        <div style=\"font-size: smaller; color: #9ab4ac\">February 11, 2021</div>\n      </div>\n      <h2>" + user.header_text + "</h2>\n      <div class=\"card--text\">\n        " + user.text_text + "\n      </div>\n      <div class=\"jc-between d-flex\">\n        <div>\n          <div style=\"color: gray; font-weight: bold\">Assignee</div>\n          <div class=\"d-flex\" style=\"margin-top: 10px\">\n            <img\n              src=\"../images/user_2.svg\"\n              width=\"35px\"\n              height=\"35px\"\n              style=\"margin-right: 7px\"\n            />\n            <div>\n              <div><strong>Ryan Reynolds</strong></div>\n              <div\n                style=\"\n                  color: gray;\n                  font-weight: light;\n                  font-size: small;\n                  margin-top: 2px;\n                \"\n              >\n                Web Developer\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"d-flex-column ai-end\">\n          <div style=\"color: gray; font-weight: bold\">Status</div>\n          <button class=\"card--button\" disabled>" + user.priority + "</button>\n        </div>\n      </div>\n    </section>\n";
}
var showUser = function (user) {
    var output = "\n        " + cardTemplate(user) + "\n    ";
    container.innerHTML += output;
};
fetchData();
// <img class="card--image" src=${} alt=${pokemon.name} />
