document.getElementById("add-btn").addEventListener("click", addTask);

function addTask() {
  const taskInput = document.getElementById("new-task");
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Task cannot be empty!");
    return;
  }

  const taskList = document.getElementById("todo-list");

  const newTask = document.createElement("li");
  newTask.innerHTML = `
        <span class="task">${taskText}</span>
        <div class="btn-container">
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;

  newTask.querySelector(".edit-btn").addEventListener("click", function () {
    if (this.textContent === "Edit") {
      const taskSpan = newTask.querySelector(".task");
      const currentText = taskSpan.textContent;
      taskSpan.innerHTML = `<input type="text" value="${currentText}" class="edit-input">`;
      this.textContent = "Save";
    } else {
      const editInput = newTask.querySelector(".edit-input");
      const updatedText = editInput.value.trim();
      if (updatedText !== "") {
        newTask.querySelector(".task").textContent = updatedText;
      }
      this.textContent = "Edit";
    }
  });

  newTask.querySelector(".delete-btn").addEventListener("click", function () {
    newTask.remove();
  });

  taskList.appendChild(newTask);
  taskInput.value = "";
}
