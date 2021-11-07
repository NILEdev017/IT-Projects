function getWeatherData(){
    let cityName = document.getElementById("city_name").value

    axios.get(`http://api.weatherapi.com/v1/forecast.json?key=e414092c72cf4d68a41132033210510&q=${cityName}&days=3&aqi=no&alerts=no`)
    .then((response)=>{
        let city_name = response.data.location.name;
        let country_name = response.data.location.country;
        let wind_speed = response.data.current.wind_mph;

        let dat_temp = response.data.forecast.forecastday[2].day.avgtemp_c;
        let dat_condition = response.data.forecast.forecastday[2].day.condition.text;
        let dat_condition_img = response.data.forecast.forecastday[2].day.condition.icon;

        let current_temp = response.data.current.temp_c;
        let weather_condition = response.data.current.condition.text;
        let weather_condition_img = response.data.current.condition.icon;

        let fut_temp = response.data.forecast.forecastday[1].day.avgtemp_c;
        let fut_condition = response.data.forecast.forecastday[1].day.condition.text;
        let fut_condition_img = response.data.forecast.forecastday[1].day.condition.icon;
        

        document.getElementById('current-city').innerText = city_name + ', ' + country_name;
        document.getElementById('current-temp').innerText = current_temp + ' Celsius';
        document.getElementById('current-condition').innerHTML = `<h5>${weather_condition}</h5> <img src= ${weather_condition_img}>`

        document.getElementById('dat-temp').innerText = dat_temp + ' Celsius';
        document.getElementById('dat-condition').innerHTML = `<h5>${dat_condition}</h5> <img src= ${dat_condition_img}>`

        document.getElementById('tomorrow-temp').innerText = fut_temp + ' Celsius';
        document.getElementById('tomorrow-condition').innerHTML = `<h5>${fut_condition}</h5> <img src= ${fut_condition_img}>`


            if(weather_condition.toLowerCase().includes('cloudy') || weather_condition.toLowerCase().includes('overcast')){
                document.getElementById("body-bg").style.backgroundImage = "url('../images/pexels-matheus-potsclam-barro-1828305.jpg')";
            }else if(weather_condition.toLowerCase().includes("mist") || weather_condition.toLowerCase().includes("fog")){
                document.getElementById("body-bg").style.backgroundImage = "url('../images/pexels-lumn-167699.jpg')";
            }else if(weather_condition.toLowerCase().includes("clear")){
                document.getElementById("body-bg").style.backgroundImage = "url('../images/pexels-elia-clerici-912110.jpg')";
            }else if(weather_condition.toLowerCase().includes("sunny")){
                document.getElementById("body-bg").style.backgroundImage = "url('../images/pexels-skitterphoto-3768.jpg')";
            }else if(weather_condition.toLowerCase().includes("rain") || element.indexOf("drizz")){
                document.getElementById("body-bg").style.backgroundImage = "url('../images/umbrella-gc0fb795ca_1920.jpg')";

                document.getElementById("turn-white").style.color = "white";
                document.getElementById("turn-white2").style.color = "white";
                document.getElementById("turn-white3").style.color = "white";
         
            }
            if(!weather_condition.toLowerCase().includes("rain") || wind_speed > 12 && weather_condition.toLowerCase().includes("sunny") ){
                document.getElementById("turn-white").style.color = "black";
                document.getElementById("turn-white2").style.color = "black";
                document.getElementById("turn-white3").style.color = "black";
            }
            if(current_temp < 0){
                document.getElementById("body-bg").style.backgroundImage = "url('../images/pexels-pixabay-60561.jpg')";
            }
            if(wind_speed > 12 && weather_condition.toLowerCase().includes("sunny")){
                document.getElementById("body-bg").style.backgroundImage = "url('../images/pexels-gotta-be-worth-it-919306.jpg')";
                document.getElementById("turn-white").style.color = "white";
                document.getElementById("turn-white2").style.color = "white";
                document.getElementById("turn-white3").style.color = "white";
            }
    })

}