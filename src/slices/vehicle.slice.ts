import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";
import Vehicle from "../models/vehicle.model";
import { VehicleService } from "../services";
import { CommonState } from "./CoreTypes";

interface VehicleState extends CommonState {
  vehicles: Vehicle[];
  search?: string;
  selected?: Vehicle;
  detailsOpen?: boolean;
}

const initialState: VehicleState = {
  vehicles: [],
  status: "idle",
};

export const fetchVehicles = createAsyncThunk(
  "vehicles/fetchVehicles",
  async ({ make, model }: { make?: string; model?: string }) => {
    if (!make || !model) return [];
    const response = await VehicleService.getAll(make, model);
    return response.data;
  }
);

export const vehicleSlice = createSlice({
  name: "vehicle",
  initialState,
  reducers: {
    setVehicleSearch: (state, action: PayloadAction<string | undefined>) => {
      state.search = action.payload;
    },
    setVehicleSelected: (state, action: PayloadAction<Vehicle | undefined>) => {
      state.selected = action.payload;
    },
    setDetailsOpen: (state, action: PayloadAction<boolean | undefined>) => {
      state.detailsOpen = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchVehicles.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchVehicles.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.vehicles = action.payload.map((v: Vehicle, i: number) => ({
          ...v,
          id: i,
        }));
      })
      .addCase(fetchVehicles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setVehicleSearch, setVehicleSelected, setDetailsOpen } =
  vehicleSlice.actions;

export const selectAllVehicles = (state: RootState) => state.vehicles;

export default vehicleSlice.reducer;
