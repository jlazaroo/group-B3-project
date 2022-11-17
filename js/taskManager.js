
// Creates html to be inserted into the webpage ul
const createTaskHtml = (id, name, description, assignedTo, dueDate, status, statusClass) => {
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
                    <div class="row p-3 buttonRow">
                        <a class="col-auto btn ${statusClass} rounded-pill statusButton">Status</a> 
                        <div class="col"></div>
                        <a class="col-auto btn btn-danger rounded-pill deleteButton">Delete</a>
                    </div>
                </div>
            </div>
        </li>
    `
    return html
}

// Class that creates and updates an array of tasks and uses createTaskHtml to insert lists into the ul
class TaskManager {
    constructor(currentId = 0) {
        this.currentId = currentId;
        this.tasks = [];
    }
    // method that adds new tasks in the this.tasks array
    addTask(name, description, assignedTo, dueDate) {
        
        const task = {
            id: this.currentId,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: 'To Do',
            statusClass: 'btn-danger'
        }
        this.tasks.push(task);
        this.currentId++;
    }
    // method that inserts html lists in the ul
    render(){
        const tasksHtmlList = []
        this.tasks.forEach(task => {
            const date = new Date(task.dueDate)
            const formattedDate = date.toDateString()
            const taskHtml = createTaskHtml(task.id, task.name, task.description, task.assignedTo, formattedDate, task.status, task.statusClass)
            tasksHtmlList.push(taskHtml)
        }) 
        const tasksHtml = tasksHtmlList.join('\n')
        const taskList = document.querySelector("#taskList")
        taskList.innerHTML = tasksHtml
    }
    // saves this.tasks and currentId into local storage
    save(){
        let arrayString = JSON.stringify(this.tasks);
        localStorage.setItem('arrayString', arrayString);

        let idString = JSON.stringify(this.currentId);
        localStorage.setItem('id', idString);
    }
    // parses then loads local storage IF storage is not empty
    load(){
        if(localStorage.length > 0){
            let arrayParse = localStorage.getItem('arrayString');
            arrayParse = JSON.parse(arrayParse);
            this.tasks = arrayParse;

            let idParse = localStorage.getItem('id');
            idParse = JSON.parse(idParse);
            this.currentId = idParse;

            this.render();
        }
    }
    // clears local storage for testing purposes
    clear(){
        localStorage.clear();
        location.reload();
    }
}
