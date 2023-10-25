import Todo from "./todo_class";
import './style.css';
import { displayForm, hideForm, displayTodoList, clearTodoList } from "./html";

export { xClicked, addTodoClicked };

const plus = document.querySelector(".plus");
plus.addEventListener("click", () => {
  displayForm();
});

const xClicked = () => {
  hideForm();
}

const addTodoClicked = () => {
  const title = document.querySelector("#title");
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

