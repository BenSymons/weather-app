import React from "react";
import PropTypes from "prop-types";
import "../styles/ForecastDetails.css";

function ForecastDetails({ forecast }) {
  const { date, humidity, temperature, wind } = forecast;
  const options = { weekday: "long", month: "long", day: "numeric" };
  const formattedDate = new Date(date).toLocaleDateString("en-GB", options);

  return (
    <div className="forecast-details" data-testid="forecast-details">
      <div className="forecast-details__date">
        <h2 className="forecast-details__date">{formattedDate}</h2>
      </div>
      <div
        className="forecast-details__temperature"
        data-testid="temperature-div"
      >
        <div
          className="forecast-details__max-temperature"
          data-testid="temperature-div__max"
        >
          High: {temperature.max}
          &deg;C
        </div>
        <div
          className="forecast-details__min-temperature"
          data-testid="temperature-div__min"
        >
          Low: {temperature.min}
          &deg;C
        </div>
      </div>
      <div className="forecast-details__humidity">Humidity: {humidity}%</div>
      <div className="forecast-details__wind">
        Wind: {wind.speed}mph {wind.direction}
      </div>
    </div>
  );
}

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number,
    humidity: PropTypes.number,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }).isRequired,
    temperature: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }).isRequired,
  }).isRequired,
};

export default ForecastDetails;
