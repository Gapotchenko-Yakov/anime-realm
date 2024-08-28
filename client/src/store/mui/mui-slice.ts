import { createSlice } from "@reduxjs/toolkit";
import { MuiSlice } from "../../types/redux";
import { PaletteMode } from "@mui/material";

const initialState: MuiSlice = { theme: { mode: "dark" } };

const muiSlice = createSlice({
  name: "mui",
  initialState,
  reducers: {
    toggleMode: (state, { payload: mode }: { payload: PaletteMode }) => {
      state.theme.mode = mode === "dark" ? "light" : "dark";
    },
  },
});

export const { actions, reducer } = muiSlice;
