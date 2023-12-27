const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
            <input type="checkbox">
            <span>${taskText}</span>
            <span class="delete-btn" onclick="deleteTask(this)">&times;</span>
        `;
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

function deleteTask(deleteBtn) {
    const listItem = deleteBtn.parentNode;
    taskList.removeChild(listItem);
}
