const weatherData = {
    tempUnit: 'C',
    windSpeedUnit:'m/s',
    days: [
        { day:'Mon', temp:22, windDirection:'north-east', windSpeed:5 , type:'sunny'},
        { day:'Tue', temp:15, windDirection:'north-west', windSpeed:10 , type:'partially cloudy'},
        { day:'Wed', temp:5, windDirection:'north', windSpeed:15 , type:'rain'},
        { day:'Thu', temp:2, windDirection:'south', windSpeed:20 , type:'thunderstorm'},
        { day:'Fri', temp:-10, windDirection:'west', windSpeed:22 , type:'snow'},
        { day:'Sat', temp:25, windDirection:'east', windSpeed:6 , type:'sunny'},
        { day:'Sun', temp:10, windDirection:'south-west', windSpeed:8 , type:'overcast'},
    ]
}
/*Funkcija koja automatski popunjava polja u odnosu na dat objekat*/
for(let i = 0; i < weatherData.days.length; i++){
    let data = document.getElementById(weatherData.days[i].day);
    let right = data.getElementsByClassName("right").item(0);
    let title = right.getElementsByTagName("h3").item(0);
    let temp = right.getElementsByTagName("h4").item(0);
    let weatherIcon = document.getElementsByClassName("weather-icon").item(i);
    title.innerText = weatherData.days[i].day;
    temp.innerText = (weatherData.days[i].temp + " " + weatherData.tempUnit + "°");
    switch (weatherData.days[i].type) {
        case "sunny":
            weatherIcon.src = 'assets/images/weather/Sun.svg'
        break;
        case "partially cloudy":
            weatherIcon.src = 'assets/images/weather/Cloudiness.svg'
        break;
        case "rain":
            weatherIcon.src = 'assets/images/weather/Rain.svg'
        break;
        case "thunderstorm":
            weatherIcon.src = 'assets/images/weather/Thunderstorm.svg'
        break;
        case "snow":
            weatherIcon.src = 'assets/images/weather/Snow.svg'
        break;
        case "overcast":
            weatherIcon.src = 'assets/images/weather/Cloudiness-b.svg'
        break;
    }
}
/*Funkcija za generisanje detaljnog prikaza prognoze*/
function displayDetails(id) {
    for(let i=0; i<weatherData.days.length; i++) {
        let data = document.getElementById(weatherData.days[i].day);
        let weatherDetails = document.getElementsByClassName("weather-details").item(0);
        let windDetails = weatherDetails.getElementsByClassName("wind-details").item(0);
        let direction = windDetails.getElementsByClassName("wind-direction").item(0);
        let directionImg = windDetails.getElementsByClassName("wind-direction-img").item(0)
        let speed = windDetails.getElementsByClassName("wind-speed").item(0)
        let day = weatherDetails.getElementsByTagName("h3").item(0);
        let temperature = weatherDetails.getElementsByTagName("h4").item(0);
        let weatherIcon = weatherDetails.getElementsByTagName("img").item(0);
        if (id == weatherData.days[i].day) {
            day.innerText = data.getElementsByTagName("h3").item(0).innerText;
            temperature.innerText = data.getElementsByTagName("h4").item(0).innerText;
            weatherIcon.src = data.getElementsByClassName("weather-icon").item(0).src;
            direction.innerText = weatherData.days[i].windDirection;
            speed.innerText = (weatherData.days[i].windSpeed + " " + weatherData.windSpeedUnit);
            switch (weatherData.days[i].windDirection) {
                case "north-west":
                    directionImg.style.transform = "rotate(315deg)"
                break;
                case "north-east":
                    directionImg.style.transform = "rotate(45deg)"
                break;
                case "south":
                    directionImg.style.transform = "rotate(180deg)"
                break;
                case "south-west":
                    directionImg.style.transform = "rotate(225deg)"
                break;
                case "south-east":
                    directionImg.style.transform = "rotate(135deg)"
                break;
                case "east":
                    directionImg.style.transform = "rotate(90deg)"
                break;
                case "west":
                    directionImg.style.transform = "rotate(270deg)"
                break;
                default:
                    directionImg.style.transform = "unset"
            }
        }
        document.getElementsByClassName("weather-details").item(0).style.display = "block"  
    }
}
/*Funkcija za zatvaranje detaljnog prikaza vremenske prognoze*/
function closeWindow() {
    document.getElementsByClassName("weather-details").item(0).style.display = "none";
}
/*Zbog ogranicenja vremena zadatak nije odradjen u potpunosti, bonus taksove nisam odradio, takodje sada kada sam zavrsio sve, 
mislim da postoji nacin da se optimizuje, sto se tice izgleda nisam se bavio time, posto je receno da ce se ocenjivati JS.
*/