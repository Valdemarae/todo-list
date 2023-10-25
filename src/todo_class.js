let todoList = {};

export default class Todo {
  constructor(title, description, dueDate, project = "general") {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.#addTodoToList(project);
  }

  #addTodoToList(project) {
    if (todoList[project])
      todoList[project].push(this)
    else
      todoList[project] = [this];
  }
}