import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getWeather = async () => {
    if (!city.trim()) {
      setError("Please enter a city name.");
      return;
    }

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      // Step 1: Find the city coordinates
      const geoResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
          city
        )}&count=1&language=en&format=json`
      );

      if (!geoResponse.ok) {
        throw new Error("Unable to find location.");
      }

      const geoData = await geoResponse.json();

      if (!geoData.results || geoData.results.length === 0) {
        throw new Error("City not found.");
      }

      const place = geoData.results[0];

      setLocation(place);

      // Step 2: Get weather using latitude and longitude
      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${place.latitude}&longitude=${place.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m&hourly=temperature_2m,precipitation_probability,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,sunrise,sunset&timezone=auto&forecast_days=7`
      );

      if (!weatherResponse.ok) {
        throw new Error("Unable to fetch weather data.");
      }

      const weatherData = await weatherResponse.json();

      setWeather(weatherData);
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather();
  };

  const getWeatherDescription = (code) => {
    const weatherCodes = {
      0: "Clear sky",
      1: "Mainly clear",
      2: "Partly cloudy",
      3: "Overcast",
      45: "Fog",
      48: "Depositing rime fog",
      51: "Light drizzle",
      53: "Moderate drizzle",
      55: "Dense drizzle",
      61: "Slight rain",
      63: "Moderate rain",
      65: "Heavy rain",
      71: "Slight snow",
      73: "Moderate snow",
      75: "Heavy snow",
      80: "Slight rain showers",
      81: "Moderate rain showers",
      82: "Violent rain showers",
      95: "Thunderstorm",
      96: "Thunderstorm with hail",
      99: "Thunderstorm with heavy hail",
    };

    return weatherCodes[code] || "Unknown";
  };

  const getWeatherIcon = (code, isDay = 1) => {
    if (code === 0) return isDay ? "☀️" : "🌙";
    if (code === 1) return isDay ? "🌤️" : "🌙";
    if (code === 2) return "⛅";
    if (code === 3) return "☁️";
    if ([45, 48].includes(code)) return "🌫️";
    if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) {
      return "🌧️";
    }
    if ([71, 73, 75].includes(code)) return "❄️";
    if ([95, 96, 99].includes(code)) return "⛈️";

    return "🌡️";
  };

  const formatDate = (date) => {
    return new Date(`${date}T12:00:00`).toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="app">
      <div className="dashboard">
        <header className="header">
          <div>
            <h1>Weather Dashboard</h1>
            <p>Check current weather and 7-day forecasts</p>
          </div>

          <div className="header-icon">🌤️</div>
        </header>

        <form className="search-box" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <button type="submit">
            {loading ? "Searching..." : "Search"}
          </button>
        </form>

        {error && <div className="error">{error}</div>}

        {!weather && !loading && !error && (
          <div className="welcome">
            <div className="welcome-icon">🌎</div>
            <h2>Search for a city</h2>
            <p>
              Enter a city name above to see current weather conditions and a
              7-day forecast.
            </p>
          </div>
        )}

        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>Getting weather data...</p>
          </div>
        )}

        {weather && location && (
          <>
            {/* Current Weather */}
            <section className="current-weather">
              <div className="location">
                <h2>
                  {location.name}
                  {location.country_code
                    ? `, ${location.country_code}`
                    : ""}
                </h2>

                <p>
                  {location.admin1 || location.country || "Current location"}
                </p>
              </div>

              <div className="current-main">
                <div className="weather-icon-large">
                  {getWeatherIcon(
                    weather.current.weather_code,
                    weather.current.is_day
                  )}
                </div>

                <div className="temperature">
                  <span>{Math.round(weather.current.temperature_2m)}</span>
                  <sup>°C</sup>
                </div>

                <div className="condition">
                  {getWeatherDescription(weather.current.weather_code)}
                </div>

                <p className="feels-like">
                  Feels like{" "}
                  {Math.round(weather.current.apparent_temperature)}°C
                </p>
              </div>
            </section>

            {/* Weather Details */}
            <section className="details-grid">
              <div className="detail-card">
                <span className="detail-icon">💧</span>
                <div>
                  <p>Humidity</p>
                  <strong>
                    {weather.current.relative_humidity_2m}%
                  </strong>
                </div>
              </div>

              <div className="detail-card">
                <span className="detail-icon">💨</span>
                <div>
                  <p>Wind Speed</p>
                  <strong>
                    {Math.round(weather.current.wind_speed_10m)} km/h
                  </strong>
                </div>
              </div>

              <div className="detail-card">
                <span className="detail-icon">🌧️</span>
                <div>
                  <p>Precipitation</p>
                  <strong>
                    {weather.current.precipitation} mm
                  </strong>
                </div>
              </div>

              <div className="detail-card">
                <span className="detail-icon">🌅</span>
                <div>
                  <p>Sunrise</p>
                  <strong>
                    {new Date(
                      weather.daily.sunrise[0]
                    ).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </strong>
                </div>
              </div>
            </section>

            {/* 7 Day Forecast */}
            <section className="forecast-section">
              <h2>7-Day Forecast</h2>

              <div className="forecast-grid">
                {weather.daily.time.map((date, index) => (
                  <div className="forecast-card" key={date}>
                    <h3>
                      {index === 0 ? "Today" : formatDate(date)}
                    </h3>

                    <div className="forecast-icon">
                      {getWeatherIcon(
                        weather.daily.weather_code[index]
                      )}
                    </div>

                    <p className="forecast-condition">
                      {getWeatherDescription(
                        weather.daily.weather_code[index]
                      )}
                    </p>

                    <div className="forecast-temp">
                      <strong>
                        {Math.round(
                          weather.daily.temperature_2m_max[index]
                        )}
                        °
                      </strong>

                      <span>
                        {Math.round(
                          weather.daily.temperature_2m_min[index]
                        )}
                        °
                      </span>
                    </div>

                    <div className="rain-probability">
                      🌧️{" "}
                      {weather.daily.precipitation_probability_max[index]}%
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Sunrise / Sunset */}
            <section className="sun-section">
              <div className="sun-card">
                <span>🌅</span>
                <div>
                  <p>Sunrise</p>
                  <strong>
                    {new Date(
                      weather.daily.sunrise[0]
                    ).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </strong>
                </div>
              </div>

              <div className="sun-card">
                <span>🌇</span>
                <div>
                  <p>Sunset</p>
                  <strong>
                    {new Date(
                      weather.daily.sunset[0]
                    ).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </strong>
                </div>
              </div>
            </section>

            <footer>
              Weather data provided by Open-Meteo
            </footer>
          </>
        )}
      </div>
    </div>
  );
}

export default App;