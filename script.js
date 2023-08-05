const url = 'https://api.openweathermap.org/data/2.5/'
const key = 'a646213d6afccc295cebf45570d9e58f'
//var değiştirilebilir bir değişkendir
//const sonradan değiştirilemez.oluşturulduğu gibi kalır


//const fonksiyon(metod) tanımlarken : const fonk_ismi = (x) =>{ fonksiyon kodları } 
//şeklinde tanımlanır
// asağıda olduğu gibi



//sarı renkler fonksyion!!

const setQuery = (e) => {
    if (e.keyCode == '13')
        getResult(searchBar.value)
    //13 means "Enter".


}
const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
        .then(weather => {
            return weather.json()
        })
        .then(displayResult)
}

const displayResult = (result) => {
    let city = document.querySelector('.city')
    city.innerText = `${result.name},${result.sys.country}`

    let temp = document.querySelector('.temp')
    temp.innerText = `${Math.round(result.main.temp)}°c`

    let desc = document.querySelector('.desc')
    desc.innerText = result.weather[0].description

    let minmax = document.querySelector('.minmax')
    minmax.innerText = `${Math.round(result.main.temp_min)}°c /
     ${Math.round(result.main.temp_max)}°c `





}


const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('keypress', setQuery)