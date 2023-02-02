import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastSummary", () => {
  const validProps = {
    date: 1525046400000,
    humidity: 80,
    wind: {
      speed: 30,
      direction: "s",
    },
    temperature: {
      max: 12,
      min: 12,
    },
  };

  it("renders forecast details", () => {
    const { asFragment } = render(<ForecastDetails forecast={validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    const { getByTestId, getByText } = render(
      <ForecastDetails forecast={validProps} />
    );

    expect(getByText("Monday, 30 April")).toHaveAttribute(
      "class",
      "forecast-details__date"
    );
    expect(getByText("High: 12°C")).toHaveAttribute(
      "class",
      "forecast-details__max-temperature"
    );
    expect(getByText("Low: 12°C")).toHaveAttribute(
      "class",
      "forecast-details__min-temperature"
    );
    expect(getByText("Humidity: 80%")).toHaveAttribute(
      "class",
      "forecast-details__humidity"
    );
    expect(getByText("Wind: 30mph s")).toHaveAttribute(
      "class",
      "forecast-details__wind"
    );
    expect(getByTestId("temperature-div")).toContainElement(
      getByTestId("temperature-div__max")
    );
    expect(getByTestId("temperature-div")).toContainElement(
      getByTestId("temperature-div__min")
    );
  });
});
