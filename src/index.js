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
  const title = document.querySelector("#title");
  if (validInput(title.value)) {
    const description = document.querySelector("#description");
    const dueDate = document.querySelector("#due_date");
  
    new Todo(title.value, description.value, dueDate.value);
  
    const list = Todo.getList();
  
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