import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import HeaderToolbar from "../header-toolbar/header-toolbar";
import { useDispatch } from "react-redux";
import { actions as componentActions } from "../../store/components";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import NavigationPanel from "../navigation-panel";

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  maxWidth: "100%",
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

type PersistentDrawer = {
  Content: ReactJSXElement;
};

export default function PersistentDrawer({ Content }: PersistentDrawer) {
  const theme: any = useTheme();
  const dispatch = useDispatch();
  const open = useSelector(
    (state: RootState) => state.components.NavigationPanel.isOpen
  );

  const handleDrawerClose = () => {
    dispatch(componentActions.toggleNavIsOpen());
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        // position="fixed"
        open={open}
        sx={{ bgcolor: theme.palette.background.alt, boxShadow: 0 }}
      >
        <HeaderToolbar />
      </AppBar>
      <NavigationPanel drawerWidth={drawerWidth} />
      <Main open={open}>
        {/* <DrawerHeader /> */}
        {Content}
      </Main>
    </Box>
  );
}
