 // Function to get a random quote
 function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

// Function to update the quote and countdown timer on the webpage
function updateQuote() {
    const quoteText = document.getElementById("quote-text");
    const quoteAuthor = document.getElementById("quote-author");
    const countdownTime = document.getElementById("countdown-time");
    const storedQuote = localStorage.getItem("quote");
    const storedAuthor = localStorage.getItem("author");
    const storedExpiration = localStorage.getItem("expiration");

    if (!storedQuote || !storedAuthor || !storedExpiration || Date.now() > Number(storedExpiration)) {
        // If there's no stored quote or it has expired, generate a new one
        const newQuoteObject = getRandomQuote();
        const newQuote = newQuoteObject.engText;
        const newAuthor = newQuoteObject.author;
        const expirationTime = new Date();
        expirationTime.setDate(expirationTime.getDate() + 1); // 24 hours from now

        // Store the new quote, author, and expiration time in localStorage
        localStorage.setItem("quote", newQuote);
        localStorage.setItem("author", newAuthor);
        localStorage.setItem("expiration", expirationTime.getTime());

        quoteText.textContent = newQuote;
        quoteAuthor.textContent = ` - ${newAuthor}`;
    } else {
        // If a valid quote and author are stored in localStorage, display them
        quoteText.textContent = storedQuote;
        quoteAuthor.textContent = ` - ${storedAuthor}`;
    }

    // Update the countdown timer
    updateCountdown();
}

// Function to update the countdown timer based on GMT+1
function updateCountdown() {
    const countdownTime = document.getElementById("countdown-time");
    const now = new Date();
    const gmtPlus1Time = new Date(now.getTime() + (60 * 60 * 1000)); // GMT+1

    // Set the reset time to midnight GMT+1
    gmtPlus1Time.setHours(24, 0, 0, 0);

    const timeRemaining = gmtPlus1Time - now;
    const hours = Math.floor(timeRemaining / 3600000);
    const minutes = Math.floor((timeRemaining % 3600000) / 60000);
    const seconds = Math.floor((timeRemaining % 60000) / 1000);

    countdownTime.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}!`;
}

// Initial update
updateQuote();
updateCountdown();

// Update the quote and countdown timer every second
setInterval(() => {
    updateQuote();
    updateCountdown();
}, 1000);