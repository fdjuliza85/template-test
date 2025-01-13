const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');




// let apiQuotes = [];

// // Show New Quote
// function newQuote() {
//     // Pick a random quote from apiQuotes array
//     const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
// }

// // Get Quote from API
// async function getQuotes() {
//     const apiUrl = 'https://type.fit/api/quotes';
//     try {
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json();
//         newQuote();
//     }catch (error) {
//         // catch error Here

//     }
// }

// // on load
// getQuotes();

//let localQuotes = [];



// Quote from local database
function newQuote() {
   
        // Pick a random quote from localQuotes array in quotes.js file
        const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
        //check if AUthor field is black in database and replaced it with "Unknown"
        if (!quote.author) {
            authorText.textContent = 'Unknown';
        }else {
            authorText.textContent = quote.author;
        }
        // Check quote length to determine the styling
        if (quote.text.length > 120) {
            quoteText.classList.add('long-quote'); // using classList is a convenient alternative tu accessing an element's list of classes as a pcase-delimited string 
        }else {
            quoteText.classList.remove('long-quote');
        }
        quoteText.textContent = quote.text;
}

//Tweet a quote to a twetter button
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank'); // _blank is to open in a new tab
}

//Event Listener
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

newQuote();        
