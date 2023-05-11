
// Creates html to be inserted into the webpage ul
const createTaskHtml = (id, name, description, assignedTo, dueDate, status, statusClass, statusIconClass) => {
    const html = ` 
        <li class="list-group-item col-md-6 col-lg-5 col-xxl-4" id="${id}">
            <div class="row status-row">
                <div class="col"></div>
                <div class="px-3 btn ${statusClass} status">${status}</div>
            </div>
            <div class="card bg-light">
                <h5 class="card-header">${name}</h5>
                <div class="card-body">
                    <div class="row">
                        <p class="card-text">Due: ${dueDate}</p>
                        <p class="card-text">Assigned to: ${assignedTo}</p>
                        <p class="card-text card-description">${description}</p>
                    </div>
                    <div class="row px-3 buttonRow">
                        <div class="col-auto p-0 btn statusButton" title="status"><i class="fa-solid fa-bars-progress fa-2xl ${statusIconClass}"></i></div> 
                        <div class="col"></div>
                        <div class="col-auto p-0 btn" title="recycle"><i class="fa-solid fa-recycle fa-2xl col-auto red"></i></div> 
                    </div>
                </div>
            </div>
        </li>
    `
    return html
}

// Class that creates and updates an array of tasks and uses createTaskHtml to insert lists into the ul
class TaskManager {
    constructor() {
        this.tasks = [];
    }
    // method that adds new tasks in the this.tasks array
    addTask(name, description, assignedTo, dueDate) {
        const task = {
            id: this.tasks.length,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: 'To Do',
            statusClass: 'btn-danger',
            statusIconClass: 'red'
        }
        this.tasks.push(task);
    }
    // method that inserts html lists in the ul
    render(){
        const tasksHtmlList = []
        this.tasks.forEach(task => {
            const date = new Date(task.dueDate)
            const formattedDate = date.toDateString()
            const taskHtml = createTaskHtml(task.id, task.name, task.description, task.assignedTo, formattedDate, task.status, task.statusClass, task.statusIconClass)
            tasksHtmlList.push(taskHtml)
        }) 
        const tasksHtml = tasksHtmlList.join('\n')
        const taskList = document.querySelector("#taskList")
        taskList.innerHTML = tasksHtml
    }
    deleteTask(taskId){
        let newTasks = []
        this.tasks.forEach(task => {
            if(task.id !== taskId) {
                newTasks.push(task) 
            }
        })
        for(let i=0; i< newTasks.length; i++){
            newTasks[i].id = i;
            console.log(newTasks[i]);
        }
        this.tasks = newTasks;
    }
    // saves this.tasks into local storage
    save(){
        let arrayString = JSON.stringify(this.tasks);
        localStorage.setItem('arrayString', arrayString);
    }
    // parses then loads local storage IF storage is not empty
    load(){
        if(localStorage.length > 0){
            let arrayParse = localStorage.getItem('arrayString');
            arrayParse = JSON.parse(arrayParse);
            this.tasks = arrayParse;

            this.render();
        }
    }
    // clears local storage for testing purposes
    clear(){
        localStorage.clear();
        location.reload();
    }
}
