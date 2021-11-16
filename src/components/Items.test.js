import { render, screen, waitFor } from "@testing-library/react";
import { ItemList } from "./Items";
import { getItems } from "../ApiService";

jest.mock("../ApiService", () => {
  return {
    getItems: jest.fn(),
  };
});

test("Display list of products correctly", async () => {
  getItems.mockResolvedValue([]);
  render(<ItemList />);
  const resultsEl = await waitFor(() => screen.getByTestId("item-list"));
  const errorEl = await waitFor(() => screen.queryByTestId("get-items-error"));
  expect(resultsEl).toBeInTheDocument();
  expect(errorEl).not.toBeInTheDocument();
});

test("renders error message when failed to fetch result", async () => {
  getItems.mockRejectedValue("A bad error");
  render(<ItemList />);
  const errorEl = await waitFor(() => screen.getByTestId("get-items-error"));
  expect(errorEl).toBeInTheDocument();
});
