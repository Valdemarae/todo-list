import {
  xClicked,
  addTodoClicked,
  addProjectClicked,
  deleteTodo,
} from "./index";
import Todo from "./todo_class";

const main = document.querySelector(".main");
const content = document.querySelector(".content");

const displayForm = (projects) => {
  const form = document.createElement("div");
  form.classList.add("form");
  main.setAttribute("style", "pointer-events: none;");

  const x = document.createElement("button");
  x.textContent = "x";
  x.classList.add("x");

  const titleLabel = document.createElement("label");
  titleLabel.for = "title";
  titleLabel.textContent = "Title";
  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.id = "title";
  titleInput.placeholder = "must be present";

  const descriptionLabel = document.createElement("label");
  descriptionLabel.for = "due_date";
  descriptionLabel.textContent = "Description";
  const descriptionInput = document.createElement("input");
  descriptionInput.type = "description";
  descriptionInput.id = "description";
  descriptionInput.placeholder = "optional";

  const dueDateLabel = document.createElement("label");
  dueDateLabel.for = "due_date";
  dueDateLabel.textContent = "Due Date";
  const dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  dueDateInput.valueAsDate = new Date();
  dueDateInput.id = "due_date";

  const submitButton = document.createElement("button");
  submitButton.textContent = "Create Todo";
  submitButton.classList.add("add_todo");

  const projectLabel = document.createElement("label");
  projectLabel.for = "project";
  projectLabel.textContent = "Project";
  const projectInput = document.createElement("select");
  projectInput.id = "project";
  projects.forEach((element) => {
    const option = document.createElement("option");
    option.value = element;
    option.textContent = element;
    projectInput.appendChild(option);
  });

  form.appendChild(x);
  form.appendChild(titleLabel);
  form.appendChild(titleInput);
  form.appendChild(descriptionLabel);
  form.appendChild(descriptionInput);
  form.appendChild(dueDateLabel);
  form.appendChild(dueDateInput);
  form.appendChild(projectLabel);
  form.appendChild(projectInput);
  form.appendChild(submitButton);

  main.appendChild(form);
  submitButton.addEventListener("click", addTodoClicked);
  x.addEventListener("click", xClicked);
};

const hideForm = () => {
  const form = document.querySelector(".form");
  main.removeChild(form);
  main.setAttribute("style", "pointer-events: all;");
};

const displayTodoList = (element) => {
  const list = document.querySelector(".list");

  const div = document.createElement("div");
  div.classList.add("todo");

  const divLeft = document.createElement("div");
  const divRight = document.createElement("div");

  const title = document.createElement("h2");
  title.textContent = element.title;

  const description = document.createElement("p");
  description.textContent = element.description;

  const dueDate = document.createElement("p");
  dueDate.textContent = "Due: " + element.dueDate;

  const completion = document.createElement("p");
  completion.textContent = "Completed? " + element.completed;
  completion.classList.add("completion");

  if (element.completed == "✘") completion.classList.add("not_completed");
  else completion.classList.add("completed");

  const remove = document.createElement("button");
  remove.textContent = "Delete Todo";
  remove.classList.add("remove");

  divLeft.appendChild(title);
  divLeft.appendChild(description);
  divLeft.appendChild(dueDate);
  divRight.appendChild(completion);
  divRight.appendChild(remove);

  div.appendChild(divLeft);
  div.appendChild(divRight);

  list.appendChild(div);

  completion.addEventListener("click", (e) => {
    Todo.toggleCompletion(element);
    if (e.target.textContent == "Completed? ✘") {
      e.target.classList.add("completed");
      e.target.classList.remove("not_completed");
      e.target.textContent = "Completed? ✔";
    } else {
      e.target.classList.add("not_completed");
      e.target.classList.remove("completed");
      e.target.textContent = "Completed? ✘";
    }
  });

  remove.addEventListener("click", (e) => {
    deleteTodo(e, element);
  });
};

const displayProjectList = (element) => {
  const list = document.querySelector(".project_list");

  const h2 = document.createElement("h2");
  h2.textContent = element;
  h2.classList.add("project");

  list.appendChild(h2);
};

const clearTodoList = () => {
  content.removeChild(document.querySelector(".list"));
  const list = document.createElement("div");
  list.classList.add("list");
  content.appendChild(list);
};

const clearProjectList = () => {
  const projects = document.querySelector(".projects");
  projects.removeChild(document.querySelector(".project_list"));
  const list = document.createElement("div");
  list.classList.add("project_list");
  projects.appendChild(list);
};

const displayProjectForm = () => {
  const form = document.createElement("div");
  form.classList.add("form");
  main.setAttribute("style", "pointer-events: none;");

  const x = document.createElement("button");
  x.textContent = "x";
  x.classList.add("x");

  const projectLabel = document.createElement("label");
  projectLabel.for = "project";
  projectLabel.textContent = "Project";
  const projectInput = document.createElement("input");
  projectInput.type = "text";
  projectInput.id = "project";
  projectInput.placeholder = "must be present";

  const submitButton = document.createElement("button");
  submitButton.textContent = "Create Project";
  submitButton.classList.add("add_project");

  form.appendChild(x);
  form.appendChild(projectLabel);
  form.appendChild(projectInput);
  form.appendChild(submitButton);

  main.appendChild(form);
  submitButton.addEventListener("click", addProjectClicked);
  x.addEventListener("click", xClicked);
};

export {
  displayForm,
  hideForm,
  displayTodoList,
  clearTodoList,
  displayProjectForm,
  clearProjectList,
  displayProjectList,
};
