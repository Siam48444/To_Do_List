const add_btn = document.querySelector(".add_btn");
const input_box = document.querySelector(".input_box");
const task_container = document.querySelector(".task_container");



// Add tasks to the task container
add_btn.addEventListener("click", add_task);
input_box.addEventListener("keydown", function (e) {
    e.key === "Enter" && add_task();
});



// Create and append task
function add_task() {
    const input_box = document.querySelector(".input_box");

    if (input_box.value.trim() === "") {
        show_input_error(input_box, "Please enter a task first!");
        return;
    }
    else {
        var li = document.createElement("li");
        li.textContent = input_box.value;
        document.querySelector(".task_container").appendChild(li);  
        
        // Create and append a cancel button
        var span = document.createElement("span");
        span.textContent = "✖";
        li.appendChild(span);
        
        // Reset the input box
        input_box.value = "";
        input_box.setAttribute("placeholder", "Add your task...");
    }

    save_data();
}



// Handle an empty input error
function show_input_error(input_box, error_message) {
    // Add the error class to the input box
    input_box.classList.add("input_error");
    input_box.value = "";
    input_box.setAttribute("placeholder", error_message);

    // Remove the error class after a delay
    setTimeout(() => {
        input_box.classList.remove("input_error");
    }, 300);
}



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



function save_data() {
    localStorage.setItem("data", task_container.innerHTML);
}