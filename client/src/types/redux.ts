import { PaletteMode } from "@mui/material";
import { RootState, AppDispatch } from "../store";

export type MuiSlice = {
  theme: {
    mode: PaletteMode;
  };
};

export type ComponentsSlice = {
  NavigationPanel: {
    isOpen: boolean;
  };
  Search: {
    query: string;
  };
};

export type { RootState, AppDispatch };
