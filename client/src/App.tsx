import { useMemo } from "react";

import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Layout } from "./components";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { themeSettings } from "./mui/theme";
import { AnimePage, AnimeList, Home } from "./pages";
import AnimeInfo from "./pages/AnimeInfo";
import { useThemeStore } from "./lib/zustand/useThemeStore";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NotFoundPage from "./pages/NotFoundPage";
import Chat from "./components/Chat";

const App = () => {
  const { mode: themeMode } = useThemeStore();

  const queryClient = new QueryClient();

  const theme = useMemo(
    () => createTheme(themeSettings(themeMode)),
    [themeMode]
  );
  // const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="home/" element={<Home />} />
              <Route path="anime-page/" element={<AnimePage />} />
              <Route path="anime-list/" element={<AnimeList />} />
              <Route path="characters/" element={<Home />} />
              <Route path="genres/" element={<Home />} />
              <Route path="manga/" element={<Home />} />
              <Route path="chat/" element={<Chat />} />
              <Route path="anime-info/:animeId" element={<AnimeInfo />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
