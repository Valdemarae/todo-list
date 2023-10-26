import Todo from "./todo_class";
import './style.css';
import { displayForm, hideForm, displayTodoList, clearTodoList } from "./html";

export { xClicked, addTodoClicked };

const plus = document.querySelector(".plus");
plus.addEventListener("click", () => {
  const projects = Todo.getProjects();
  displayForm(projects);
});

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
  
    const list = Todo.getList(project);
  
    clearTodoList();
  
    list.forEach(element => {
      displayTodoList(element);
    });
  
    hideForm();
  }
}

function validInput(title) {
  if (title == "")
    return false;
  return true;
}