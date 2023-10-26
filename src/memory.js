export { getProjects, getTodoList, updateProjects, updateTodoList };

const getProjects = () => {
  return JSON.parse(localStorage.getItem("projects"));
};

const getTodoList = () => {
  return JSON.parse(localStorage.getItem("todoList"));
};

const updateProjects = (projects) => {
  localStorage.setItem("projects", JSON.stringify(projects));
};

const updateTodoList = (todoList) => {
  localStorage.setItem("todoList", JSON.stringify(todoList));
};
