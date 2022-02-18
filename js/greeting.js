/*
const a = 5;        // const : 상수
let b = 2;          // let : 변수
let c;              // c는 undefined
// var은 규칙x. 옛날에 let 대신 쓰던 자료형.
const daysOfWeek = ['mon','tue','wed','thu','fri','sat','sund'];
daysOfWeek.push("sun")

console.log("Hello World!")
console.log(a+b);
console.log(c);
console.log(daysOfWeek);
console.log(daysOfWeek[4]);

const player = {
    name: 'nico',
    points: 10,
    fat: true,
};

console.log(player);
console.log(player.name); // === player['name']

player.fat = false;         // const이지만 player를 바꾸는 것이 아니라 안의 것을 바꾸는 것이기 때문에 ㄱㅊ
player.lastName = "potato";         // 추가도 가능


function plus(a,b) {
    a+b;
}

const player = {
    name: 'nico',
    sayHello: function() {
        return "hello "+ player.name;
    },
    points: 10,
    fat: true,
};

console.log(player.sayHello());


// css 적용 불가, js 멈추게 하고 팝업 못띄우는 곳도 있어 요즘에는 prompt 사용 x
//const age = prompt("How old are you?");
//console.log(typeof age);
//parseInt(age);

const age = parseInt(prompt("How old are you?"));

// NaN === Not a Number 숫자가 아닌 것
if (isNaN(age)) {
    console.log("Please write a number");
} else if (age < 18) {
    console.log("You are too young.");
} else if(age >= 18 && age <= 50) {     // &&, ||
    console.log("You can drink");
} else {
    console.log("You can drink");
}


// HTML 정보가 object(dictionary) 형태로 JS에 제공됨 => document
console.log(document.title);
console.log(document.body);



// const title = document.getElementsByClassName("hello");
// console.dir(title);
// title[0].innerText = "Got you!";

// querySelector는 css 방식으로 찾을 수 있음. 여러개면 첫 번째 것만.
// 모두 가져오고 싶다면 뒤에 All 붙이기.
const h1 = document.querySelector(".hello h1");

function handleTitleClick() {
    // js가 html을 변경, css가 html에 스타일 적용.
    // 원래의 className을 보호하기 위해 className을 바꾸지 않고
    // classList와 메소드 사용.
    h1.classList.toggle("clicked");     // css의 설정.
    // toggle은 classList에 클래스가 있는지 확인하여 제거/추가
}

h1.onclick = handleTitleClick;           // title.addEventListener("click",handleTitleClick);
// h1.addEventListener("mouseenter", handleMouseEnter);
// addEventListener로 추가한 이벤트는 removeEventListener로 제거할 수 있음

// document처럼 window도 기본적으로 제공.
// window.addEventListener("resize", handleWindowResize);
*/




const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector(".greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function LoginSubmit(event) {
    event.preventDefault();      // submit하면 새로고침하는 것(html의 동작)을 막음.
    //const username = loginInput.value;
    //console.log(username);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",LoginSubmit);
} else {
    paintGreetings(savedUsername);
}