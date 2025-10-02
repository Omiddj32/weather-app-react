export default function LocationInfo({ weather, onCurrentDate }) {
  return (
    <div className="location-date-container">
      <div className="location">
        <span className="material-symbols-outlined">
          <img
            src="images/location_on_26dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
            alt="Location_icon"
          />
        </span>
        <h4 className="country-txt">{weather.name}</h4>
      </div>
      <h5 className="current-dat-txt regular-txt">{onCurrentDate()}</h5>
    </div>
  );
}
