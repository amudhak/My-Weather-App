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
        let code = data.weather.code;
        
        if (code == '800') {
            document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1430263326118-b75aa0da770b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80)";
        } else {
            switch(code.toString().charAt(0)) {
                case '2':
                    document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1594760467013-64ac2b80b7d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80)";
                    break;
                case '3':
                    document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1498847559558-1e4b1a7f7a2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80)";
                    break;
                case '5':
                    document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1518803194621-27188ba362c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80)";
                    break;
                case '6':
                    document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80)";
                    break;
                case '7':
                    document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1486184885347-1464b5f10296?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1768&q=80)";
                    break;
                default:
                    document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1517483000871-1dbf64a6e1c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80)";
                    break;
            }
        }
        
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°F";
        document.querySelector(".wind").innerText = "Wind Speed: " + wind + " m/s";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%"

        document.querySelector(".search-bar").value = "";
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
