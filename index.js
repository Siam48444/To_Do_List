const input_box = document.querySelector(".input_box");
const add_btn = document.querySelector(".add_btn");
const task_container = document.querySelector(".task_container");





// Add tasks to the task container
add_btn.addEventListener("click", function () {
    // Handle an empty input
    if (input_box.value.trim() === "") {
        // Add the error class to the input box
        input_box.classList.add("input_error");
        input_box.setAttribute("placeholder", "Please enter a task first!");

        // Remove the error class from the input box
        setTimeout(() => {
            input_box.classList.remove("input_error");
        }, 500);
        return;
    }

    else {
        // Create and append task
        var li = document.createElement("li");
        li.textContent = input_box.value;
        task_container.appendChild(li);  
        
        // Create and append a cancel button
        var span = document.createElement("span");
        span.textContent = "✖";
        li.appendChild(span);
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
