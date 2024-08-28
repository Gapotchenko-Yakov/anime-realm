import { createSlice } from "@reduxjs/toolkit";
import { ComponentsSlice } from "../../types/redux";

const initialState: ComponentsSlice = {
  NavigationPanel: {
    isOpen: false,
  },
  Search: {
    query: "",
  },
};

const componentsSlice = createSlice({
  name: "components",
  initialState,
  reducers: {
    toggleNavIsOpen: (state) => {
      state.NavigationPanel.isOpen = !state.NavigationPanel.isOpen;
    },
    changeQuery: (state, { payload }: { payload: string }) => {
      state.Search.query = payload;
    },
  },
});

export const { actions, reducer } = componentsSlice;
