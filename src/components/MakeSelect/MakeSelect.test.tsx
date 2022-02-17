import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import MakeSelect from "./MakeSelect";
import { render, screen, fireEvent } from "../../helpers/test-utils/test-utils";
import { testUrl } from "../../helpers/test-utils/testUrl";

export const handlers = [
  rest.get(testUrl("/api/makes"), (req, res, ctx) => {
    return res(ctx.json(["AUDI", "MERCEDES", "BMW"]), ctx.delay(150));
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

test("fetches all makes and populate select component", async () => {
  render(<MakeSelect />);
  // should show the spinner
  expect(screen.getByTestId("loader")).toBeInTheDocument();
  // should show makes has a placeholder of input
  expect(await screen.findByPlaceholderText("Make")).toBeInTheDocument();
  // should show the options
  expect(await screen.findByText(/AUDI/i)).toBeInTheDocument();
  expect(await screen.findByText(/BMW/i)).toBeInTheDocument();
  expect(await screen.findByText(/MERCEDES/i)).toBeInTheDocument();
  fireEvent.click(screen.getByText(/BMW/i));
  // after clicking the BMW option, the input value has to be BMW
  expect(screen.getByPlaceholderText("Make")).toHaveValue("BMW");
});
