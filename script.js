let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function showTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, i) => {
        list.innerHTML += `
            <li class="${task.done ? 'done' : ''}">
                ${task.text}
                <button onclick="completeTask(${i})">Complete</button>
                <button onclick="deleteTask(${i})">Delete</button>
            </li>`;
    });
}

function addTask() {
    let input = document.getElementById("taskInput");

    if (input.value.trim() !== "") {
        tasks.push({text: input.value, done: false});
        localStorage.setItem("tasks", JSON.stringify(tasks));
        input.value = "";
        showTasks();
    }
}

function completeTask(i) {
    tasks[i].done = !tasks[i].done;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    showTasks();
}

function deleteTask(i) {
    tasks.splice(i, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    showTasks();
}

showTasks();