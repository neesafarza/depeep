import { render, screen } from "@testing-library/react";
import { AppBar } from "./AppBar";

const mockProps = {
  items: [],
  hideSoldItem: false,
  setHideSoldItems: (x) => true,
};

test("renders correctly with 0 items and hide owned = true", () => {
  render(<AppBar {...mockProps} />);
  const resultsEl = screen.getByText(/0 Results/i);
  const titleEl = screen.getByText(/Depeep/i);
  const hideButtonEl = screen.getByText(/Hide Sold Items/i);
  expect(resultsEl).toBeInTheDocument();
  expect(titleEl).toBeInTheDocument();
  expect(hideButtonEl).toBeInTheDocument();
});

test("renders correctly with 1 items and hide owned = false", () => {
  mockProps.hideSoldItem = true;
  mockProps.items = [{}];
  render(<AppBar {...mockProps} />);
  const resultsEl = screen.getByText(/1 Results/i);
  const titleEl = screen.getByText(/Depeep/i);
  const hideButtonEl = screen.getByText(/Include Sold Items/i);
  expect(resultsEl).toBeInTheDocument();
  expect(titleEl).toBeInTheDocument();
  expect(hideButtonEl).toBeInTheDocument();
});
