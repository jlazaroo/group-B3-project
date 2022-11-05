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
    event.preventDefault();
    // checks if any field is not filled or checked and toggles the 'hide' class for the alert
    if(assignee.selectedIndex < 1 || taskName.value == '' || dueDate.value == '' || taskDescription.value == ''){
        // only toggles if the 'hide' class is there
        if(submitAlert.classList.contains('hide')){
            submitAlert.classList.toggle('hide');
        }
    //only toggles if the 'hide' class is not there
    } else if(submitAlert.classList.contains('hide') == false){
        submitAlert.classList.toggle('hide');
    }
}