// src/stores/useComponentsStore.ts
import create from "zustand";

interface ComponentsState {
  NavigationPanel: {
    isOpen: boolean;
  };
  Search: {
    query: string;
  };
  toggleNavigationPanelOpen: () => void;
  setNavigationPanelOpen: (isOpen: boolean) => void;
  setSearchQuery: (query: string) => void;
}

export const useComponentsStore = create<ComponentsState>((set) => ({
  NavigationPanel: { isOpen: false },
  Search: { query: "" },
  toggleNavigationPanelOpen: () =>
    set((state) => ({
      NavigationPanel: {
        ...state.NavigationPanel,
        isOpen: !state.NavigationPanel.isOpen,
      },
    })),
  setNavigationPanelOpen: (isOpen) =>
    set((state) => ({
      NavigationPanel: { ...state.NavigationPanel, isOpen },
    })),
  setSearchQuery: (query) =>
    set((state) => ({
      Search: { ...state.Search, query },
    })),
}));
