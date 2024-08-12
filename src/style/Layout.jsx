import React from "react";
import Sidebar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";

const Layout = () => {
  const drawerWidth = 264;

  return (
    <>
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          marginLeft: { xs: 0, sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ display: { xs: "block", sm: "none" } }} />
        <Outlet />
      </Box>
    </>
  );
};
export default Layout;
