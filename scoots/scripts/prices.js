const rHalfDay = document.querySelector(".r-half-day");
const rFullDay = document.querySelector(".r-full-day");
const wHalfDay = document.querySelector(".w-half-day");
const wFullDay = document.querySelector(".w-full-day");

const rHalfDay1 = document.querySelector(".r-half-day1");
const rFullDay1 = document.querySelector(".r-full-day1");
const wHalfDay1 = document.querySelector(".w-half-day1");
const wFullDay1 = document.querySelector(".w-full-day1");

const rHalfDay2 = document.querySelector(".r-half-day2");
const rFullDay2 = document.querySelector(".r-full-day2");
const wHalfDay2 = document.querySelector(".w-half-day2");
const wFullDay2 = document.querySelector(".w-full-day2");

const rHalfDay3 = document.querySelector(".r-half-day3");
const rFullDay3 = document.querySelector(".r-full-day3");
const wHalfDay3 = document.querySelector(".w-half-day3");
const wFullDay3 = document.querySelector(".w-full-day3");

const rHalfDay4 = document.querySelector(".r-half-day4");
const rFullDay4 = document.querySelector(".r-full-day4");
const wHalfDay4 = document.querySelector(".w-half-day4");
const wFullDay4 = document.querySelector(".w-full-day4");

const rHalfDay5 = document.querySelector(".r-half-day5");
const rFullDay5 = document.querySelector(".r-full-day5");
const wHalfDay5 = document.querySelector(".w-half-day5");
const wFullDay5 = document.querySelector(".w-full-day5");

const rHalfDay6 = document.querySelector(".r-half-day6");
const rFullDay6 = document.querySelector(".r-full-day6");
const wHalfDay6 = document.querySelector(".w-half-day6");
const wFullDay6 = document.querySelector(".w-full-day6");

const urlprices = "https://raw.githubusercontent.com/solok18/wdd230/main/scoots/data/rentals.json"

async function apiFetch() {
    try{
        const response =await fetch(urlprices);
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
    rHalfDay.innerHTML = `${data.rentals[0].reservation[0].halfDay}`;
    rFullDay.innerHTML = `${data.rentals[0].reservation[0].fullDay}`;
    wHalfDay.innerHTML = `${data.rentals[0].reservation[0].halfDay}`;
    wFullDay.innerHTML = `${data.rentals[0].reservation[0].fullDay}`;
    
    rHalfDay1.innerHTML = `${data.rentals[1].reservation[0].halfDay}`;
    rFullDay1.innerHTML = `${data.rentals[1].reservation[0].fullDay}`;
    wHalfDay1.innerHTML = `${data.rentals[1].reservation[0].halfDay}`;
    wFullDay1.innerHTML = `${data.rentals[1].reservation[0].fullDay}`;

    rHalfDay2.innerHTML = `${data.rentals[2].reservation[0].halfDay}`;
    rFullDay2.innerHTML = `${data.rentals[2].reservation[0].fullDay}`;
    wHalfDay2.innerHTML = `${data.rentals[2].reservation[0].halfDay}`;
    wFullDay2.innerHTML = `${data.rentals[2].reservation[0].fullDay}`;

    rHalfDay3.innerHTML = `${data.rentals[3].reservation[0].halfDay}`;
    rFullDay3.innerHTML = `${data.rentals[3].reservation[0].fullDay}`;
    wHalfDay3.innerHTML = `${data.rentals[3].reservation[0].halfDay}`;
    wFullDay3.innerHTML = `${data.rentals[3].reservation[0].fullDay}`;

    rHalfDay4.innerHTML = `${data.rentals[4].reservation[0].halfDay}`;
    rFullDay4.innerHTML = `${data.rentals[4].reservation[0].fullDay}`;
    wHalfDay4.innerHTML = `${data.rentals[4].reservation[0].halfDay}`;
    wFullDay4.innerHTML = `${data.rentals[4].reservation[0].fullDay}`;

    rHalfDay5.innerHTML = `${data.rentals[5].reservation[0].halfDay}`;
    rFullDay5.innerHTML = `${data.rentals[5].reservation[0].fullDay}`;
    wHalfDay5.innerHTML = `${data.rentals[5].reservation[0].halfDay}`;
    wFullDay5.innerHTML = `${data.rentals[5].reservation[0].fullDay}`;
    // maxweather.innerHTML = `${data.list[0].main.temp_max}&deg;F`;
    // humidity.innerHTML = `${data.list[0].main.humidity}&deg;F`;
    // const index = data.list.findIndex(item => {
    //     const time = item.dt_txt;
    //     return time.includes("15:00:00");
    // });
    // nextDay.innerHTML = `${data.list[1].main.temp}&deg;F`;
    // const iconsrc = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
    // let desc = data.list[0].weather[0].description;
    // weatherIcon.setAttribute('src', iconsrc);
    // weatherIcon.setAttribute('alt', desc);
    // captionDesc.textContent = `${desc}`;
}

