import { Button, Stack, Drawer, Link, List } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useDispatch } from "react-redux";
import { actions as componentActions } from "../../store/components";

import { styled, useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { actions } from "../../store/components";

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
  const dispatch = useDispatch();
  const isOpen = useSelector(
    (state: RootState) => state.components.NavigationPanel.isOpen
  );
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
      open={isOpen}
    >
      <DrawerHeader sx={{ color: "inherit" }}>
        <IconButton onClick={() => dispatch(actions.toggleNavIsOpen())}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
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
    </Drawer>
  );
};

const NavigationPanelOld = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(
    (state: RootState) => state.components.NavigationPanel.isOpen
  );

  return (
    <Drawer
      anchor="left"
      variant="persistent"
      open={isOpen}
      onClose={() => dispatch(componentActions.toggleNavIsOpen())}
      sx={{
        width: 200,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 200,
          boxSizing: "border-box",
        },
      }}
    >
      <Stack spacing={2} p={2}>
        <Button
          to="/"
          color="inherit"
          variant="outlined"
          aria-current="page"
          component={RouterLink}
        >
          Home
        </Button>
        <Button
          to="/anime-list"
          color="inherit"
          variant="outlined"
          component={RouterLink}
        >
          Anime List
        </Button>
        <Button
          to="/anime-page"
          color="inherit"
          variant="outlined"
          component={RouterLink}
        >
          Anime
        </Button>
        <Button
          to="/characters"
          color="inherit"
          variant="outlined"
          component={RouterLink}
        >
          Characters
        </Button>
        <Button
          to="/genres"
          color="inherit"
          variant="outlined"
          component={RouterLink}
        >
          Genres
        </Button>
        <Button
          to="/manga"
          color="inherit"
          variant="outlined"
          component={RouterLink}
        >
          Manga
        </Button>
      </Stack>
    </Drawer>
  );
};

export default NavigationPanel;
