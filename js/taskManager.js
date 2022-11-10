console.log('Group Project Task 5')

const createTaskHtml = (id, name, description,assignedTo,dueDate,status) => {
    const html = ` 
        <li class="list-group-item col-sm-6 col-lg-4" id="${id}">
            <div class="row status-row">
                <div class="col"></div>
                <div class="col-3 btn btn-danger status">${status}</div>
            </div>
            <div class="card bg-light">
                <h5 class="card-header">${name}</h5>
                <div class="card-body">
                    <p class="card-text">Due: ${dueDate}</p>
                    <p class="card-text">Assigned to: ${assignedTo}</p>
                    <p class="card-text card-description">${description}</p>
                    <a class="btn btn-success rounded-pill doneButton">Done</a>
                    <a class="btn btn-danger rounded-pill">Delete</a>
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
        this.currentId++;
        const task = {
            id: this.currentId,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: 'TODO'
        }
        this.tasks.push(task);
    }
    render(){
        const tasksHtmlList = []
        this.tasks.forEach(task => {
            const date = new Date(task.dueDate)
            const formattedDate = date.toDateString()
            const taskHtml = createTaskHtml(task.id, task.name, task.description, task.assignedTo, formattedDate, task.status)
            tasksHtmlList.push(taskHtml)
        }) 
        const tasksHtml = tasksHtmlList.join('\n')
        const taskList = document.querySelector("#taskList")
        taskList.innerHTML = tasksHtml
        // console.log(taskList)
        // console.log(tasksHtml)
    }
}
