// Select the input box and list container
const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    // Check if the input is empty
    if (inputBox.value === "") {
        alert("You must write something!");
    } else {
        // Create a new list item
        let li = document.createElement('li');
        li.textContent = inputBox.value; // Set the task text

        // Create a span for the close button
        let span = document.createElement('span');
        span.innerHTML = '\u00D7'; // Unicode for "×" symbol
        span.className = 'close'; // Optional: Add a class for styling

        // Add event listener to remove the task
        span.addEventListener('click', () => {
            li.remove(); // Remove the task when clicked
        });

        // Append the close button to the list item
        li.appendChild(span);

        // Append the list item to the container
        
        listContainer.appendChild(li);
    }

    // Clear the input box
    inputBox.value = '';
}
