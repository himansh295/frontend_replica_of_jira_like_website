const container: HTMLElement | any = document.getElementById("app");
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
// import person from "./person.svg";

// console.log(data)

const fetchData = (): void => {
  const todos: IUser[] = [];
  const inProgress: IUser[] = [];
  const done: IUser[] = [];

  // console.log(data);

  for (let i = 0; i < data.issues.length; i++) {
    // console.log(data.issues[i]);
    let user: IUser = {
      
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


    if (user.status === "To do") {
      todos.push(user);
    } else if (user.status === "In Progress") {
      inProgress.push(user);
    } else if (user.status === "Done") {
      done.push(user);
    }

  }

  let answer_todo: string = "";

  for (let i = 0; i < todos.length; i++) {
    let user: IUser = todos[i];
    let output: string = `${cardTemplate(user)}`;
    answer_todo += output;
    // container.innerHTML += output;
  }
  answer_todo =
    '<div class="card_title"><h2 style="margin-left: 24px;">To Do ' +
    todos.length +
    '</h2> <div class="column"> ' +
    answer_todo +
    "</div></div> ";
  container.innerHTML += answer_todo;

  let answer_inP: string = "";

  for (let i = 0; i < inProgress.length; i++) {
    let user: IUser = inProgress[i];
    let output: string = `
    ${cardTemplate(user)}`;
    answer_inP += output;
    // container.innerHTML += output;
  }
  answer_inP =
    '<div class="card_title"><h2 style="margin-left: 24px;">In Progress ' +
    inProgress.length +
    '</h2> <div class="column">' +
    answer_inP +
    "</div> </div>";
  container.innerHTML += answer_inP;

  let answer_done: string = "";
  for (let i = 0; i < done.length; i++) {
    let user: IUser = done[i];
    let output: string = `${cardTemplate(user)}`;
    answer_done += output;
    // container.innerHTML += output;
  }
  answer_done =
    '<div class="card_title"><h2 style="margin-left: 24px;">Done ' +
    done.length +
    '</h2> <div class="column">' +
    answer_done +
    "</div> </div>";
  container.innerHTML += answer_done;
};

function checkStatus(user) {
  if (user.status === "To do") {
    return "todos";
  } else if (user.status === "In Progress") {
    return "inProgress";
  } else if (user.status === "Done") {
    return "done";
  }
}

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

function cardTemplate(user: IUser) {
  return ` 
  
  <div class="card--${checkStatus(user)}">
  <section class="cardTemplate" >
      <div class="jc-between d-flex">
        <div><h1>ID: ${user.id}</h1></div>
        <div style="font-size: smaller; color: #9ab4ac">${user.created}</div>
      </div>
      <h2>${user.header_text}</h2>
      <div class="card--text">
        ${user.text_text}
      </div>
      <div class="jc-between d-flex">
        <div>
          <div style="color: gray; font-weight: bold">Assignee</div>
          <div class="d-flex" style="margin-top: 10px">
            <img
              src="http://localhost:1234/user_2.06c5c3a4.svg"
              width="35px"
              height="35px"
              style="margin-right: 7px"
            />
            <div>
              <div><strong>Ryan Reynolds</strong></div>
              <div
                style="
                  color: gray;
                  font-weight: light;
                  font-size: small;
                  margin-top: 2px;
                "
              >
                Web Developer
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex-column ai-end">
          <div style="color: gray; font-weight: bold">Status</div>
          <button class="card--button" style="background-color: ${priorityColor(
            user
          )}" disabled>${user.priority}</button>
        </div>
      </div>
    </section>
    </div>
    
`;
}

fetchData();
// <img class="card--image" src=${} alt=${pokemon.name} />
// <div class="card--${checkStatus(user)}">
