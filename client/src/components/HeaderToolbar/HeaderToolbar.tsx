import {
  Avatar,
  Toolbar,
  Typography,
  Button,
  Stack,
  IconButton,
} from "@mui/material";

import { Link as RouterLink } from "react-router-dom";
import { DarkMode, LightMode } from "@mui/icons-material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  Reddit as RedditIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  AutoAwesome as AutoAwesomeIcon,
  Shuffle as ShuffleIcon,
  FormatListBulleted as FormatListBulletedIcon,
  Chat as ChatIcon,
} from "@mui/icons-material";
import { useTheme } from "@mui/material";
import Search from "./components/Search";
import { useThemeStore } from "../../lib/zustand/useThemeStore";
import { useComponentsStore } from "../../lib/zustand/useComponentsStore";
import { getRandomInt } from "../../lib/utils";
import { useEffect, useState } from "react";

const MIN_ANIME_FULL_ID = 1,
  MAX_ANIME_FULL_ID = 6528,
  RANDOM_ANIME_INTERVAL = 40000;

const HeaderToolbar = () => {
  const { mode, toggleMode } = useThemeStore();
  const theme: any = useTheme();
  const {
    NavigationPanel: { isOpen: navIsOpen },
    toggleNavigationPanelOpen,
  } = useComponentsStore();

  const [randomAnimeId, setRandomAnimeId] = useState(20);

  useEffect(() => {
    const generateId = () => getRandomInt(MIN_ANIME_FULL_ID, MAX_ANIME_FULL_ID);

    setRandomAnimeId(generateId());

    const interval = setInterval(
      () => setRandomAnimeId(generateId()),
      RANDOM_ANIME_INTERVAL
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <Toolbar
      sx={{
        color: theme.palette.secondary[100],
        bgcolor: "inherit",
        height: "100%",
      }}
    >
      <Stack
        direction="row"
        spacing={4}
        justifyContent="space-between"
        alignItems="center"
        width="100%"
      >
        <Stack
          spacing={1}
          direction="row"
          justifyContent="space-between"
          alignItems={"center"}
        >
          <IconButton
            size="large"
            color="inherit"
            edge="start"
            onClick={() => toggleNavigationPanelOpen()}
            aria-label="open drawer"
            // sx={{ mr: 2, ...(navIsOpen && { display: "none" }) }}
          >
            {navIsOpen ? (
              <ChevronLeftIcon fontSize="large" />
            ) : (
              <ChevronRightIcon fontSize="large" />
            )}
          </IconButton>
          <Avatar
            src="./favicon-bleach.png"
            alt="Anime Logo"
            sx={{ width: 40, height: 40 }}
          />
          <Typography variant="h6" component="div" fontSize="large">
            AnimeDB
          </Typography>
        </Stack>

        <Search />

        <Stack
          spacing={0}
          direction="row"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <IconButton sx={{ color: "inherit" }} href="">
            <FacebookIcon fontSize="large" />
          </IconButton>
          <IconButton sx={{ color: "inherit" }} href="">
            <InstagramIcon fontSize="large" />
          </IconButton>
          <IconButton sx={{ color: "inherit" }} href="">
            <TwitterIcon fontSize="large" />
          </IconButton>
          <IconButton sx={{ color: "inherit" }} href="">
            <RedditIcon fontSize="large" />
          </IconButton>
          <IconButton sx={{ color: "inherit" }} href="">
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </Stack>

        <Stack spacing={0} direction="row">
          <IconButton
            to="/anime-page"
            component={RouterLink}
            sx={{ color: "inherit" }}
          >
            <FormatListBulletedIcon fontSize="large" />
          </IconButton>
          <IconButton
            to={`/anime-info/${20}`}
            component={RouterLink}
            sx={{ color: "inherit" }}
          >
            <ShuffleIcon fontSize="large" />
          </IconButton>
          <IconButton
            to="/popular"
            component={RouterLink}
            sx={{ color: "inherit" }}
          >
            <AutoAwesomeIcon fontSize="large" />
          </IconButton>
          <IconButton
            to="/chat"
            component={RouterLink}
            sx={{ color: "inherit" }}
          >
            <ChatIcon fontSize="large" />
          </IconButton>
        </Stack>
        <Stack spacing={1} direction="row">
          <Button
            sx={{ color: "inherit" }}
            variant="outlined"
            data-collapse-toggle="navbar-default"
            type="button"
            aria-controls="navbar-default"
            aria-expanded="true"
          >
            Menu
          </Button>
          <IconButton sx={{ color: "inherit" }} onClick={() => toggleMode()}>
            {mode === "dark" ? <DarkMode /> : <LightMode />}
          </IconButton>
        </Stack>
      </Stack>
    </Toolbar>
  );
};

export default HeaderToolbar;
