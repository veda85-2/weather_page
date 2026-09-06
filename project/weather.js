const input = document.querySelector("input");
const tempBox = document.querySelector("#temp-box");
const cityBox = document.querySelector("#city-box");
const cards = document.querySelectorAll(".cards");

const dateBox = document.querySelector("#date");
const conditionBox = document.querySelector("#condition");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humid");
const feelslike = document.querySelector("#Feels");


input.addEventListener('keydown',(e)=>{
    if(e.key == 'Enter'){
       weather(input.value);
       forecast(input.value);   
    
    }
})


async function weather(city) {

    const token = localStorage.getItem("token");

    const response = await fetch(
        `https://task-5-weather-website.vercel.app/api/weather/current?city=${encodeURIComponent(city)}`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
    const data = await response.json();
// console.log(data);
// console.log(token);
// console.log(data.data);


cityBox.textContent = data.data.location.name;
tempBox.textContent = data.data.current.temp_c;
dateBox.textContent = data.data.location.localtime;
conditionBox.textContent = data.data.current.condition.text;
wind.textContent = data.data.current.wind_kph + "Km/h";
humidity.textContent = data.data.current.humidity + "%";
feelslike.textContent = data.data.current.feelslike_c + "°C";

}



async function forecast(city) {
const token = localStorage.getItem("token");
const response = await fetch(`https://task-5-weather-website.vercel.app/api/weather/forecast?city=${encodeURIComponent(city)}&days=7`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

const data = await response.json();
console.log(data.data.forecast.forecastday);
const forecastCards = document.querySelectorAll(".forecast-card");
data.data.forecast.forecastday.forEach((day, index) => {

const card = forecastCards[index];

    card.querySelector("p").textContent = day.date;
    card.querySelector("span").textContent = day.day.condition.text;
    card.querySelector("h3").textContent = day.day.maxtemp_c + "°C";
    card.querySelector("small").textContent = day.day.mintemp_c + "°C";

});

}


window.addEventListener("load", () => {

    console.log("Page loaded");

    if (!navigator.geolocation) {
        console.log("Geolocation is not supported");
        return;
    }

    navigator.geolocation.getCurrentPosition(
        (position) => {

            console.log("Location permission granted");

            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            console.log("Latitude:", lat);
            console.log("Longitude:", lon);

            weather(`${lat},${lon}`);
            forecast(`${lat},${lon}`);
        },

        (error) => {

            console.log("Location error:", error.message);

            weather("Delhi");
            forecast("Delhi");
        }
    );

});

const logout = document.querySelector('.logout-btn');
logout.addEventListener('click',()=>{
    window.location.href = 'index.html'
})


const round = document.querySelector('.cursor');
document.addEventListener('mousemove',(e)=>{
 round.style.transform =
        `translate(${e.clientX}px, ${e.clientY}px)`;
  
})