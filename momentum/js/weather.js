const API_KEY = "c6da87942b0e49491f5611e96492f5f9";

function callGeoSuccess(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    // console.log("you live in ", lat, long);

    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
    // console.log(URL);
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
        });
}

function errorCallGeo() {
    alert("Cannot find your location!");
}

navigator.geolocation.getCurrentPosition(callGeoSuccess, errorCallGeo);