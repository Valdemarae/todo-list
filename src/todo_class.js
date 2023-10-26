let todoList = {};
let projects = ["general"];

export default class Todo {
  constructor(title, description, dueDate, project) {
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

  static getList(project) {
    return todoList[project];
  }

  static getProjects() {
    return projects;
  }
}