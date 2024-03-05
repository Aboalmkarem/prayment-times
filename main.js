
function getMostSearchedTimes(city) {
    axios.get(`http://api.aladhan.com/v1/timingsByCity?city=${city.id}&country=Egypt&method=5`)
    .then((response) => {
        let timings = response.data.data.timings
        // console.log(response)
        city.innerHTML += `
        <h3>${city.id}</h3>
        <hr>
        <div class="praymentTimes">
        <div class="timesCell">
        <p>Fajr</p>
        <h4>${timings.Fajr}</h4>
        </div>
        <hr>
        <div class="timesCell">
        <p>Sunrise</p>
        <h4>${timings.Sunrise}</h4>
        </div>
        <hr>
        <div class="timesCell">
        <p>Dhuhr</p>
        <h4>${timings.Dhuhr}</h4>
        </div>
        <hr>
        <div class="timesCell">
        <p>Asr</p>
        <h4>${timings.Asr}</h4>
        </div>
        <hr>
        <div class="timesCell">
        <p>Maghrib</p>
        <h4>${timings.Maghrib}</h4>
        </div>
        <hr>
        <div class="timesCell">
        <p>Isha</p>
        <h4>${timings.Isha}</h4>
        </div>
        `
    }).catch((error) => {
        if (error.message == "Network Error") {
            city.innerHTML += `
                <img src="images/207492-200.png"></img>
                <p>Check your network connection</p>
            `
        }
    })
}
for (city of document.getElementsByClassName("city")) {
    getMostSearchedTimes(city)
}

// document.getElementById('btn').onclick = () => {

// }