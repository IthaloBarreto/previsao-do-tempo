const key = '719cf66878b9d58e81681fb78490e6ee'
const lupaBtn = document.querySelector('.lupa-btn')
const nameCity = document.querySelector('.cidade__tela')
const temperatureNumber = document.querySelector('.temperatura__numero')
const humidity = document.querySelector('.porcentagem__umidade')
const wind = document.querySelector('.velocidade__vento')
const descriptionEstage = document.querySelector('.estagio')

async function fetchCity(city) {
    const dataCity = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(res => res.json())
    dataOnScreen(dataCity)
}

function clickOnButton() {
    const city = document.querySelector('.input__pesquisar').value
    fetchCity(city)
}

function dataOnScreen(dataCity) {
    console.log(dataCity)
    nameCity.innerHTML = dataCity.name
    temperatureNumber.innerHTML = dataCity.main.temp
    humidity.innerHTML = dataCity.main.humidity
    wind.innerHTML = dataCity.wind.speed * 3.6
    descriptionEstage.innerHTML = dataCity.weather[0].description
}

lupaBtn.addEventListener('click', clickOnButton)