const taskInput = document.getElementById("newTaskInput");
const addBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("todoList");

// Counter elements
const totalCount = document.getElementById("totalCount");
const completedCount = document.getElementById("completedCount");
const remainingCount = document.getElementById("remainingCount");

addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const text = taskInput.value.trim();
  if (text === "") return;

  const li = document.createElement("li");
  li.className = "todo-item";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "task-checkbox";

  checkbox.addEventListener("change", () => {
    li.classList.toggle("completed");
    updateCounters();
  });

  const span = document.createElement("span");
  span.className = "task-text";
  span.textContent = text;

  const btn = document.createElement("button");
  btn.className = "delete-button";
  btn.textContent = "Delete Task";
  btn.onclick = () => {
    li.style.animation = "fadeOut 0.3s ease forwards";
  setTimeout(() => {
    li.remove();
    updateCounters();
  }, 300);
  };

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(btn);
  taskList.appendChild(li);

  taskInput.value = "";
  updateCounters();
}

function updateCounters() {
  const allTasks = document.querySelectorAll(".todo-item");
  const completedTasks = document.querySelectorAll(".todo-item.completed");

  totalCount.textContent = allTasks.length;
  completedCount.textContent = completedTasks.length;
  remainingCount.textContent = allTasks.length - completedTasks.length;
}
