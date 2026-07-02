const API_URL =
"https://y0tfbvcc7d.execute-api.ap-south-1.amazonaws.com/prod/tasks";

async function loadTasks() {

    const response = await fetch(API_URL);

    const tasks = await response.json();

    console.log(tasks);

}

loadTasks();