const taskName = document.querySelector('#taskName');
const dueDate = document.querySelector('#dueDate');
const taskDescription = document.querySelector('#taskDescription');
const assignee = document.querySelector('#assignee');
const submit = document.querySelector('#submit');
const submitAlert = document.querySelector('#submitAlert');

// Assigns the mouse click on the submit button to the submitClick Function
submit.onclick = submitClick;

// Function is triggered by the submit button mouse click
function submitClick(event) {
    // this prevents the page reloading because of the form submission

    // checks if any field is not filled or checked and toggles the 'hide' class for the alert
    if(assignee.selectedIndex < 1 || taskName.value == '' || dueDate.value == '' || taskDescription.value == ''){
        // only toggles if the 'hide' class is there
        if(submitAlert.classList.contains('hide')){
            submitAlert.classList.toggle('hide');
        }
    //only toggles if the 'hide' class is not there
    } else if(submitAlert.classList.contains('hide') == false){
        submitAlert.classList.toggle('hide');
        event.preventDefault();
    }
}

// creates new task array
const taskArray = new TaskManager();
// adds new tasks to task array just created
taskArray.addTask('Task 1', 'Description of task 1', 'John', '2022-11-10');
taskArray.addTask('Task 2', 'Description of task 2', 'Megan', '2022-11-12');
taskArray.addTask('Task 3', 'Description of task 3', 'Corbin', '2022-11-14');
taskArray.addTask('Task 4', 'Description of task 4', 'Zinash', '2022-11-13');
taskArray.addTask('Task 5', 'Description of task 5', 'Wenbo', '2022-11-15');

