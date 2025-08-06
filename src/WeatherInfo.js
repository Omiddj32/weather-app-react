export default function WeatherInfo({ children, weather }) {
  return (
    <>
      {weather.name && <section className="weather-info">{children}</section>}
    </>
  );
}
