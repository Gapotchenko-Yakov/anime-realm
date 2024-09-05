import { Drawer, IconButton, List, Stack } from "@mui/material";

import { styled, useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useComponentsStore } from "../lib/zustand/useComponentsStore";
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
import { Link as RouterLink } from "react-router-dom";

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

const NavigationPanel = ({ drawerWidth }: NavigationPanelProps) => {
  const { NavigationPanel } = useComponentsStore();

  const theme: any = useTheme();

  return (
    <Drawer
      sx={{
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
      <DrawerHeader sx={{ color: "inherit", ml: "1.5rem", mr: "auto" }}>
        <Typography variant="h6" textAlign="left">
          Navigation Panel
        </Typography>
      </DrawerHeader>
      <Divider />
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Stack
        spacing={0}
        direction="row"
        sx={{ display: { xs: "none", md: "flex" } }}
      >
        <IconButton sx={{ color: "inherit" }} to="#" component={RouterLink}>
          <FacebookIcon fontSize="large" />
        </IconButton>
        <IconButton sx={{ color: "inherit" }} to="#" component={RouterLink}>
          <InstagramIcon fontSize="large" />
        </IconButton>
        <IconButton sx={{ color: "inherit" }} to="#" component={RouterLink}>
          <TwitterIcon fontSize="large" />
        </IconButton>
        <IconButton sx={{ color: "inherit" }} to="#" component={RouterLink}>
          <RedditIcon fontSize="large" />
        </IconButton>
        <IconButton sx={{ color: "inherit" }} to="#" component={RouterLink}>
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
        <IconButton to="/chat" component={RouterLink} sx={{ color: "inherit" }}>
          <ChatIcon fontSize="large" />
        </IconButton>
      </Stack>
    </Drawer>
  );
};

export default NavigationPanel;
