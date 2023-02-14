export const removeTask = async (id, userTasks, updateTasksListHandler) => {
  let tasks = [...userTasks];
  if (tasks.length - 1 < 1) {
    tasks = [];
  } else {
    tasks = tasks.filter((task) => task.id !== id);
  }
  localStorage.setItem("tasks", JSON.stringify(tasks));
  updateTasksListHandler(() => tasks);
};

export const setStatus = (id, userTasks, updateTasksListHandler) => {
  let tasks = [...userTasks];
  const task = tasks.find((taskToFind) => taskToFind.id === id);
  task.done = !task.done;
  tasks = tasks.map((el) => (el.id === task.id ? task : el));
  localStorage.setItem("tasks", JSON.stringify(tasks));
  updateTasksListHandler(tasks);
};
