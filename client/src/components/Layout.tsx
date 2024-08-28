import { Outlet } from "react-router-dom";
import { AppBar, useMediaQuery } from "@mui/material";

import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

import PersistentDrawer from "../persistent-drawer/persistent-drawer";
import NavigationPanel from "./NavigationPanel";
import HeaderToolbar from "./HeaderToolbar/HeaderToolbar";

const Layout = () => {
  const theme = useTheme();
  const isNonMobile = useMediaQuery("(min-width: 600px)");

  return (
    <Box
      width="100%"
      height="100%"
      sx={{ bgcolor: theme.palette.background.default }}
    >
      <AppBar
        // position="fixed"
        sx={{
          bgcolor: theme.palette.background.alt,
          // boxShadow: 0,
          position: "static",
        }}
      >
        <HeaderToolbar />
      </AppBar>
      <Outlet />
    </Box>
  );
};

export default Layout;
