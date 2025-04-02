const item = document.querySelector("#item");
const toDoBox = document.querySelector("#to-do-box");

// Add event listener for Enter key
item.addEventListener("keyup", function (event) {
    if (event.key === "Enter" && this.value.trim() !== "") {
        addToDo(this.value.trim()); // Trim to remove extra spaces
        this.value = ""; // Clear input field
    }
});

// Function to add a new To-Do item
const addToDo = (task) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        ${task}
        <i class="fas fa-times"></i>
    `;

    // Toggle 'done' class on click
    listItem.addEventListener("click", function () {
        this.classList.toggle("done");
    });

    // Remove item on clicking the delete icon
    listItem.querySelector("i").addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent toggling 'done' when clicking delete
        listItem.remove();
    });

    // Append item to the list
    toDoBox.appendChild(listItem);
};
