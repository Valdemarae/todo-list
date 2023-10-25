const main = document.querySelector(".main");

const displayForm = () => {
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

  const descriptionLabel = document.createElement("label");
  descriptionLabel.for = "due_date";
  descriptionLabel.textContent = "Description";
  const descriptionInput = document.createElement("input");
  descriptionInput.type = "description";
  descriptionInput.id = "description";

  const dueDateLabel = document.createElement("label");
  dueDateLabel.for = "due_date";
  dueDateLabel.textContent = "Due Date";
  const dueDateInput = document.createElement("input");
  dueDateInput.type = "text";
  dueDateInput.id = "due_date";

  const submitButton = document.createElement("button");
  submitButton.textContent = "Create Todo";
  submitButton.classList.add("add_todo");

  form.appendChild(x);
  form.appendChild(titleLabel);
  form.appendChild(titleInput);
  form.appendChild(descriptionLabel);
  form.appendChild(descriptionInput);
  form.appendChild(dueDateLabel);
  form.appendChild(dueDateInput);
  form.appendChild(submitButton);

  main.appendChild(form);
  submitButton.addEventListener("click", hideForm);
  x.addEventListener("click", hideForm);
};

const hideForm = () => {
  const form = document.querySelector(".form");
  main.removeChild(form);
  main.setAttribute("style", "pointer-events: all;");
};

export { displayForm };