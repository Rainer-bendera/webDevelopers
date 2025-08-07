const apiKey = "532b98b2457ee04a6a57afb190028b9a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?unit=metric&q=arusha";

checkWeather();
async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
}
