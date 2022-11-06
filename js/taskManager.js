console.log('Group Project Task 5')

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
  }