fetch('http://api.openweathermap.org/data/2.5/weather?q=Mariupol,ua&appid=e94a5520a458f813e35c9dd6a0612378')
    .then(function (resp) {
        return resp.json()
    })
    .then(function (data) {
        console.log(data);
        document.querySelector(".package-name").textContent = data.name;
        document.querySelector(".price").innerHTML = Math.round(data.main.temp) - 273 + '&deg;';
        document.querySelector(".disclaimer").textContent = data.weather[0]['description'];
        document.querySelector(".features").innerHTML = `<img src = 'https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png'>`;
        document.querySelector(".featuresWindy").innerHTML = Math.round(`${data.wind.speed}`);
    })

document.querySelector(".Donetsk").onclick = function () {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Donetsk,ua&appid=e94a5520a458f813e35c9dd6a0612378')
        .then(function (resp) {
            return resp.json()
        })
        .then(function (data) {
            console.log(data);
            document.querySelector(".package-name").textContent = data.name;
            document.querySelector(".price").innerHTML = Math.round(data.main.temp) - 273 + '&deg;';
            document.querySelector(".disclaimer").textContent = data.weather[0]['description'];
            document.querySelector(".features").innerHTML = `<img src = 'https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png'>`;
            document.querySelector(".featuresWindy").innerHTML = Math.round(`${data.wind.speed}`);
        })
}
document.querySelector(".Mariupol").onclick = function () {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Mariupol,ua&appid=e94a5520a458f813e35c9dd6a0612378')
        .then(function (resp) {
            return resp.json()
        })
        .then(function (data) {
            console.log(data);
            document.querySelector(".package-name").textContent = data.name;
            document.querySelector(".price").innerHTML = Math.round(data.main.temp) - 273 + '&deg;';
            document.querySelector(".disclaimer").textContent = data.weather[0]['description'];
            document.querySelector(".features").innerHTML = `<img src = 'https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png'>`;
            document.querySelector(".featuresWindy").innerHTML = Math.round(`${data.wind.speed}`);
        })
}
document.querySelector(".Kiev").onclick = function () {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Kiev,ua&appid=e94a5520a458f813e35c9dd6a0612378')
        .then(function (resp) {
            return resp.json()
        })
        .then(function (data) {
            console.log(data);
            document.querySelector(".package-name").textContent = data.name;
            document.querySelector(".price").innerHTML = Math.round(data.main.temp) - 273 + '&deg;';
            document.querySelector(".disclaimer").textContent = data.weather[0]['description'];
            document.querySelector(".features").innerHTML = `<img src = 'https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png'>`;
            document.querySelector(".featuresWindy").innerHTML = Math.round(`${data.wind.speed}`);
        })
}
document.querySelector(".Kharkiv").onclick = function () {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Kharkiv,ua&appid=e94a5520a458f813e35c9dd6a0612378')
        .then(function (resp) {
            return resp.json()
        })
        .then(function (data) {
            console.log(data);
            document.querySelector(".package-name").textContent = data.name;
            document.querySelector(".price").innerHTML = Math.round(data.main.temp) - 273 + '&deg;';
            document.querySelector(".disclaimer").textContent = data.weather[0]['description'];
            document.querySelector(".features").innerHTML = `<img src = 'https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png'>`;
            document.querySelector(".featuresWindy").innerHTML = Math.round(`${data.wind.speed}`);
        })
}
document.querySelector(".Dnipro").onclick = function () {
    fetch('http://api.openweathermap.org/data/2.5/weather?id=709929&appid=e94a5520a458f813e35c9dd6a0612378')
        .then(function (resp) {
            return resp.json()
        })
        .then(function (data) {
            console.log(data);
            document.querySelector(".package-name").textContent = data.name;
            document.querySelector(".price").innerHTML = Math.round(data.main.temp) - 273 + '&deg;';
            document.querySelector(".disclaimer").textContent = data.weather[0]['description'];
            document.querySelector(".features").innerHTML = `<img src = 'https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png'>`;
            document.querySelector(".featuresWindy").innerHTML = Math.round(`${data.wind.speed}`);











































        })
}