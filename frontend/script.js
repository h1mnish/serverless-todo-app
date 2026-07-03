const API_URL =
    "https://y0tfbvcc7d.execute-api.ap-south-1.amazonaws.com/prod/tasks";

const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");

async function loadTasks() {

    const response = await fetch(API_URL);

    const tasks = await response.json();

    displayTasks(tasks);

}

function displayTasks(tasks) {

    taskList.innerHTML = "";

    tasks.forEach(task => {

        taskList.innerHTML += `
            <div class="task">

                <span class="${task.completed ? "completed" : ""}">
                    ${task.title}
                </span>

                <div>

                    <button onclick="editTask('${task.taskId}')">
    Edit
</button>

<button onclick="deleteTask('${task.taskId}')">
    Delete
</button>

                </div>

            </div>
        `;

    });

}

async function addTask() {

    if (taskInput.value.trim() === "") {
        return;
    }

    addTaskBtn.disabled = true;
    addTaskBtn.innerText = "Adding...";

    await fetch(API_URL, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            title: taskInput.value
        })

    });

    taskInput.value = "";

    addTaskBtn.disabled = false;
    addTaskBtn.innerText = "Add Task";

    loadTasks();

}

addTaskBtn.addEventListener("click", addTask);

async function editTask(taskId) {

    const newTitle = prompt("Enter new task title");

    if (!newTitle) return;

    await fetch(API_URL, {

        method: "PUT",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            taskId: taskId,
            title: newTitle,
            completed: false
        })

    });

    loadTasks();

}

async function deleteTask(taskId) {

    if (!confirm("Are you sure you want to delete this task?")) {
        return;
    }

    await fetch(API_URL, {

        method: "DELETE",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            taskId: taskId
        })

    });

    loadTasks();

}

loadTasks();