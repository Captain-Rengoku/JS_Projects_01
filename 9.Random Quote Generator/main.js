const quotes = [
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The best way to predict the future is to create it.",
    "In the middle of every difficulty lies opportunity.",
    "Do what you can, with what you have, where you are.",
    "It always seems impossible until its done.",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "Dont watch the clock; do what it does. Keep going.",
    "Believe you can and you're halfway there.",
    "Act as if what you do makes a difference. It does.",
    "The only way to achieve the impossible is to believe it is possible."
];

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")



function generateQuote() {
    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear()
    }
    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length)
        // console.log(usedIndexes)
        if  (usedIndexes.has(randomIdx)) continue

        const quote = quotes[randomIdx]
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx)
        break
    }

}
