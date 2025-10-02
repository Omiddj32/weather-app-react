export default function WeatherSummary({ weather, onWeatherIcon }) {
  return (
    <div className="weather-summary-container">
      <img
        src={"assets/" + onWeatherIcon(weather.weather.at(0).id)}
        alt="Weather JPG"
        className="weather-summary-img"
      />
      <div className="weather-summary-info">
        <h1 className="temp-txt">{Math.round(weather.main.temp)} °C</h1>
        <h3 className="condition-txt regular-txt">
          {weather.weather.at(0).main}
        </h3>
      </div>
    </div>
  );
}
