const apiKey = "3e6e4e68009ffae46ddebf2a236b1024";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector('#searchBox input');
const searchbtn = document.querySelector('#searchBox button');
const weathericon = document.querySelector('#weatherIcon');


async function checkWeather(city){
       const response = await fetch(apiURL + city + `&appid=${apiKey}`);
       const data = await response.json();
       console.log(data);
        
       let temperature = Math.round(data.main.temp);
       document.getElementById('cityName').innerHTML = data.name;
       document.getElementById('temp').innerHTML = temperature + '°C';

       if(data.weather[0].main == 'Clouds'){
         weathericon.src = 'images/clouds.png';
       }
       else if(data.weather[0].main == 'Clear'){
        weathericon.src = 'images/clear.png';
       }
       else if(data.weather[0].main == 'Rain'){
        weathericon.src = 'images/rain.png';
       }
       else if(data.weather[0].main == 'Drizzle'){
        weathericon.src = 'images/drizzle.png';
       }
       else if(data.weather[0].main == 'Mist'){
        weathericon.src = 'images/mist.png';
       }
    }
searchbtn.addEventListener('click', ()=>{
    checkWeather(searchbox.value);
});

