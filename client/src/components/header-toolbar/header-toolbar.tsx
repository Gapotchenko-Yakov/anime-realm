import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  AppBar,
  Avatar,
  Toolbar,
  Typography,
  Link,
  Button,
  Stack,
  IconButton,
  Autocomplete,
  TextField,
} from "@mui/material";

import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
  MemoryRouter,
} from "react-router-dom";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useActions } from "../../hooks";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  Menu as MenuIcon,
  Reddit as RedditIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  AutoAwesome as AutoAwesomeIcon,
  Shuffle as ShuffleIcon,
  FormatListBulleted as FormatListBulletedIcon,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { actions as componentActions } from "../../store/components";
import { useTheme } from "@mui/material";
import Search from "./components/search";

const HeaderToolbar = () => {
  const mode = useSelector((state: RootState) => state.mui.theme.mode);
  const theme: any = useTheme();
  const dispatch = useDispatch();
  const navIsOpen = useSelector(
    (state: RootState) => state.components.NavigationPanel.isOpen
  );
  const navigate = useNavigate();

  const { toggleMode } = useActions();

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
            onClick={() => dispatch(componentActions.toggleNavIsOpen())}
            aria-label="open drawer"
            // sx={{ mr: 2, ...(navIsOpen && { display: "none" }) }}
          >
            <MenuIcon fontSize="large" />
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
            to="/random"
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
          <IconButton
            sx={{ color: "inherit" }}
            onClick={(e) => toggleMode(mode)}
          >
            {mode === "dark" ? <DarkMode /> : <LightMode />}
          </IconButton>
        </Stack>
      </Stack>
    </Toolbar>
  );
};

export default HeaderToolbar;
