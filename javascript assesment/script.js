// Selecting the input field, button, and the to-do list
let inputField = document.getElementById('todoInput');
let  addButton = document.getElementById('addButton');
let todoList = document.getElementById('todoList');

// Adding an event listener to the button to handle click events
addButton.addEventListener('click', () => {

    // enter the inputvalue
    let newTodoText = inputField.value.trim();
    
    // Check if input is not empty
    if (newTodoText !== "") {
        // Create a new list item element
        let newTodoItem = document.createElement('li');
        
        // Set the text of the list item to the input value
        newTodoItem.textContent = newTodoText;
        
        // Append the new list item to the to-do list
        todoList.appendChild(newTodoItem);
        
        // Clear the input field after adding the item
        inputField.value = '';
    } else {
        alert('Please enter a to-do item.');
    }
});
