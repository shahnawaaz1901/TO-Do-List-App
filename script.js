let tasks = [];

const add = document.getElementById('add');
const taskCount = document.getElementById('tasks-counter');
const tasksList = document.getElementById('list');

// Check We Fetch Elements Successfully or Not
/*
console.log(taskList)
console.log(taskCount)
console.log(add);
*/


// Functions

// Adding a Taks
function addTask(task){
    if(!task){
        showNotification('Task Can Not Added');
        return;
    }
    tasks.push(task);
    showNotification('Task Added Successfully');
    renderList();
}

// Delete a Task
function deleteTask(taskId){
    const new_task = tasks.filter((task)=>{         //Passing Task in Argument Because Search in Only Task Object in the Tasks Array
        return task.id != taskId;
    });

    tasks = new_task;
    showNotification('Task Deleted SuccessFully');
    renderList();
}

// Mark Task as Complete
function toggleTask(taskId){
    let selectTask = tasks.filter((task)=>{
        return task.id == taskId;
    })

    if(selectTask.length > 0){
        const curTask = selectTask[0];
        curTask.done = !curTask.done;
        showNotification('Task Toggeled Successfully');
        return;
    }
    showNotification('Something went Wrong');

}

// Refresh Page Every Time After Adding or Delete Task
function addTaskToDOM(task){
    const li = document.createElement('li');
    li.innerHTML = 
    `<input type="checkbox" id="${task.id}" data-id="${task.id}" ${task.done ? 'checked' : ''} class="custom-checkbox">
    <label for="${task.id}">${task.text}</label>
    <img src="trash-solid.svg" class="delete" data-id="${task.id}" />`;
    tasksList.append(li);
}


function renderList(){
    tasksList.innerHTML = '';
    for(let i = 0; i < tasks.length;i++){
        addTaskToDOM(tasks[i]);
    }
    taskCount.innerText = tasks.length;
}

// Show Notification that task is Added or deleted, Mark Successfully
function showNotification(massage){
    window.alert(massage);
}


add.addEventListener('keyup',(e)=>{
    if(e.key == 'Enter'){
        let text = e.target.value;
        
        // If User Press Enter WithOut Add Any Task
        if(!text){
            showNotification('Task Can Not Be Empty')
            return;
        }
        
        const task = {
            text,                   //means text : text
            id : Date.now().toString(),         // Best Way to Give ID
            done : false
        }
        console.log(task.text);
        e.target.value = '';
        addTask(task);
    }
})

