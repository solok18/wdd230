const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#weather-type");
const maxweather = document.querySelector("#max-temp");
const humidity = document.querySelector("#humidity");
const nextDay = document.querySelector("#next-day")

// const url = "https://api.openweathermap.org/data/2.5/weather?lat=20.48&lon=-86.88&units=imperial&appid=0c57d46afcca46d45f1328b8d715c9e5"
const url = "https://api.openweathermap.org/data/2.5/forecast?lat=20.48&lon=-86.88&units=imperial&appid=0c57d46afcca46d45f1328b8d715c9e5"

async function apiFetch() {
    try{
        const response =await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayResults(data);

        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.list[0].main.temp}&deg;F`;
    maxweather.innerHTML = `${data.list[0].main.temp_max}&deg;F`;
    humidity.innerHTML = `${data.list[0].main.humidity}&deg;F`;
    const index = data.list.findIndex(item => {
        const time = item.dt_txt;
        return time.includes("15:00:00");
    });
    nextDay.innerHTML = `${data.list[1].main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
    let desc = data.list[0].weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}