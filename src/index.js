import Todo from "./todo_class";
import './style.css';
import { displayForm, hideForm } from "./html";

export { xClicked, addTodoClicked };

const plus = document.querySelector(".plus");
plus.addEventListener("click", () => {
  displayForm();
});

const xClicked = () => {
  hideForm();
}

const addTodoClicked = () => {
  hideForm();
}

