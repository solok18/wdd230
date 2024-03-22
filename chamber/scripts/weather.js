// const currentTemp = document.querySelector("#current-temp");
// const weatherIcon = document.querySelector("#weather-icon");
// const captionDesc = document.querySelector("figcaption");

const weather = document.querySelector('#weather-card');



const url = "https://api.openweathermap.org/data/2.5/forecast?lat=38.58&lon=-121.48&units=imperial&appid=0c57d46afcca46d45f1328b8d715c9e5"

async function apiFetch() {
    try{
        const response =await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data.list);
            // displayResults(data);
            displayForcast(data.list.slice(0,3));

        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

// function displayResults(data) {
//     currentTemp.innerHTML = `${data.list[0].main.temp}&deg;F`;
//     const iconsrc = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
   
//     let desc = data.list[0].weather[0].description;
//     weatherIcon.setAttribute('src', iconsrc);
//     weatherIcon.setAttribute('alt', desc);
//     captionDesc.textContent = `${desc}`;

// }
 const displayForcast = (list) => {
    list.forEach((l) => {
        let card = document.createElement('section');
        let currentTemp = document.createElement('span');
        let weatherIcon = document.createElement('img');
        let captionDesc = document.createElement('figcaption');
        let windspeed = document.createElement('p');
        let windChill = document.createElement('span');
        let desc = l.weather[0].description

        const icon = `https://openweathermap.org/img/w/${l.weather[0].icon}.png`;

        currentTemp.textContent =`${l.main.temp} Sacrament0, CA`;
        captionDesc.textContent = `${l.weather[0].description}`;
        windspeed.textContent = `wind speed: ${l.wind.speed}`
        
        weatherIcon.setAttribute('src', icon);
        weatherIcon.setAttribute('alt', desc);

        var temperature = l.main.temp;
        var windSpeedVal = l.wind.speed;
        var windChillval;

        if (temperature >= 50 || windSpeedVal <=3 ) {
            windChillval = "N/A";
        } else {
            windChillval = (35.74 + (0.6215 * temperature))- (35.75 * Math.pow(windSpeedVal,0.16)) + (0.4275 * temperature * Math.pow(windSpeedVal,0.16));
            windChillval = Math.round(windChillval);
        }
        windChill.textContent = `Wind Chill: ${windChillval}`;

        card.appendChild(currentTemp);
        card.appendChild(weatherIcon);
        card.appendChild(captionDesc);
        card.appendChild(windspeed);
        card.appendChild(windChill);


        weather.appendChild(card);
        
    });
 }





