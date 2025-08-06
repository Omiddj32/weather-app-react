import { useEffect, useState } from "react";
import Main from "./Main";
import Navbar from "./Navbar";
import Search from "./Search";
import EntryMessage from "./EntryMessage";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import WeatherInfo from "./WeatherInfo";
import LocationInfo from "./LocationInfo";
import WeatherSummary from "./WeatherSummary";
import WeatherCondition from "./WeatherCondition";

const KEY = "cc998a05629ce7e8b99ce48ee8b447fb";

export default function App() {
  const [query, setQuery] = useState("");
  const [isSearched, setIsSearched] = useState(false);
  const [weather, setWeather] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  function handleWeatherIcon(id) {
    if (id >= 200 && id <= 232) return "11d@2x.png";
    if (id >= 300 && id <= 321) return "9d@2x.png";
    if (id >= 500 && id <= 531) return "10d@2x.png";
    if (id >= 600 && id <= 622) return "13d@2x.png";
    if (id >= 701 && id <= 781) return "50d@2x.png";
    if (id === 800) return "01d@2x.png";
    if (id === 801) return "02d@2x.png";
    if (id === 802) return "03d@2x.png";
    if (id === 803 || id === 804) return "04d@2x.png";
  }

  function handleCurrentDate() {
    const currentDate = new Date();
    const options = {
      weekday: "short",
      day: "2-digit",
      month: "short",
    };
    return currentDate.toLocaleDateString("en-GB", options);
  }

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchWether() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${KEY}&units=metric`
          );

          if (!res.ok)
            throw new Error("Somthing went wrong with fetching wearher info");

          const data = await res.json();
          setWeather(data);
        } catch (err) {
          if (err.name !== "AbortError") setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setWeather([]);
        setError("");
        return;
      }

      fetchWether();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  useEffect(
    function () {
      if (query.length > 2 && !error) document.title = `Weather | ${query}`;

      return function () {
        document.title = "Weather App ☁️";
      };
    },
    [query, error]
  );

  return (
    <Main>
      <Navbar>
        <Search
          query={query}
          setQuery={setQuery}
          searched={isSearched}
          setSearched={setIsSearched}
        />
      </Navbar>
      {isLoading && <Loader />}

      {!query && <EntryMessage />}

      {!isLoading && !error && (
        <WeatherInfo weather={weather}>
          <LocationInfo weather={weather} onCurrentDate={handleCurrentDate} />
          <WeatherSummary weather={weather} onWeatherIcon={handleWeatherIcon} />
          <WeatherCondition weather={weather} />
        </WeatherInfo>
      )}

      {error && <ErrorMessage message={error} />}
    </Main>
  );
}
