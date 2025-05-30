document.addEventListener("DOMContentLoaded", function () {
    var taskInput = document.getElementById("taskInput");
    var addTaskBtn = document.getElementById("addTaskBtn");
    var taskList = document.getElementById("taskList");
    var addTask = function () {
        var taskText = taskInput.value.trim();
        if (taskText !== "") {
            var li = document.createElement("li");
            li.textContent = taskText;
            taskList.appendChild(li);
            taskInput.value = "";
        }
    };
    addTaskBtn.addEventListener("click", addTask);
});
