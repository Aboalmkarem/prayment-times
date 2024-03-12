function getResult(citySelect, cities) {
    axios.get(`http://api.aladhan.com/v1/timingsByCity?city=${citySelect.value}&country=Egypt&method=5`)
    .then((response) => {
        let date = response.data.data.date.readable
        let timings = response.data.data.timings
        // console.log(date)
        // console.log(cities)
        for (city of cities) {
            city.innerHTML = `
                <div class="date">Todays date: ${date}</div>
                <div class="city">
                    <h3>${citySelect.value}</h3>
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
                    </div>
                </div>
            `
        }
    }).catch((error) => {
        if (error.message == "Network Error") {
            city.innerHTML = `
                <div class="city">
                    <img src="../images/207492-200.png"></img>
                    <p>Check your network connection</p>
                </div>
            `
        }
    })
}

citySelect.addEventListener('change', () => {
    console.log('hi')
    let citySelect = document.getElementById('citySelect')
    let cities = document.getElementsByClassName('cities')
    for (city of cities) {
        city.innerHTML = `
        <div class="city">
            <div class="reloadContainer">
                <div class="reloadCenter">
                    <div class="loader"></div>
                </div>
            </div>
        </div>
        `
    }
    getResult(citySelect, cities)
})