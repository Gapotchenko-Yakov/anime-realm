import { useTheme } from "@mui/material/styles";

import HeaderToolbar from "./HeaderToolbar/HeaderToolbar";
import { Outlet } from "react-router-dom";
import { AppBar, Box, Toolbar } from "@mui/material";
import { useComponentsStore } from "../lib/zustand/useComponentsStore";
import NavigationPanel from "./NavigationPanel";

const Layout = () => {
  const theme = useTheme();
  // const isNonMobile = useMediaQuery("(min-width: 600px)");

  const {
    NavigationPanel: { isOpen: open },
  } = useComponentsStore();

  const drawerWidth = open ? 250 : 0;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          bgcolor: theme.palette.background.alt,
        }}
      >
        <HeaderToolbar />
      </AppBar>
      <NavigationPanel drawerWidth={drawerWidth} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
          // ml: `${drawerWidth}px`,
          width: `calc(100% - ${drawerWidth}px)`,
          mt: "64px",
        }}
      >
        <Outlet /> {/* Рендеринг дочерних маршрутов */}
      </Box>
    </Box>
  );
};

export default Layout;
