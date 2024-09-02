import { useTheme } from "@mui/material/styles";

import HeaderToolbar from "./HeaderToolbar/HeaderToolbar";
import { Outlet } from "react-router-dom";
import { AppBar, Box, Toolbar, Container } from "@mui/material";
import { useComponentsStore } from "../lib/zustand/useComponentsStore";
import NavigationPanel from "./NavigationPanel";

const Layout = () => {
  const theme = useTheme();
  // const isNonMobile = useMediaQuery("(min-width: 600px)");

  const {
    NavigationPanel: { isOpen: open },
  } = useComponentsStore();

  const drawerWidth = open ? 250 : 0;
  const appBarHeight = 64;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          height: `${appBarHeight}px`,
          ml: `${drawerWidth}px`,
          bgcolor: theme.palette.background.alt,
        }}
      >
        <HeaderToolbar />
      </AppBar>
      <NavigationPanel drawerWidth={drawerWidth} />
      <Container
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
          // ml: `${drawerWidth}px`,
          width: `calc(100% - ${drawerWidth}px)`,
          height: `calc(100vh - ${appBarHeight}px)`,
          mt: `${appBarHeight}px`,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          // bgcolor: "red",
        }}
      >
        <Outlet /> {/* Рендеринг дочерних маршрутов */}
      </Container>
    </Box>
  );
};

export default Layout;
