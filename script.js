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

//Create a new array to store the output
/*let quoteArr = [];

//Iterate over the object
for(let item in quoteStorage) {
    let itemIdx = generateRandomNumber(quoteStorage[item].length)

    //Check for different cases
    switch(item) {
        case 'name':
            quoteArr.push(quoteStorage[item][itemIdx])
            break
        case 'quote':
            quoteArr.push(quoteStorage[item][itemIdx])
            break
        case 'year':
            quoteArr.push(quoteStorage[item][itemIdx])
            break
        default:
            quoteArr.push("We are all out of inspirational quotes today, sorry.")
    }
}

//Format the quote in the desired format
function formatQuote(_quoteItem) {
    let formatted = quoteArr.join('\n');
    console.log(formatted);
}

formatQuote(quoteArr);*/

let randomQuoteIndex = generateRandomNumber(quoteStorage.quote.length);
let randomNameIndex = generateRandomNumber(quoteStorage.name.length);
let randomYearIndex = generateRandomNumber(quoteStorage.year.length);

let quote = quoteStorage.quote[randomQuoteIndex];
let name = quoteStorage.name[randomNameIndex];
let year = quoteStorage.year[randomYearIndex];

function formatQuote(quote, name, year) {
    console.log(quote);
    console.log(year + ", " + name);
}

formatQuote(quote, name, year);