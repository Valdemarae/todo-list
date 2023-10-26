import Todo from "./todo_class";
import './style.css';
import { displayForm, hideForm, displayTodoList, clearTodoList, displayProjectForm, clearProjectList, displayProjectList } from "./html";

export { xClicked, addTodoClicked, addProjectClicked };

displayData();
function displayData(){
  const list = Todo.getList("general");
  if (list){
    list.forEach(element => {
      displayTodoList(element);
    });
  }

  const projectList = Todo.getProjects();
  if (projectList){
    projectList.forEach(element => {
      displayProjectList(element);
    });
  }

  highlightFirstProject();
}

function highlightFirstProject(){
  document.querySelector(".project_list").firstElementChild.classList.add("project_chosen");
}

function highlightLastProject(){
  document.querySelector(".project_list").lastElementChild.classList.add("project_chosen");
}

const plus = document.querySelector(".plus");
plus.addEventListener("click", () => {
  const projects = Todo.getProjects();
  displayForm(projects);
});

const projectPlus = document.querySelector(".project_plus");
projectPlus.addEventListener("click", displayProjectForm);

const xClicked = () => {
  hideForm();
}

const addTodoClicked = () => {
  const title = document.querySelector("#title").value;
  if (validInput(title)) {
    const description = document.querySelector("#description").value;
    const dueDate = document.querySelector("#due_date").value;
    const project = document.querySelector("#project").value;
  
    new Todo(title, description, dueDate, project);
  
    updateTodos(project);
  
    hideForm();
  }
}

function updateTodos(project) {
  const list = Todo.getList(project);
  
  clearTodoList();

  if (list) {
    list.forEach(element => {
      displayTodoList(element);
    });
  }
}

const addProjectClicked = () => {
  const project = document.querySelector("#project").value;
  if (validInput(project)) {
  
    Todo.addProject(project);
  
    updateProjects();
  
    hideForm();
  }
}

function updateProjects() {
  const list = Todo.getProjects();
  
  clearProjectList();

  list.forEach(element => {
    displayProjectList(element);
  });

  const projectList = document.querySelector(".project_list");
  projectList.addEventListener("click", (e) => {
    if (list.includes(e.target.textContent)){
      updateTodos(e.target.textContent);
      const previousChosen = document.querySelector(".project_chosen");
      console.log(previousChosen)
      if (previousChosen)
        previousChosen.classList.remove("project_chosen");
      e.target.classList.add("project_chosen");
    }
  });

  highlightLastProject();
}

function validInput(input) {
  if (input == "")
    return false;
  return true;
}