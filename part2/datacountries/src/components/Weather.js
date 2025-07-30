const Weather = ({ weather }) => {
    if (!weather || !weather.main || !weather.name || !weather.wind || !weather.weather) {
        return (
            <div>
                Loading weather data...
            </div>
        )
    }
    return (
        <div>
            <h3>Weather in {weather.name}</h3>
            <p>Temperature {weather.main.temp} Celcius</p>
            <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={`${weather.weather[0].description}`}
            ></img>
            <p>Wind {weather.wind.speed} m/s</p>
        </div>
    )
}

export default Weather