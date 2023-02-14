export const nameHandler = (e, newTaskState, taskDataHandler) => {
  taskDataHandler({
    name: e.target.value,
    finalDate: newTaskState.finalDate,
  });
};

export const finalDateHandler = (e, newTaskState, taskDataHandler) => {
  console.log(e.target.value);
  taskDataHandler({
    name: newTaskState.name,
    finalDate: e.target.value,
  });
};

export const saveNewTask = (newTaskState, taskModel) => {
  if (newTaskState.finalDate !== "" && newTaskState.name !== "") {
    const newTasksContainer = JSON.parse(localStorage.getItem("tasks"));
    newTasksContainer.push(
      new taskModel(newTaskState.name, newTaskState.finalDate)
    );
    localStorage.setItem("tasks", JSON.stringify(newTasksContainer));
  } else {
    alert("Set task name and final date!");
  }
};
