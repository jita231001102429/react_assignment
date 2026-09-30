function WeatherDetails({ weather }) {
  const temperature = Math.round(
    weather.main.temp
  );

  const humidity =
    weather.main.humidity;

  const windSpeed =
    weather.wind.speed;

  const sunrise =
    new Date(
      weather.sys.sunrise * 1000
    ).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    });

  const sunset =
    new Date(
      weather.sys.sunset * 1000
    ).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    });


  return (
    <section className="details-section">

      <div className="section-heading">

        <span>
          WEATHER INFORMATION
        </span>

        <h2>
          Today's Details
        </h2>

      </div>


      <div className="details-grid">

        <div className="detail-card">

          <div className="detail-icon">

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M14 14.76V5a2 2 0 0 0-4 0v9.76a4 4 0 1 0 4 0Z" />
              <path d="M12 8v7" />
            </svg>

          </div>

          <div className="detail-content">

            <span>
              Temperature
            </span>

            <strong>
              {temperature}°C
            </strong>

          </div>

        </div>


        <div className="detail-card">

          <div className="detail-icon">

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M12 3C12 3 6 10 6 14.5a6 6 0 0 0 12 0C18 10 12 3 12 3Z" />
            </svg>

          </div>

          <div className="detail-content">

            <span>
              Humidity
            </span>

            <strong>
              {humidity}%
            </strong>

          </div>

        </div>


        <div className="detail-card">

          <div className="detail-icon">

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M3 8h11a3 3 0 1 0-3-3" />
              <path d="M3 12h15a3 3 0 1 1-3 3" />
              <path d="M3 16h8" />
            </svg>

          </div>

          <div className="detail-content">

            <span>
              Wind Speed
            </span>

            <strong>
              {windSpeed} m/s
            </strong>

          </div>

        </div>


        <div className="detail-card">

          <div className="detail-icon">

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M12 3v4" />
              <path d="M4.93 4.93l2.83 2.83" />
              <path d="M3 12h4" />
              <path d="M17 12h4" />
              <path d="M16.24 7.76l2.83-2.83" />
              <path d="M5 18h14" />
              <path d="M8 15a4 4 0 0 1 8 0" />
            </svg>

          </div>

          <div className="detail-content">

            <span>
              Sunrise
            </span>

            <strong>
              {sunrise}
            </strong>

          </div>

        </div>


        <div className="detail-card">

          <div className="detail-icon">

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M12 3v4" />
              <path d="M4.93 4.93l2.83 2.83" />
              <path d="M3 12h4" />
              <path d="M17 12h4" />
              <path d="M16.24 7.76l2.83-2.83" />
              <path d="M5 18h14" />
              <path d="M8 15a4 4 0 0 1 8 0" />
            </svg>

          </div>

          <div className="detail-content">

            <span>
              Sunset
            </span>

            <strong>
              {sunset}
            </strong>

          </div>

        </div>


        <div className="detail-card">

          <div className="detail-icon">

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <circle cx="12" cy="12" r="8" />
              <path d="M12 8v4l3 2" />
            </svg>

          </div>

          <div className="detail-content">

            <span>
              Pressure
            </span>

            <strong>
              {weather.main.pressure} hPa
            </strong>

          </div>

        </div>

      </div>

    </section>
  );
}

export default WeatherDetails;