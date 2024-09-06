import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

import { useComponentsStore } from "../../lib/zustand/useComponentsStore";
import HeaderToolbar from "./HeaderToolbar";
import NavigationPanel from "./NavigationPanel";

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

// type PersistentDrawer = {
//   Content: ReactJSXElement;
// };

export default function PersistentDrawer({ Content }: any) {
  const theme: any = useTheme();
  const {
    NavigationPanel: { isOpen: open },
  } = useComponentsStore();

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
