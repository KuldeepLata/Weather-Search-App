const cityInp = document.querySelector("#city-input");
const result = document.querySelector("#weather-result");
const apikey = `fef7ff0c2f291576964febb97f64f7a1`;

cityInp.addEventListener(
    "keyup",

    async function (event) {
        if (event.key === "Enter") {
            const cityName = event.target.value;

            if (cityName == "") {
                return
            }

            cityInp.disabled = true;

            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}`;

            cityInp.disabled = false;

            const responce = await fetch(apiUrl)

            if (responce.status == 200) {
                const data = await responce.json()
                console.log(data);
                result.innerHTML = ` <h2 class="city">${cityName}</h2>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="">
            <p class="temperature">${data.main.temp}</p>
            <p class="condition">${data.weather[0].main}</p>`

            cityInp.value = "";

            } else if (responce.status == 404) {
                alert("City not found, Please try again");
            }
        }

    }
);
