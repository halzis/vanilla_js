const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = (`${hours}:${minutes}:${seconds}`);
}

// setInterval(sayHello, 5000);    // 5초마다 sayHello가 실행됨.
// setTimeout(sayHello, 5000);         // 5초 후에 sayHello를 한번만 실행.

getClock();
setInterval(getClock, 1000);
// "1".padStart(2,"0");    // 문자열의 길이가 2 미만이라면 2가 되도록 앞에 0을 붙임