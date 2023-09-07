const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

//  função cria tags li
function createLi() {
  const li = document.createElement("li");
  return li;
}

// função cria tarefas
function createTask(inputTask) {
  const li = createLi();
  li.innerText = inputTask;
  tarefas.appendChild(li);
  clearTask();
  createDeleteButton(li);
  saveTask();
}

// função remove a tarefa do input
function clearTask() {
  inputTarefa.value = "";
  inputTarefa.focus();
}

// função cria botoão de apagar tarefa.
function createDeleteButton(li) {
  li.innerText += " ";
  const deleteTaskButton = document.createElement("button");
  deleteTaskButton.innerText = "Apagar";
  deleteTaskButton.setAttribute("class", "apagar");
  li.appendChild(deleteTaskButton);
}

// Função salva a tarefa no storage do browser
function saveTask() {
  const liTasks = tarefas.querySelectorAll("li");
  const taskList = [];

  for (let task of liTasks) {
    let textTask = task.innerText;
    textTask = textTask.replace("Apagar", "").trim();

    taskList.push(textTask);
  }

  const textJSON = JSON.stringify(taskList);
  localStorage.setItem("tasks", textJSON);
}

// função apaga tarefa
function deleteTask() {
  document.addEventListener("click", (e) => {
    const el = e.target;
    if (el.classList.contains("apagar")) {
      el.parentElement.remove();
      saveTask();
    }
  });
}
deleteTask();

inputTarefa.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return; // se tiver vazio, retorna.
    createTask(inputTarefa.value);
  }
});

btnTarefa.addEventListener("click", (e) => {
  if (!inputTarefa.value) return; // se tiver vazio, retorna.
  createTask(inputTarefa.value);
});

function addSavedTasks() {
  const tasks = localStorage.getItem("tasks");
  const taskList = JSON.parse(tasks);

  for (let task of taskList) {
    createTask(task);
  }
}
addSavedTasks();
