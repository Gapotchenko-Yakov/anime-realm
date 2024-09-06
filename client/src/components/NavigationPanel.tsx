import { Drawer, IconButton, List, Stack } from "@mui/material";

import { styled, Theme, useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useComponentsStore } from "../lib/zustand/useComponentsStore";
import {
  Reddit as RedditIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  AutoAwesome as AutoAwesomeIcon,
  FormatListBulleted as FormatListBulletedIcon,
  Chat as ChatIcon,
  Group as GroupIcon,
  Category as CategoryIcon,
  LibraryBooks as LibraryBooksIcon,
  People as PeopleIcon,
  Business as BusinessIcon,
  Shuffle as ShuffleIcon,
  ThumbUp as ThumbUpIcon,
  CalendarToday as CalendarTodayIcon,
  AccountCircle as AccountCircleIcon,
  WbSunny as WbSunnyIcon,
} from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { getRandomInt } from "../lib/utils";

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

type NavigationPanelProps = {
  drawerWidth: number;
};

// const MIN_ANIME_FULL_ID = 1,
//   MAX_ANIME_FULL_ID = 6528,
//   RANDOM_ANIME_INTERVAL = 40000;

const NavigationPanel = ({ drawerWidth }: NavigationPanelProps) => {
  const { NavigationPanel } = useComponentsStore();

  const theme: Theme = useTheme();

  const navLinks = [
    {
      icon: <FormatListBulletedIcon />,
      label: "Anime Page",
      link: "/anime",
    },
    {
      icon: <ShuffleIcon />,
      label: "Anime Info",
      link: `/anime-info/20`,
    },
    {
      icon: <AutoAwesomeIcon />,
      label: "Popular",
      link: "/popular",
    },
    { icon: <ChatIcon />, label: "Chat", link: "/chat" },
  ];

  const drawerLinks = [
    { icon: <GroupIcon />, label: "Clubs", link: "/clubs" },
    { icon: <CategoryIcon />, label: "Genres", link: "/genres" },
    { icon: <LibraryBooksIcon />, label: "Magazines", link: "/magazines" },
    { icon: <PeopleIcon />, label: "People", link: "/people" },
    { icon: <BusinessIcon />, label: "Producers", link: "/producers" },
    { icon: <ShuffleIcon />, label: "Random", link: "/random" },
    {
      icon: <ThumbUpIcon />,
      label: "Recommendations",
      link: "/recommendations",
    },
    { icon: <CalendarTodayIcon />, label: "Schedules", link: "/schedules" },
    { icon: <AccountCircleIcon />, label: "Users", link: "/users" },
    { icon: <WbSunnyIcon />, label: "Seasons", link: "/seasons" },
  ];

  const socialLinks = [
    { icon: <FacebookIcon fontSize="large" />, label: "Facebook", link: "#" },
    { icon: <InstagramIcon fontSize="large" />, label: "Instagram", link: "#" },
    { icon: <TwitterIcon fontSize="large" />, label: "Twitter", link: "#" },
    { icon: <LinkedInIcon fontSize="large" />, label: "LinkedIn", link: "#" },
    { icon: <RedditIcon fontSize="large" />, label: "Reddit", link: "#" },
  ];

  return (
    <Drawer
      sx={{
        color: theme.palette.secondary[200],
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          bgcolor: theme.palette.background.alt,
        },
      }}
      variant="persistent"
      anchor="left"
      open={NavigationPanel.isOpen}
    >
      <DrawerHeader
        sx={{ color: theme.palette.secondary[100], ml: "1.5rem", mr: "auto" }}
      >
        <Typography variant="h6" textAlign="left">
          Navigation Panel
        </Typography>
      </DrawerHeader>
      <Divider />
      <List sx={{ color: theme.palette.secondary[200] }}>
        {navLinks.map(({ icon, label, link }) => (
          <ListItem
            key={label}
            disablePadding
            to={link}
            component={RouterLink}
            sx={{ color: "inherit" }}
          >
            <ListItemButton>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List sx={{ color: theme.palette.secondary[200] }}>
        {drawerLinks.map(({ icon, label, link }) => (
          <ListItem
            key={label}
            disablePadding
            to={link}
            component={RouterLink}
            sx={{ color: "inherit" }}
          >
            <ListItemButton>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />{" "}
      <Stack
        direction="row"
        sx={{
          color: theme.palette.secondary[200],
          mt: 2,
          justifyContent: "space-between",
          position: "fixed",
          left: "7px",
          bottom: "7px",
        }}
      >
        {socialLinks.map(({ icon, label, link }) => (
          <IconButton
            key={label}
            to={link}
            component={RouterLink}
            sx={{ color: "inherit" }}
          >
            {icon}
          </IconButton>
        ))}
      </Stack>
    </Drawer>
  );
};

export default NavigationPanel;
