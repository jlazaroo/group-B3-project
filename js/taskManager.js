console.log('Group Project Task 5')

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
                    <div class="row px-3">
                        <a class="col-auto btn btn-success rounded-pill doneButton">Status</a> 
                        <div class="col"></div>
                        <a class="col-auto btn btn-danger rounded-pill">Delete</a>
                    </div>
                </div>
            </div>
        </li>
    `
    return html
}
class TaskManager {
    constructor(currentId = 0) {
        this.currentId = currentId;
        this.tasks = [];
    }
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
        // console.log(taskList)
        // console.log(tasksHtml)
    }
}
