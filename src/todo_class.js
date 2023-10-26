let todoList = {};
let projects = ["general"];

export default class Todo {
  constructor(title, description, dueDate, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.completed = "✘";
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

  static addProject(project) {
    projects.push(project);
  }

  static toggleCompletion(todo) {
    if (todo.completed == "✘")
      todo.completed = "✔";
    else
      todo.completed = "✘";
  }

  static deleteTodo(todo, project) {
    let array = todoList[project];
    let index = 0;
    let n;
    array.forEach(element => {
      if (element == todo)
        n = index;
      index++;
    });
    if (n != undefined)
      todoList[project] = array.slice(0, n).concat(array.slice(n+1));
  }
}