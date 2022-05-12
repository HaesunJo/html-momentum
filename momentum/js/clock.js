const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hrs = String(date.getHours()).padStart(2, "0");
    const mins = String(date.getMinutes()).padStart(2, "0");
    const sec = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hrs}:${mins}:${sec}`;
}

getClock();
setInterval(getClock, 1000); // 5초마다 반복 호출
// setTimeout(sayHello, 5000); // 5초뒤에 호출함, 반복 아님