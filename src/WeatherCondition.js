export default function WeatherCondition({ weather }) {
  return (
    <div className="weather-conditions-container">
      <div className="condition-item">
        <span className="material-symbols-outlined">
          <img
            src="images/water_drop_26dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
            alt="water_drop"
          />
        </span>
        <div className="condition-info">
          <h5 className="regular-txt">Humidity</h5>
          <h5 className="humidity-value-txt">{weather.main.humidity}%</h5>
        </div>
      </div>
      <div className="condition-item">
        <span className="material-symbols-outlined">
          <img
            src="images/air_26dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
            alt="water_drop"
          />
        </span>
        <div className="condition-info">
          <h5 className="regular-txt">Wind Speed</h5>
          <h5 className="wind-value-txt">{weather.wind.speed} M/s</h5>
        </div>
      </div>
    </div>
  );
}
