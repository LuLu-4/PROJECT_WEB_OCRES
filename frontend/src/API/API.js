
module.exports = {
    DeleteName(name) {
        return fetch(`http://localhost:8080/name/delete?name=${name}`, {
            method: 'DELETE',
        })
        .then((response) => {
            return response.json()
        })
    },
    GetAllName() {
        return fetch(`http://localhost:8080/name/get`, {
            method: 'GET',
        })
        .then((response) => {
            return response.json()
        })
    },
    UpdateName(nameFrom, nameTo) {
        return fetch(`http://localhost:8080/name/update?nameFrom=${nameFrom}&nameTo=${nameTo}`, {
            method: 'PUT',
        })
            .then((response) => {
                return response.json()
            })
    },
    AddName(name) {
        return fetch(`http://localhost:8080/name/add?name=${name}`, {
            method: 'POST',
        })
        .then((response) => {
            return response.json()
        })
    },
    GetWeather(city, time, unit) {
        return fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&days=${time}&units="${unit}&key=03593e301b344ccdafc3023373c22c8b`, {
            method: 'GET',
        })
        .then((response) => {
            return response.json()
        })
    },
    GetNasa() {
        return fetch(`https://api.nasa.gov/planetary/apod?api_key=HBCsIMeQsubqCpH8S2ustOhspSw9vQth8iy4ws9p`, {
            method: 'GET',
        })
        .then((response) => {
            return response.json()
        })
    },
    GetMovie(year) {
        return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=74b598a524146a58ec0688aba6cc707b&year=${year}&lang=fr,FR`, {
            method: 'GET',
        })
        .then((response) => {
            return response.json()
        })
    },
    GetCrypto(crypto) {
        return fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${crypto}&per_page=10&page=1&sparkline=false&price_change_percentage=24h`, {
            method: 'GET',
        })
        .then((response) => {
            return response.json()
        })
    },
    GetCryptoHistory(crypto, date) {
        return fetch(`https://api.coingecko.com/api/v3/coins/${crypto}/history?date=${date}`, {
            method: 'GET',
        })
        .then((response) => {
            return response.json()
        })
    },
}
