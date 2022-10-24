let timeAr;
let timeCatar;
let addHours;
let time;



/* Carousel */
window.onload = function () {
    var URLCurrent = window.location.origin;
    let tempertureValue = document.getElementById('tempertureValue');
    let tempertureDescription = document.getElementById('tempertureDescription');
    let locationDescription = document.getElementById('locationDescription');
    let locationIconAnimated = document.getElementById('locationIconAnimated');
    let speedTimeDescription = document.getElementById('speedTimeDescription');
    let tempertureValueCatar = document.getElementById('tempertureValueCatar');
    let tempertureDescriptionCatar = document.getElementById('tempertureDescriptionCatar');
    let locationDescriptionCatar = document.getElementById('locationDescriptionCatar');
    let locationIconAnimatedCatar = document.getElementById('locationIconAnimatedCatar');
    let speedTimeDescriptionCatar = document.getElementById('speedTimeDescriptionCatar');



   /*  weather(); */
    timeNow(); 
    loopTime();
    
    if(document.getElementsByClassName('section-carousel').length>0){
        const IMAGENES = [
            'img/maradonaMundial.jpg',
            'img/messiYMaradona.jpg',
            'img/copaDelMundo.jpg'
        ];
        const TIEMPO_INTERVALO_MILESIMAS_SEG = 2500;
        let posicionActual = 0;
        let $imagen = document.querySelector('#imagen');
        let intervalo;
        playIntervalo()
        function pasarFoto() {
            if(posicionActual >= IMAGENES.length - 1) {
                posicionActual = 0;
            } else {
                posicionActual++;
            }
            renderizarImagen();
        }
        function renderizarImagen () {
            $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
        }
    
        function playIntervalo() {
            intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
        }
        renderizarImagen();
    }

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            var lat;
            var lon;
            lon = position.coords.longitude;
            lat = position.coords.latitude;
            const url = `https://api.openweathermap.org/data/2.5/weather?q=Buenos Aires&lang=es&units=metric&APPID=99a35b79022d86833f87b1bf4d467925`;

            fetch(url)
                .then(response => { return response.json()})
                .then(data => {
                    let temp = Math.round(data.main.temp);
                    tempertureValue.textContent = `${temp} °C`; 
                    let description = data.weather[0].description;
                    tempertureDescription.textContent =  description;
                    let location = data.name
                    locationDescription.textContent = location.toUpperCase();
                    let speed = data.wind.speed;
                    speedTimeDescription.textContent = `${speed} m/s`;
/*                     let iconCode = data.weather[0].icon;
                    const urlIcon = `http://openweathermap.org/img/wn/${iconCode}.png` */
                    
                    switch (data.weather[0].main) {
                        case 'Clear':
                            locationIconAnimated.src = URLCurrent+'/img/amcharts_weather_icons_1.0.0/animated/day.svg'
                            break;
                        case 'Clouds':
                            locationIconAnimated.src = URLCurrent+'/img/amcharts_weather_icons_1.0.0/animated/cloudy-day-3.svg'
                            break;
                        case 'Thunderstorm':
                            locationIconAnimated.src= URLCurrent+'/img/amcharts_weather_icons_1.0.0/animated/thunder.svg'
                            break;
                        case 'Drizzle':
                            locationIconAnimated.src= URLCurrent+'/img/amcharts_weather_icons_1.0.0/animated/rainy-2.svg'
                            break;
                        case 'Rain':
                            locationIconAnimated.src= URLCurrent+'/img/amcharts_weather_icons_1.0.0/animated/rainy-7.svg'
                            break;
                        case 'Snow':
                            locationIconAnimated.src= URLCurrent+'/img/amcharts_weather_icons_1.0.0/animated/snowy-6.svg'
                            break;                        
                        case 'Atmosphere':
                            locationIconAnimated.src= URLCurrent+'/img/amcharts_weather_icons_1.0.0/animated/weather.svg'
                            break;  
                        default:
                            locationIconAnimated.src= URLCurrent+'/img/amcharts_weather_icons_1.0.0/animated/cloudy-day-1.svg'
                            break;
                    }
                    
                })
                .catch(error =>{
                    console.log(error
                        )
                })
            const urlCatar = `https://api.openweathermap.org/data/2.5/weather?q=Catar&lang=es&units=metric&APPID=99a35b79022d86833f87b1bf4d467925`;

            fetch(urlCatar)
                .then(response => { return response.json()})
                .then(dataCatar => {
                    let temp = Math.round(dataCatar.main.temp);
                    tempertureValueCatar.textContent = `${temp} °C`; 
                    let description = dataCatar.weather[0].description;
                    tempertureDescriptionCatar.textContent =  description;
                    let location = dataCatar.name
                    locationDescriptionCatar.textContent = location.toUpperCase();
                    let speed = dataCatar.wind.speed;
                    speedTimeDescriptionCatar.textContent = `${speed} m/s`;
/*                     let iconCode = dataCatar.weather[0].icon;
                    const urlIcon = `http://openweathermap.org/img/wn/${iconCode}.png` */
                    switch (dataCatar.weather[0].main) {
                        case 'Clear':
                            locationIconAnimatedCatar.src =  URLCurrent+'/img/amcharts_weather_icons_1.0.0/animated/day.svg'
                            break;
                        case 'Clouds':
                            locationIconAnimatedCatar.src =  URLCurrent+'/img/amcharts_weather_icons_1.0.0/animated/cloudy-day-3.svg'
                            break;
                        case 'Thunderstorm':
                            locationIconAnimatedCatar.src= URLCurrent+'/img/amcharts_weather_icons_1.0.0/animated/thunder.svg'
                            break;
                        case 'Drizzle':
                            locationIconAnimatedCatar.src= URLCurrent+'/img/amcharts_weather_icons_1.0.0/animated/rainy-2.svg'
                            break;
                        case 'Rain':
                            locationIconAnimatedCatar.src= URLCurrent+'/img/amcharts_weather_icons_1.0.0/animated/rainy-7.svg'
                            break;
                        case 'Snow':
                            locationIconAnimatedCatar.src= URLCurrent+'/img/amcharts_weather_icons_1.0.0/animated/snowy-6.svg'
                            break;                        
                        case 'Atmosphere':
                            locationIconAnimatedCatar.src= URLCurrent+'/img/amcharts_weather_icons_1.0.0/animated/weather.svg'
                            break;  
                        default:
                            locationIconAnimatedCatar.src='./img/amcharts_weather_icons_1.0.0/animated/cloudy-day-1.svg'
                            break;
                    }
                    
                })
                .catch(error =>{
                    console.log(error
                        )
                })
/*             tempertureValue
            tempertureDescription
            locationDescription
            locationIconAnimated
            speedTimeDescription
 */
        })
    }



} 
async function timeNow(){
    try {
        const responseTimeAr = await fetch("http://worldtimeapi.org/api/timezone/America/Argentina/Salta");
        if(responseTimeAr.status===200){
            const responseTimeArJson = await responseTimeAr.json();
            timeAr = responseTimeArJson.datetime;
        }            
    } catch (error) {
        console.log(error)
    }



}
function loopTime() {
    setInterval(setTimeHoursNow, 1000);
}
function setTimeHoursNow(){
    timeAr = new Date(timeAr);
    time = timeAr.getTime();
    addHours = (300 * 60) * 6000;
    timeCatar = new Date(time + addHours);

    document.getElementById('hoursAr').innerHTML = timeAr.getHours() < 10 ? '0' + timeAr.getHours() : timeAr.getHours();
    document.getElementById('minutesAr').innerHTML = timeAr.getMinutes() < 10 ? '0' + timeAr.getMinutes() : timeAr.getMinutes();
    document.getElementById('secondsAr').innerHTML = timeAr.getSeconds() < 10 ? '0' + timeAr.getSeconds() : timeAr.getSeconds();
    document.getElementById('typeTimeAr').innerHTML = timeAr.getHours() >= 12 ? 'PM' : 'AM'; 
    document.getElementById('hoursCa').innerHTML = timeCatar.getHours() < 10 ? '0' + timeCatar.getHours() : timeCatar.getHours();
    document.getElementById('minutesCa').innerHTML = timeCatar.getMinutes() < 10 ? '0' + timeCatar.getMinutes() : timeCatar.getMinutes();
    document.getElementById('secondsCa').innerHTML = timeCatar.getSeconds() < 10 ? '0' + timeCatar.getSeconds() : timeCatar.getSeconds();
    document.getElementById('typeTimeCa').innerHTML = timeCatar.getHours() >= 12 ? 'PM' : 'AM';
    timeNow();  
}
async function weather(){
        try {

            
            const response = await fetch('https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=43e59687&&app_key=99a35b79022d86833f87b1bf4d467925');
            //const response = await fetch('http://api.weatherunlocked.com/api/current/us.33109?lang=us&app_id=43e59687&app_key=ac707c1d2cfba3ddd0f8cb99161b2345');
            if(response.status===200){
                const responseJson = await response.json();
                console.log(responseJson)
            }            
        } catch (error) {
            console.log(error)
        }

        

/*     fetch('http://api.weatherunlocked.com/api/current/us.33109?lang=us&app_id=43e59687&app_key=ac707c1d2cfba3ddd0f8cb99161b2345')
        .then(response => response.json() )
        .then(json => console.log(json)) */

/*     fetch("http://worldtimeapi.org/api/timezone/America/Argentina/Salta")
        .then(responseTime => responseTime.json())
        .then(responseTime => console.log(responseTime)) */


        //aulasvirtuales.bue.edu.ar/mod/forum/discuss.php?d=53834

        //docs.google.com/forms/d/1EFks-qN-N_Ue7oRbJHyLnpJzwrseJ1KznAXiNRv-Jfw/edit


        //https://www.youtube.com/watch?v=RVUMJUIwT2A

/* 
geolocation
https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition

reloj
https://desarrolloweb.com/articulos/549.php
https://uniwebsidad.com/libros/javascript/capitulo-8/relojes-contadores-e-intervalos-de-tiempo#:~:text=Para%20crear%20y%20mostrar%20un,actualizar%20el%20reloj%20cada%20segundo.
https://aprende-web.net/jspracticas/tiempo/tiempo1.php

Clima
https://openweathermap.org/
key f0d11929539a134a6fd2e2b40c69e357


https://www.amcharts.com/free-animated-svg-weather-icons/

https://www.youtube.com/watch?v=RVUMJUIwT2A


https://www.youtube.com/watch?v=PNr8-JDMinU



https://profile.es/blog/apis-front-end/


https://worldtimeapi.org/pages/examples

https://developer.weatherunlocked.com/admin
Credentials
App name: None's App
App ID: 43e59687
Key: ac707c1d2cfba3ddd0f8cb99161b2345

Latest Messages
Application key has been created
Applications
Edit None's App
Name
None's App
Description
Default application created on signup.
Current Plan
Local Weather Free › 
Status
  Live
Application ID
43e59687
This is the application ID, you should send with each API request.

Application Keys
ac707c1d2cfba3ddd0f8cb99161b2345	—
These are application keys used to authenticate requests.


*/

}