let weather = {
    "apiKey": "2295d358679c407a8739af611ae6d3c4",
    fetchWeather: async function (city) {
        const x = await fetch(
            "https://api.weatherbit.io/v2.0/current?&city=" + city + "&key=" + this.apiKey)
        //console.log(x)
        const response = await x.json()
        this.displayWeather(response.data[0])
    },
    
    displayWeather: function(data) {
        let name = data.city_name;
        let description = data.weather.description;
        let temp = Math.round((data.app_temp * 9/5) + 32);
        let wind = Math.round(data.wind_spd);
        let humidity = data.rh;

        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°F";
        document.querySelector(".wind").innerText = "Wind Speed: " + wind + " m/s";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%"

        document.querySelector(".search-bar").value = ""
    },

    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
}

document.querySelector(".search button").addEventListener("click", function() {
    weather.search();
});

document.addEventListener('keypress', function(e) {
    if (e.key === "Enter") {
        weather.search();
    }
});
