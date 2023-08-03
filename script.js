const tasks = [];

const add = document.getElementById('add');
const taskCount = document.getElementById('tasks-counter');
const taskList = document.getElementById('list');

// Check We Fetch Elements Successfully or Not
/*
console.log(taskList)
console.log(taskCount)
console.log(add);
*/


// Functions

// Adding a Taks
function addTask(task){}

// Delete a Task
function deleteTask(taskId){}

// Mark Task as Complete
function checkTask(){}

// Refresh Page Every Time After Adding or Delete Task
function renderList(){}

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