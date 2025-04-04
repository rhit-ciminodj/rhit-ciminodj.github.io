// https://www.w3schools.com/howto/howto_js_typewriter.asp here is where I got the idea from

const text = "Dominic Cimino";
const quote = '"I want to look back on my career and be proud of the work, and be proud that I tried everything. —Jon Stewart"';
let i = 0;
let j = 0;
const speed = 400;
const speed2 = 100;

const typewritingElement = document.getElementById("nameTypewriter")
const quoteTypewriter = document.getElementById("quote")

function typing() {
    if (i<text.length) {
        typewritingElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, speed)
    }
}

function typingQuote() {
    if (j<quote.length) {
        quoteTypewriter.innerHTML += quote.charAt(j);
        j++;
        setTimeout(typingQuote, speed2)
    }
}

typing()
typingQuote()