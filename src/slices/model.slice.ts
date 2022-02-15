import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";
import Model from "../models/model.model";
import { ModelService } from "../services";
import { CommonState } from "./CoreTypes";

interface ModelState extends CommonState {
  models: Model[];
  selected?: Model;
}

const initialState: ModelState = {
  models: [],
  status: "idle",
};

export const fetchModels = createAsyncThunk(
  "models/fetchModels",
  async (make?: string) => {
    if (!make) return [];
    const response = await ModelService.getAll(make);
    return response.data;
  }
);

export const modelSlice = createSlice({
  name: "model",
  initialState,
  reducers: {
    setModelSelected: (state, action: PayloadAction<string | undefined>) => {
      state.selected = state.models.find(
        (make) => make.name === action.payload
      );
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchModels.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchModels.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.models = action.payload.map((model: string) => ({ name: model }));
      })
      .addCase(fetchModels.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setModelSelected } = modelSlice.actions;

export const selectAllModels = (state: RootState) => state.models;

export const selectModelByName = (state: RootState, name: string) =>
  state.models.models.find((model: Model) => model.name === name);

export default modelSlice.reducer;
