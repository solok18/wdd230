var temperature = 50;
var windSpeed = 3;
var windChill;

if (temperature >= 50 || windSpeed <=3 ) {
    windChill = "N/A";
} else {
    windChill = (35.74 + (0.6215 * temperature))- (35.75 * Math.pow(windSpeed,0.16)) + (0.4275 * temperature * Math.pow(windSpeed,0.16));
    windChill = Math.round(windChill);
}

document.getElementById("windChill").innerHTML = windChill;
