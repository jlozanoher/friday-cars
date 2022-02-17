import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, screen, fireEvent } from "./helpers/test-utils/test-utils";
import { testUrl } from "./helpers/test-utils/testUrl";
import App from "./App";

export const handlers = [
  rest.get(testUrl("/api/makes"), (req, res, ctx) => {
    return res(ctx.json(["AUDI", "MERCEDES", "BMW"]), ctx.delay(150));
  }),
  rest.get(testUrl("/api/models"), (req, res, ctx) => {
    return res(ctx.json(["1er", "2er", "3er", "4er"]), ctx.delay(150));
  }),
  rest.get(testUrl("/api/vehicles"), (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 0,
          make: "BMW",
          model: "3er",
          enginePowerPS: 184,
          enginePowerKW: 300,
          fuelType: "Diesel",
          bodyType: "Limousine",
          engineCapacity: 1998,
        },
        {
          id: 1,
          make: "BMW",
          model: "3er",
          enginePowerPS: 150,
          enginePowerKW: 278,
          fuelType: "Diesel",
          bodyType: "Limousine",
          engineCapacity: 1995,
        },
      ]),
      ctx.delay(150)
    );
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

test("renders App and all vehicles with a make and model specified", async () => {
  render(<App />);

  // should show makes has a placeholder of input
  expect(await screen.findByPlaceholderText("Make")).toBeInTheDocument();

  // should show the different options of makes
  expect(screen.getByText(/BMW/i)).toBeInTheDocument();

  // Select the make: BMW
  fireEvent.click(screen.getByText(/BMW/i));
  // The test BMW should be inside the input
  expect(screen.getByPlaceholderText("Make")).toHaveValue("BMW");

  // The models of BMW have been loaded after selecting BMW make
  expect(await screen.findByText("2er")).toBeInTheDocument();
  expect(await screen.findByText("3er")).toBeInTheDocument();

  // Select the model 3er
  fireEvent.click(screen.getByText(/3er/i));

  // There should be two vehicles listed
  expect(await screen.findByTestId(`Vehicle0`)).toBeInTheDocument();
  expect(screen.getByTestId("Vehicle1")).toBeInTheDocument();
  // Only two vehicles, not a third
  expect(screen.queryByTestId("Vehicle2")).not.toBeInTheDocument();

  // Click on a Vehicle Card
  fireEvent.click(screen.getByTestId("Vehicle1"));

  // Vehicles details must be opened in the modal
  expect(screen.getByTestId("VehicleDetails1")).toBeInTheDocument();
  // Button Select in the details component
  expect(screen.getByText("Select")).toBeInTheDocument();

  // Selecting a vehicle, Click on select button
  fireEvent.click(screen.getByText("Select"));
  // There is the Unselect button after selecting
  expect(screen.getByText("Unselect")).toBeInTheDocument();
  // The Vehicle card in the list must be selected, and has also has the class "selected"
  expect(screen.getByTestId("Vehicle1")).toHaveClass("selected");
  // There is also the badge on Cart component (located in Header), announcing that there is a vehicle selected
  expect(screen.getByTestId("Badge")).toBeInTheDocument();

  // Unselecting the vehicle
  fireEvent.click(screen.getByText("Unselect"));
  // The Select button is back
  expect(screen.getByText("Select")).toBeInTheDocument();
  // The vehicle card on the list is no longer selected
  expect(screen.getByTestId("Vehicle1")).not.toHaveClass("selected");
  // There is no badge in the Cart component
  expect(screen.queryByTestId("Badge")).not.toBeInTheDocument();

  // Closing the modal
  fireEvent.click(screen.getByText("x"));
  expect(screen.queryByTestId("VehicleDetails1")).not.toBeInTheDocument();
});
