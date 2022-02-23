const quotes = [
    {
        quote:"시간을 지배할 줄 아는 사람은 인생을 지배할 줄 아는 사람이다.",
        author: "Christpoh Eschenbach",
    },
    {
        quote:"그대의 하루 하루를 그대의 마지막 날이라고 생각하라.",
        author: "Quintus Horatius Flaccus",
    },
    {
        quote:"삼십 분이란 티끌과 같은 시간이라고 말하지 말고, 그 동안이라도 티끌과 같은 일을 처리하는 것이 현명한 방법이다.",
        author: "Johann Wolfgang von Goethe",
    },
    {
        quote:"오늘의 식사는 내일로 미루지 않으면서 오늘 할 일은 내일로 미루는 사람이 많다.",
        author: "Carl Hilty",
    },
    {
        quote:"오늘이라는 날은 두 번 다시 오지 않는다는 것을 잊지 말라.",
        author: "Dante Alighieri",
    },
    {
        quote:"절대 어제를 후회하지 마라. 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다.",
        author: "Lafayette Ronald Hubbard",
    },
    {
        quote:"좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다.",
        author: "Dante Alighieri",
    },
    {
        quote:"성공의 비결은 단 한 가지, 잘할 수 있는 일에 광적으로 집중하는 것이다.",
        author: "Tom Monaghan",
    },
    {
        quote:"꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다.",
        author: "Johann Wolfgang von Goethe",
    },
    {
        quote:"해야 할 것을 하라. 모든 것은 타인의 행복을 위해서, 동시에 특히 나의 행복을 위해서이다.",
        author: "Lev Nicolayevich Tolstoy",
    },
];

const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");

// Math.random() * 10      // Math.random()은 0~1 사이의 실수를 랜덤으로 반환. 10을 곱해서 0부터 9까지의 숫자가 랜덤으로 나오도록.
// Math.floor(Math.random() * 10);     // floor은 버림, ceil은 올림, round는 반올림
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;