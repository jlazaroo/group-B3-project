const taskName = document.querySelector('#taskName');
const dueDate = document.querySelector('#dueDate');
const taskDescription = document.querySelector('#taskDescription');
const descriptionCount = document.querySelector('#descriptionCount')
const assignee = document.querySelector('#assignee');
const submit = document.querySelector('#submit');
const submitAlert = document.querySelector('#submitAlert');
const taskList = document.querySelector('#taskList');

// Keeps track of characters typed and displays the current amount
let taskDescriptionCount = 0;
taskDescription.addEventListener("input", function(){
    descriptionCount.textContent = taskDescription.value.length;
});

// Makes new date object
let currentDate = new Date();
// Gets current year, month and day
let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1;
let day = currentDate.getDate();
// Prepends numbers 0-9 with a leading zero so they are two digits
if(day < 10 ){
    day = '0' + day.toString();
}
// Sets a 'minimum' date so an earlier date (than today) cannot be picked
dueDate.setAttribute('min', `${year}-${month}-${day}`);

// creates new task array
const taskArray = new TaskManager();

// Assigns the mouse click on the submit button to the submitClick Function
submit.onclick = submitClick;
// Function is triggered by the submit button mouse click
function submitClick(event) {
    // checks if any field is not filled or checked and toggles the 'hide' class for the alert
    if(assignee.selectedIndex < 1 || taskName.value == '' || dueDate.value == '' || taskDescription.value == ''){
        // event.preventDefault();
        // only toggles if the 'hide' class is there
        if(submitAlert.classList.contains('hide')){
            submitAlert.classList.toggle('hide');
        }
    //only toggles if the 'hide' class is not there
    } else {
        event.preventDefault();
        // only toggles if the 'hide' class is NOT there
        if(submitAlert.classList.contains('hide') == false){
            submitAlert.classList.toggle('hide');
        }
        // Calls addTask() and uses values from the form
        taskArray.addTask(taskName.value, taskDescription.value, assignee.options[assignee.selectedIndex].text, dueDate.value);
        taskArray.render();
        // Initializes all inputs in form
        assignee.selectedIndex = 0;
        taskName.value = '';
        dueDate.value = '';
        taskDescription.value = '';
        descriptionCount.textContent = 0;
    }
}


// adds new tasks for test purposes
taskArray.addTask('Task 1', `For this task, we'll write the code to update a task's status to "DONE" once a "Mark As Done" button on the task is clicked.
Note, for this task, we are not using the "Update Task" form. This is part of the re-structuring of the project. This ste`, 'John', '2022-11-10');
taskArray.addTask('Task 2', 'Description of task 2', 'Megan', '2022-11-12');
taskArray.addTask('Task 3', 'Description of task 3', 'Corbin', '2022-11-14');
taskArray.addTask('Task 4', 'Description of task 4', 'Zinash', '2022-11-13');
taskArray.addTask('Task 5', 'Description of task 5', 'Wenbo', '2022-11-15');
taskArray.render();


taskList.addEventListener('click', (event) => { // "event" here is the event parameter
    let status = document.querySelectorAll('.status');

    if(event.target.classList.contains('doneButton')){

        let id = event.target.parentElement.parentElement.parentElement.parentElement.id;
        
        if(taskArray.tasks[id].status === 'To Do'){
            taskArray.tasks[id].status = 'In Progress';
            taskArray.tasks[id].statusClass = ('btn-primary');
            status[id].classList.remove('btn-danger');
            status[id].classList.add('btn-primary');
            status[id].innerHTML = 'In Progress';
            
        }else if(taskArray.tasks[id].status === 'In Progress'){
                taskArray.tasks[id].status = 'Done';
                taskArray.tasks[id].statusClass = ('btn-success');
                status[id].classList.remove('btn-primary');
                status[id].classList.add('btn-success');
                status[id].innerHTML = 'Done';
        }else{
            taskArray.tasks[id].status = 'To Do';
            taskArray.tasks[id].statusClass = ('btn-danger');
            status[id].classList.remove('btn-success');
            status[id].classList.add('btn-danger');
            status[id].innerHTML = 'To Do';
        }
    }

});

