// Write your code here!
// Step 1: Remove the <main> element with the id 'main'
const mainElement = document.querySelector('main#main');
if (mainElement) {
  mainElement.remove();
}

// Step 2: Create a new <h1> element
const newHeader = document.createElement('h1');

// Step 3: Assign the new <h1> element to a variable named 'newHeader'
// This step is implicitly done above when we created the newHeader variable

// Step 4: Set the id of the new <h1> element to 'victory'
newHeader.id = 'victory';

// Step 5: Set the inner HTML of the new <h1> element to "YOUR-NAME is the champion"
newHeader.innerHTML = 'YOUR-NAME is the champion';

// Append the newHeader to the body or another element in the DOM if needed
document.body.appendChild(newHeader);
