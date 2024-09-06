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
  Movie as MovieIcon,
  Person as PersonIcon,
  RateReview as RateReviewIcon,
  Star as StarIcon,
  Book as BookIcon,
} from "@mui/icons-material";
import { useTheme } from "@mui/material";
import Search from "./components/Search";
import { useThemeStore } from "../../lib/zustand/useThemeStore";
import { useComponentsStore } from "../../lib/zustand/useComponentsStore";

const HeaderToolbar = () => {
  const { mode, toggleMode } = useThemeStore();
  const theme: any = useTheme();
  const {
    NavigationPanel: { isOpen: navIsOpen },
    toggleNavigationPanelOpen,
  } = useComponentsStore();

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
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
            component={RouterLink}
            to="/"
            sx={{ color: "inherit" }}
          >
            <Avatar
              src="./favicon-bleach.png"
              alt="Anime Logo"
              sx={{ width: 40, height: 40 }}
            />
            <Typography variant="h6" component="div" fontSize="large">
              AnimeRealm
            </Typography>
          </Stack>
        </Stack>

        <Search />

        <Stack spacing={0} direction="row">
          <IconButton
            to="/anime"
            component={RouterLink}
            sx={{ color: "inherit" }}
          >
            <MovieIcon fontSize="large" />
          </IconButton>
          <IconButton
            to="/characters"
            component={RouterLink}
            sx={{ color: "inherit" }}
          >
            <PersonIcon fontSize="large" />
          </IconButton>
          <IconButton
            to="/reviews"
            component={RouterLink}
            sx={{ color: "inherit" }}
          >
            <RateReviewIcon fontSize="large" />
          </IconButton>
          <IconButton
            to="/top"
            component={RouterLink}
            sx={{ color: "inherit" }}
          >
            <StarIcon fontSize="large" />
          </IconButton>
          <IconButton
            to="/manga"
            component={RouterLink}
            sx={{ color: "inherit" }}
          >
            <BookIcon fontSize="large" />
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
