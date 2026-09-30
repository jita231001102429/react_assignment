function WeatherCard({ weather }) {
  const temperature = Math.round(
    weather.main.temp
  );

  const feelsLike = Math.round(
    weather.main.feels_like
  );

  const weatherIcon =
    weather.weather[0].icon;

  const weatherDescription =
    weather.weather[0].description;

  const cityName =
    weather.name;

  const country =
    weather.sys.country;

  return (
    <section className="weather-card">

      <div className="weather-card-top">

        <div className="location-info">

          <span className="small-label">
            CURRENT WEATHER
          </span>

          <h2>
            {cityName}
          </h2>

          <p>
            {country}
          </p>

        </div>


        <div className="weather-icon-container">

          <img
            src={`https://openweathermap.org/img/wn/${weatherIcon}@4x.png`}
            alt={weatherDescription}
          />

        </div>

      </div>


      <div className="temperature-area">

        <div className="temperature">
          {temperature}

          <span>
            °C
          </span>
        </div>


        <div className="weather-description">
          {weatherDescription}
        </div>


        <div className="feels-like">
          Feels like {feelsLike}°C
        </div>

      </div>

    </section>
  );
}

export default WeatherCard;