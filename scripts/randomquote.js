// Function to display a random quote when the button is clicked
function displayRandomQuote() {
    const randomQuote = getRandomQuote();
    
    // Get references to HTML elements
    const quoteTextElement = document.getElementById("second-quote-text");
    const authorElement = document.getElementById("second-author");
    
    // Update the content of the paragraph with the English text and author
    quoteTextElement.textContent = randomQuote.engText;
    authorElement.textContent = randomQuote.author;
}

// Add a click event listener to the "Generate Quote" button
const generateButton = document.getElementById("generate-button");
generateButton.addEventListener("click", displayRandomQuote);