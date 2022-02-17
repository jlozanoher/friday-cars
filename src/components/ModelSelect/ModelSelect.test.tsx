import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, screen, fireEvent } from "../../helpers/test-utils/test-utils";
import { testUrl } from "../../helpers/test-utils/testUrl";
import ModelSelect from "./ModelSelect";

export const handlers = [
  rest.get(testUrl("/api/models"), (req, res, ctx) => {
    return res(ctx.json(["1er", "2er", "3er", "4er"]), ctx.delay(150));
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

test("fetches all models and populate select component", async () => {
  render(<ModelSelect make="BMW" />);
  // should show the spinner
  expect(screen.getByTestId("loader")).toBeInTheDocument();

  // should show makes has a placeholder of input
  expect(await screen.findByPlaceholderText("Model")).toBeInTheDocument();

  // should show the options
  expect(await screen.findByText(/1er/i)).toBeInTheDocument();
  expect(await screen.findByText(/3er/i)).toBeInTheDocument();
  expect(await screen.findByText(/4er/i)).toBeInTheDocument();

  fireEvent.click(screen.getByText(/3er/i));

  // after clicking the BMW option, the input value has to be BMW
  expect(screen.getByPlaceholderText("Model")).toHaveValue("3er");
});
