"use strict";
exports.__esModule = true;
var container = document.getElementById("data_details");
var data = require("./mock.json");
// console.log(data)
var fetchData = function () {
    for (var i = 5; i < 6; i++) {
        // console.log(data.issues[i]);
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
            text_text: data.issues[i].text_text
        };
        showUser(user);
    }
};
function priorityColor(user) {
    if (user.priority === "High Priority") {
        return "#CD0000";
    }
    else if (user.priority === "Low Priority") {
        return "#D46D1A";
    }
    else if (user.priority === "In Progress") {
        return "#CDAF00";
    }
    else if (user.priority === "Done") {
        return "#75A701";
    }
}
function cardTemplate(user) {
    return " \n  <section class=\"issues-details d-flex\">\n  <div class=\"details-row d-flex-column\">\n  <div class=\"details-field\">\n    <span>Type:</span>\n    <span class=\"details-value\">" + user.type + "</span>\n  </div>\n  <div class=\"details-field\">\n    <span>Priority:</span>\n    <span class=\"details-value\" style=\"color: " + priorityColor(user) + "\"\n      >" + user.priority + "</span\n    >\n  </div>\n  <div class=\"details-field\">\n    <span>Affect Version/s:</span>\n    <span class=\"details-value\">" + user.affect_versions + "</span>\n  </div>\n  <div class=\"details-field\">\n    <span>Components/s:</span>\n    <span class=\"details-value\">" + user.components + "</span>\n  </div>\n  <div class=\"details-field\">\n    <span>Labels/s:</span>\n    <span class=\"details-value\">" + user.labels + "</span>\n  </div>\n  <div class=\"details-field\">\n    <span>Sprint:</span>\n    <span class=\"details-value\">" + user.sprint + "</span>\n  </div>\n  <div class=\"details-field\">\n    <span>Story Points:</span>\n    <span class=\"details-value\">" + user.story_points + "</span>\n  </div>\n</div>\n\n<div class=\"details-row d-flex-column\">\n  <div class=\"details-field\">\n    <span>Status:</span>\n    <span class=\"details-value\">" + user.status + "</span>\n  </div>\n  <div class=\"details-field\">\n    <span>Resolution:</span>\n    <span class=\"details-value\">" + user.resolutions + "</span>\n  </div>\n  <div class=\"details-field\">\n    <span>Fix Version/s:</span>\n    <span class=\"details-value\">" + user.fix_versions + "</span>\n  </div>\n</div>\n<div class=\"details-row d-flex-column\">\n  <div class=\"details-field\">\n    <span>Assignee:</span>\n    <span class=\"details-value\">" + user.assignee + "</span>\n  </div>\n  <div class=\"details-field\">\n    <span>Reporter:</span>\n    <span class=\"details-value\">" + user.reporter + "</span>\n  </div>\n  <div class=\"details-field\">\n    <span>Votes:</span>\n    <span class=\"details-value\">" + user.votes + "</span>\n  </div>\n  <div class=\"details-field\">\n    <span>Watchers:</span>\n    <span class=\"details-value\" style=\"color: blue\"\n      >" + user.watchers + "</span\n    >\n  </div>\n  <div class=\"details-field\">\n    <span>Created:</span>\n    <span class=\"details-value\">" + user.created + "</span>\n  </div>\n  <div class=\"details-field\">\n    <span>Updated:</span>\n    <span class=\"details-value\">" + user.updated + "</span>\n  </div>\n</div>\n</section>\n";
}
var showUser = function (user) {
    var output = "\n        " + cardTemplate(user) + "\n    ";
    container.innerHTML += output;
};
fetchData();
// <img class="card--image" src=${} alt=${pokemon.name} />
// <div class="card--${checkStatus(user)}">
