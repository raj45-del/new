document.addEventListener("DOMContentLoaded", ()=>{
    const taskInput = document.getElementById("taskInput") as HTMLInputElement
    const addTaskBtn= document.getElementById("addTaskBtn") as HTMLButtonElement
    const taskList= document.getElementById("taskList") as HTMLUListElement

    const addTask=()=>{
        const taskText= taskInput.value.trim()

        if(taskText!==""){
            const li= document.createElement("li")
            li.textContent=taskText;

            taskList.appendChild(li)

            taskInput.value=""
        }
    }
    addTaskBtn.addEventListener("click", addTask)


})