const input_box = document.querySelector("#input_box");
const add_btn = document.querySelector("#add_btn");
const task_container = document.querySelector("#task_container");


// Add tasks to the task container
add_btn.addEventListener("click", function () {
    // Handle an empty input
    if (input_box.value.trim() === "") {
        input_box.classList.add("input_error");
        return;
    }

    // Append the task to the task container
    else {
        var li = document.createElement("li");
        li.textContent = input_box.value;
        task_container.appendChild(li);  

        // Append a cross to the right of the list
        var span = document.createElement("span");
        span.textContent = "✖";
        li.appendChild(span);
    }
    
    // Reset the input box
    input_box.value = "";
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
