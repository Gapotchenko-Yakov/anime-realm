import { useMemo } from "react";

import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Layout } from "./components";
import { CssBaseline, Stack, ThemeProvider, createTheme } from "@mui/material";
import { themeSettings } from "./mui/theme";
import { AnimePage, AnimeList, Home } from "./pages";
import AnimeInfo from "./pages/AnimeInfo";
import { useThemeStore } from "./lib/zustand/useThemeStore";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NotFoundPage from "./pages/NotFoundPage";
import Chat from "./components/Chat";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ClubsPage from "./pages/ClubsPage";
import MangaInfoContainer from "./pages/MangaInfoContainer";
import CharactersPage from "./pages/CharactersPage";
import CharacterInfo from "./pages/CharacterInfo";
import TopPage from "./pages/top/TopPage";

const App = () => {
  const { mode: themeMode } = useThemeStore();

  const queryClient = new QueryClient();

  const theme = useMemo(
    () => createTheme(themeSettings(themeMode)),
    [themeMode]
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="home/" element={<Home />} />
              <Route path="anime/" element={<AnimePage />} />
              <Route path="manga/" element={<MangaInfoContainer />} />
              <Route path="clubs/" element={<ClubsPage />} />
              <Route path="top/" element={<TopPage />} />

              <Route path="anime-list/" element={<AnimeList />} />
              <Route path="characters/" element={<CharactersPage />} />
              <Route path="genres/" element={<Home />} />
              <Route
                path="chat/"
                element={
                  <Stack direction="row" spacing={3}>
                    <Chat userId="Yakov" />
                    <Chat userId="John" />
                    <Chat userId="Jack" />
                  </Stack>
                }
              />
              <Route path="anime-info/:id" element={<AnimeInfo />} />
              <Route path="character-info/:id" element={<CharacterInfo />} />

              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
