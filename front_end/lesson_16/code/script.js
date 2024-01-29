// * https://get.geojs.io/v1/ip/geo.json
// кидаете fetch запрос по этому адресу, получите значение широты, долготы и города,
// которые мы будем использовать для API прогноза погоды
// сделайте для этого асинхронную функцию на async / await
// * 20 мин на задание
// ! 18:05


async function loadWeather() {
  const res = await fetch('https://get.geojs.io/v1/ip/geo.json')
  const data = await res.json()
  // const city = data.city
  // const latitude = data.latitude
  // const longitude = data.longitude
  // строчка внизу (деструктуризация) - короткая запись для трех строчек сверху
  // объявления переменных по ключам из объекта
  const {city, latitude, longitude} = data
  console.log(city, latitude, longitude);
  // передайте значения широты и долготы в запрос
  // https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true
  // получите код погоды, значение температуры, скорость ветра
  // положите в переменные и выведите в консоль
  // * до 19:00
  const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
  const weatherData = await weatherRes.json()
  const {current_weather} = weatherData
  const {windspeed, temperature, winddirection, weathercode} = current_weather
  const wetherValue = getWeatherCode(weathercode)
  console.log(wetherValue, 'windspeed:  ', windspeed, 'temperature  :', temperature,'winddirection: ', winddirection);
}

// сделайте функцию, которая расшифровывает значения кода погоды
// передайте в нее ваш параметр weathercode и выведете ответ в консоль
// значения кодов погоды вы найдете в документации
// https://open-meteo.com/en/docs/
// через cntrl+f можете найти его по ключевым словам 'WMO Weather'
// * до 19:30

function getWeatherCode(weathercode) {
  switch (weathercode) {
    case 0:
      return "Clear sky";
    case 1:
      return "Mainly clear";
    case 2:
      return "Partly cloudy";
    case 3:
      return "Overcast";
    case 45:
      return "Fog";
    case 48:
      return "Depositing rime fog";
    case 51:
      return "Light drizzle";
    case 53:
      return "Moderate drizzle";
    case 55:
      return "Dense intensity drizzle";
    case 56:
      return "Light freezing drizzle";
    case 57:
      return "Dense intensity freezing drizzle";
    case 61:
      return "Slight rain";
    case 63:
      return "Moderate rain";
    case 65:
      return "Heavy intensity rain";
    case 66:
      return "Light freezing rain";
    case 67:
      return "Heavy intensity freezing rain";
    case 71:
      return "Slight snow";
    case 73:
      return "Moderate snow";
    case 75:
      return "Heavy intensity snow";
    case 77:
      return "Snow grains";
    case 80:
      return "Slight rain showers";
    case 81:
      return "Moderate rain showers";
    case 82:
      return "Violent rain showers";
    case 85:
      return "Slight snow showers";
    case 86:
      return "Heavy snow showers";
    case 95:
      return "Thunderstorm";
    case 96:
      return "Thunderstorm with slight hail";
    case 99:
      return "Thunderstorm with heavy hail";
    default:
      return "-";
  }
}

loadWeather()


