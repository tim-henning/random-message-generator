// Generates a random number to iterate choose a random number in the array
function generateRandomNumber(num) {
    return Math.floor(Math.random() * num);
}

// The object containing our arrays

const quoteStorage =  {
    name: ["Barrack Obama", "Homer Simpson", "Malala Yousafzai", "Patrick Star", "Elon Musk", "Bugs Bunny", "Emma Watson", "Rick Sanchez", "Trevor Noah", "Spngebob SquarePants"],
    quote: ["Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek.", 
            "I’m not lazy, just very relaxed.",
            "One child, one teacher, one book, one pen can change the world.",
            "I can't see my forehead, but I know it's brilliant.",
            "When something is important enough, you do it even if the odds are not in your favor.",
            "What's up, Doc? Carrot juice counts as a smoothie, right?",
            "If not me, who? If not now, when?",
            "The best time to wear a striped sweater is all the time.",
            "Comfort can be dangerous. Comfort provides a floor but also a ceiling." ],
    year: ["2008", "2012", "2020", "2014", "2015", "1989", "1999", "1940", "2013", "1999"]
}
//Randomly select one item from each array
let randomQuoteIndex = generateRandomNumber(quoteStorage.quote.length);
let randomNameIndex = generateRandomNumber(quoteStorage.name.length);
let randomYearIndex = generateRandomNumber(quoteStorage.year.length);
//Store the randomly selected item in a new variable
let quote = quoteStorage.quote[randomQuoteIndex];
let name = quoteStorage.name[randomNameIndex];
let year = quoteStorage.year[randomYearIndex];
//format the variable to the desired format
function formatQuote(quote, name, year) {
    console.log(quote);
    console.log(year + ", " + name);
}
//Call the function
formatQuote(quote, name, year);