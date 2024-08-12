document.addEventListener("DOMContentLoaded", () => {
    const tasks = [
        "Learn a new skill",
        "Complete the homework",
        "Organize the room",
    ];

    const taskContainer = document.getElementById("task-container");

   
    const createTaskElement = (task) => {
        const taskElement = document.createElement("div");
        taskElement.className = "task-item";

        const taskText = document.createElement("p");
        taskText.className = "task";
        taskText.textContent = task;

        const editButton = document.createElement("input");
        editButton.type = "button";
        editButton.value = "edit";
        editButton.className ="btn"
        editButton.id ="edit-btn"

        const deleteButton = document.createElement("input");
        deleteButton.type = "button";
        deleteButton.value = "delete";
        deleteButton.className ="btn"
        deleteButton.id ="delete-btn"

         /////////////////
         editButton.addEventListener("click", () => {
            // Create an input field to replace the task text
            const taskInput = document.createElement("input");
            taskInput.type = "text";
            taskInput.value = taskText.textContent;

            // Replace the task text with the input field
            taskElement.replaceChild(taskInput, taskText);

            // Handle Enter key press to save the edited task
            taskInput.addEventListener("keyup", (event) => {
                if (event.key === "Enter") {
                    const newTaskText = taskInput.value.trim();
                    if (newTaskText) {
                        taskText.textContent = newTaskText;
                        taskElement.replaceChild(taskText, taskInput);
                    }
                }
            })})

        ///////////////////
        deleteButton.addEventListener("click", () => {
            taskContainer.removeChild(taskElement);
        });

        taskElement.appendChild(taskText);
        taskElement.appendChild(editButton);
        taskElement.appendChild(deleteButton);

        return taskElement;
    };

    const addTaskButton = document.getElementById("add-task-button");
    addTaskButton.addEventListener("click", () => {
        const newTaskInput = document.getElementById("task-input");
        const newTask = newTaskInput.value.trim();

        if (newTask) {
            const taskElement = createTaskElement(newTask);
            taskContainer.appendChild(taskElement);
            newTaskInput.value = ""; 
        }
    });


    tasks.forEach((task) => {
        const taskElement = createTaskElement(task);
        taskContainer.appendChild(taskElement);
    });})
