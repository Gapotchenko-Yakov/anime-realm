// src/stores/useComponentsStore.ts
import create from "zustand";

interface ComponentsState {
  NavigationPanel: {
    isOpen: boolean;
  };
  Search: {
    query: string;
  };
  setNavigationPanelOpen: (isOpen: boolean) => void;
  setSearchQuery: (query: string) => void;
}

export const useComponentsStore = create<ComponentsState>((set) => ({
  NavigationPanel: { isOpen: false },
  Search: { query: "" },
  setNavigationPanelOpen: (isOpen) =>
    set((state) => ({
      NavigationPanel: { ...state.NavigationPanel, isOpen },
    })),
  setSearchQuery: (query) =>
    set((state) => ({
      Search: { ...state.Search, query },
    })),
}));
