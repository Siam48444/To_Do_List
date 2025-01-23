// Selectors
const input_box = document.querySelector(".input_box");
const add_btn = document.querySelector(".add_btn");
const task_container = document.querySelector(".task_container");



// Handle an empty input error
function show_input_error(input_box, error_message) {
    // Add the error class to the input box
    input_box.classList.add("input_error");
    input_box.setAttribute("placeholder", error_message);

    // Remove the error class after a delay
    setTimeout(() => {
        input_box.classList.remove("input_error");
    }, 300);
}



// Create and append task
function append_task(input_value) {
    var li = document.createElement("li");
    li.textContent = input_value;
    document.querySelector(".task_container").appendChild(li);  
    
    // Create and append a cancel button
    var span = document.createElement("span");
    span.textContent = "✖";
    li.appendChild(span);
}



// Add tasks to the task container
add_btn.addEventListener("click", function () {
    // Handle input error
    if (input_box.value.trim() === "") {
        show_input_error(input_box, "Please enter a task first!");
        return;
    }

    // Append task
    else {
        append_task(input_box.value);
    }
    
    // Reset the input box
    input_box.value = "";
    input_box.setAttribute("placeholder", "Add your task...");
});



// Check, uncheck or remove tasks from the task container
task_container.addEventListener("click", function(e) {
    // Check or uncheck tasks
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked_task");
    }

    // Remove tasks
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.classList.add("removed_task");
    }
});
