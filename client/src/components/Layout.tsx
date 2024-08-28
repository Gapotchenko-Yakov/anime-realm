import { useTheme } from "@mui/material/styles";

import HeaderToolbar from "./HeaderToolbar/HeaderToolbar";
import { Outlet } from "react-router-dom";
import { AppBar, Toolbar } from "@mui/material";
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
    <div style={{ display: "flex" }}>
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
      <main style={{ flexGrow: 1, padding: "16px", marginLeft: drawerWidth }}>
        <Toolbar />
        <Outlet /> {/* Рендеринг дочерних маршрутов */}
      </main>
    </div>
  );
};

export default Layout;
