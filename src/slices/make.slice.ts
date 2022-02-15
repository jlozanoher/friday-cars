import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";
import Make from "../models/make.model";
import { MakeService } from "../services";
import { CommonState } from "./CoreTypes";

interface MakeState extends CommonState {
  makes: Make[];
  selected?: Make;
}

const initialState: MakeState = {
  makes: [],
  status: "idle",
};

export const fetchMakes = createAsyncThunk("makes/fetchMakes", async () => {
  const response = await MakeService.getAll();
  return response.data;
});

export const makeSlice = createSlice({
  name: "make",
  initialState,
  reducers: {
    setMakeSelected: (state, action: PayloadAction<string | undefined>) => {
      state.selected = state.makes.find((make) => make.name === action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchMakes.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchMakes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.makes = state.makes.concat(
          action.payload.map((make: string) => ({ name: make }))
        );
      })
      .addCase(fetchMakes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setMakeSelected } = makeSlice.actions;

export const selectAllMakes = (state: RootState) => state.makes;

export const selectMakeByName = (state: RootState, name: string) =>
  state.makes.makes.find((make: Make) => make.name === name);

export default makeSlice.reducer;
