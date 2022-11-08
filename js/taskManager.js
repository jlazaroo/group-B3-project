console.log('Group Project Task 5')

const createTaskHtml = (name, description,assignedTo,dueDate,status) => {
    const html = ` 
        <li class="list-group-item" style="width: 18rem;">
            <div class="card bg-light">
                <h5 class="card-header">${name}</h5>
                <div class="card-body">
                    <p class="card-text">${description}</p>
                    <p class="card-text">${assignedTo}</p>
                    <p class="card-text">${dueDate}</p>
                    <a href="" class="btn btn-danger">${status}</a>
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
            const taskHtml = createTaskHtml(task.name, task.description, task.assignedTo, formattedDate, task.status)
            tasksHtmlList.push(taskHtml)
        }) 
        const tasksHtml = tasksHtmlList.join('\n')
        const taskList = document.querySelector("#task-list")
        taskList.innerHTML = tasksHtml
        console.log(taskList)
        console.log(tasksHtml)
    }
}
