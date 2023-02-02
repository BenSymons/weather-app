import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchForm from "../../components/SearchForm";

describe("ForecastSummary", () => {
  const validProps = {
    searchText: "Edinburgh",
    setSearchText: jest.fn(),
    onSubmit: jest.fn(),
  };

  it("renders forecast details", () => {
    const { asFragment } = render(
      <SearchForm
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.onSubmit}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders search form correctly", () => {
    render(
      <SearchForm
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.onSubmit}
      />
    );
    const buttons = screen.getAllByRole("button");
    const searchFormElement = screen.getAllByRole("search");
    const inputElement = screen.getByTestId("search-input");

    expect(buttons[0]).toHaveClass("button");
    expect(searchFormElement[0]).toContainElement(inputElement);
    expect(searchFormElement[0]).toContainElement(buttons[0]);
  });

  it("calls correct function by clicking button", () => {
    render(
      <SearchForm
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.onSubmit}
      />
    );
    fireEvent.click(screen.getByTestId("search-button"));

    expect(validProps.onSubmit).toHaveBeenCalled();
  });
});
