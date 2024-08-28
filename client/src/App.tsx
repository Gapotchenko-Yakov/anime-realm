import { useMemo } from "react";

import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Layout } from "./components";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { themeSettings } from "./mui/theme";
import { RootState } from "./store";
import { AnimePage, AnimeList, Home } from "./pages";
import AnimeInfo from "./pages/AnimeInfo";

const App = () => {
  const mode = useSelector((state: RootState) => state.mui.theme.mode);

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  // const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    <Box
      sx={{
        bgcolor: theme.palette.background.default,
        width: "100%",
        height: "100%",
      }}
    >
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="home/" element={<Home />} />
              <Route path="anime-page/" element={<AnimePage />} />
              <Route path="anime-list/" element={<AnimeList />} />
              <Route path="characters/" element={<Home />} />
              <Route path="genres/" element={<Home />} />
              <Route path="manga/" element={<Home />} />
              <Route path="anime-info/:animeId" element={<AnimeInfo />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </Box>
  );
};

export default App;
