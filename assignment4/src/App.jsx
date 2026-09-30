import {
  useEffect,
  useState
} from "react";

import "./App.css";

import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import WeatherDetails from "./components/WeatherDetails";
import Loading from "./components/Loading";


function App() {

  const [city, setCity] =
    useState("Kolkata");

  const [weather, setWeather] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");


  const API_KEY =
    import.meta.env.VITE_WEATHER_API_KEY;


  const fetchWeather = async (cityName) => {

    if (!API_KEY) {

      setError(
        "API key is missing. Please add your OpenWeatherMap API key to the .env file."
      );

      return;
    }


    try {

      setLoading(true);

      setError("");

      setWeather(null);


      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          cityName
        )}&appid=${API_KEY}&units=metric`
      );


      if (!response.ok) {

        if (response.status === 404) {

          throw new Error(
            "City not found. Please check the city name and try again."
          );

        }


        if (response.status === 401) {

          throw new Error(
            "Invalid API key. Please check your OpenWeatherMap API key."
          );

        }


        if (response.status === 429) {

          throw new Error(
            "Too many requests. Please wait a moment and try again."
          );

        }


        throw new Error(
          "Unable to fetch weather information. Please try again."
        );
      }


      const data =
        await response.json();


      setWeather(data);

    } catch (error) {

      setError(
        error.message ||
        "Something went wrong while fetching weather data."
      );

    } finally {

      setLoading(false);

    }
  };


  useEffect(() => {

    fetchWeather("Kolkata");

  }, []);


  return (
    <div className="app">


      <header className="header">

        <div className="header-content">


          <div className="brand">

            <div className="brand-mark">
              W
            </div>


            <div className="brand-text">

              <h1>
                Weatherly
              </h1>

              <p>
                Live Weather Dashboard
              </p>

            </div>

          </div>


          <div className="live-status">

            <span className="status-dot"></span>

            LIVE WEATHER

          </div>


        </div>

      </header>



      <main className="main-content">


        <section className="hero">


          <div className="hero-content">

            <span className="hero-label">
              WEATHER DASHBOARD
            </span>


            <h2>

              Know your weather.

              <span>
                Plan your day.
              </span>

            </h2>


            <p>
              Search any city to discover current
              temperature, humidity, wind speed,
              sunrise and sunset information.
            </p>

          </div>


          <div className="hero-visual">

            <div className="orbit orbit-1"></div>

            <div className="orbit orbit-2"></div>

            <div className="sun"></div>

          </div>


        </section>



        <section className="search-section">


          <div className="search-heading">

            <span>
              FIND A LOCATION
            </span>

            <h2>
              Search weather
            </h2>

          </div>


          <SearchBar
            city={city}
            setCity={setCity}
            onSearch={fetchWeather}
          />


        </section>



        {loading && <Loading />}



        {!loading && error && (

          <div className="error-card">

            <div className="error-icon">
              !
            </div>


            <div>

              <h3>
                Weather unavailable
              </h3>

              <p>
                {error}
              </p>

            </div>

          </div>

        )}



        {!loading &&
          !error &&
          weather && (

            <>
              <WeatherCard
                weather={weather}
              />

              <WeatherDetails
                weather={weather}
              />
            </>

          )}


      </main>



      <footer className="footer">


        <div className="footer-brand">

          <strong>
            Weatherly
          </strong>

          <span>
            Weather Dashboard
          </span>

        </div>


        <p>
          Powered by OpenWeatherMap API
        </p>


      </footer>


    </div>
  );
}

export default App;