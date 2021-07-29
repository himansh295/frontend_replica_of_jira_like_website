const container: HTMLElement | any = document.getElementById("data_details");
// const user: number = 3;

interface IUser {
  id: string;
  type: string;
  priority: string;
  affect_versions: string;
  components: string;
  labels: string;
  sprint: string;
  story_points: string;
  status: string;
  resolutions: string;
  fix_versions: string;
  assignee: string;
  reporter: string;
  votes: string;
  watchers: string;
  created: string;
  updated: string;
  header_text: string;
  text_text: string;
}

import * as data from "./mock.json";

// console.log(data)

const fetchData = (): void => {
    let i: number = 4;
    // console.log(data.issues[i]);
    let user: IUser = {
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
    showUser(user);
  
};

function priorityColor(user: IUser) {
  if (user.priority === "High Priority") {
    return "#CD0000";
  } else if (user.priority === "Low Priority") {
    return "#D46D1A";
  } else if (user.priority === "In Progress") {
    return "#CDAF00";
  } else if (user.priority === "Done") {
    return "#75A701";
  }
}

function cardTemplate(user) {
  return ` 
  <section class="issues-details d-flex">
  <div class="details-row d-flex-column">
  <div class="details-field">
    <span>Type:</span>
    <span class="details-value">${user.type}</span>
  </div>
  <div class="details-field">
    <span>Priority:</span>
    <span class="details-value" style="color: ${priorityColor(user)}"
      >${user.priority}</span
    >
  </div>
  <div class="details-field">
    <span>Affect Version/s:</span>
    <span class="details-value">${user.affect_versions}</span>
  </div>
  <div class="details-field">
    <span>Components/s:</span>
    <span class="details-value">${user.components}</span>
  </div>
  <div class="details-field">
    <span>Labels/s:</span>
    <span class="details-value">${user.labels}</span>
  </div>
  <div class="details-field">
    <span>Sprint:</span>
    <span class="details-value">${user.sprint}</span>
  </div>
  <div class="details-field">
    <span>Story Points:</span>
    <span class="details-value">${user.story_points}</span>
  </div>
</div>

<div class="details-row d-flex-column">
  <div class="details-field">
    <span>Status:</span>
    <span class="details-value">${user.status}</span>
  </div>
  <div class="details-field">
    <span>Resolution:</span>
    <span class="details-value">${user.resolutions}</span>
  </div>
  <div class="details-field">
    <span>Fix Version/s:</span>
    <span class="details-value">${user.fix_versions}</span>
  </div>
</div>
<div class="details-row d-flex-column">
  <div class="details-field">
    <span>Assignee:</span>
    <span class="details-value">${user.assignee}</span>
  </div>
  <div class="details-field">
    <span>Reporter:</span>
    <span class="details-value">${user.reporter}</span>
  </div>
  <div class="details-field">
    <span>Votes:</span>
    <span class="details-value">${user.votes}</span>
  </div>
  <div class="details-field">
    <span>Watchers:</span>
    <span class="details-value" style="color: blue"
      >${user.watchers}</span
    >
  </div>
  <div class="details-field">
    <span>Created:</span>
    <span class="details-value">${user.created}</span>
  </div>
  <div class="details-field">
    <span>Updated:</span>
    <span class="details-value">${user.updated}</span>
  </div>
</div>
</section>
`;
}

const showUser = (user: IUser): void => {
  let output: string = `
        ${cardTemplate(user)}
    `;
  container.innerHTML += output;
};

fetchData();
// <img class="card--image" src=${} alt=${pokemon.name} />
// <div class="card--${checkStatus(user)}">
