import Todo from "./todo_class";
import './style.css';
import { displayForm } from "./html";

const plus = document.querySelector(".plus");
plus.addEventListener("click", () => {
  displayForm();
});

