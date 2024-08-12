import { useState, useEffect } from "react";
import { useColorMode } from "../../style/ColorModeContext";
import {
  Badge,
  Button,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useMediaQuery } from "@mui/material";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import Logo from "../../assets/Logo.png";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import "./Sidebar.css";
import ThemeBtn from "../ThemeBtn/ThemeBtn";
import ProfilePlan from "../ProfilePlan/ProfilePlan";
const drawerWidth = 264;

let menuItems = [
  {
    name: `Chat Generator`,
    path: `/`,
    icon: <ForumOutlinedIcon sx={{ fontSize: { xs: "20px", uxl: "28px" } }} />,
  },

  {
    name: "Feedback",
    path: `/feedback`,
    icon: (
      <FeedbackOutlinedIcon sx={{ fontSize: { xs: "20px", uxl: "28px" } }} />
    ),
  },
  {
    name: "Prompt Library ",
    path: `/feedback`,
    icon: (
      <FeedbackOutlinedIcon sx={{ fontSize: { xs: "20px", uxl: "28px" } }} />
    ),
    BadgeValue: 23,
  },
  {
    name: "My Saves",
    path: `/feedback`,
    icon: (
      <FeedbackOutlinedIcon sx={{ fontSize: { xs: "20px", uxl: "28px" } }} />
    ),
    BadgeValue: 23,
  },
  {
    name: "Favorite",
    path: `/feedback`,
    icon: (
      <FeedbackOutlinedIcon sx={{ fontSize: { xs: "20px", uxl: "28px" } }} />
    ),
    BadgeValue: 23,
  },
  {
    name: "History",
    path: `/feedback`,
    icon: (
      <FeedbackOutlinedIcon sx={{ fontSize: { xs: "20px", uxl: "28px" } }} />
    ),
    BadgeValue: 23,
  },
  {
    name: "Statistics",
    path: `/feedback`,
    icon: (
      <FeedbackOutlinedIcon sx={{ fontSize: { xs: "20px", uxl: "28px" } }} />
    ),
  },
];
let menuItems2 = [
  {
    name: `Settings`,
    path: `/settings`,
    icon: <ForumOutlinedIcon sx={{ fontSize: { xs: "20px", uxl: "28px" } }} />,
    // BadgeValue:0
  },

  {
    name: "Logout",
    path: `/logout`,
    icon: (
      <FeedbackOutlinedIcon sx={{ fontSize: { xs: "20px", uxl: "28px" } }} />
    ),
  },
];

const Sidebar = (props) => {
  const { toggleColorMode } = useColorMode();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isMobile = useMediaQuery("(max-width: 600px)");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div
      style={{
        padding: "16px",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        height: "-webkit-fill-available",
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "left",
            alignContent: "middle",
            padding: "16px",
            borderBottom: "1px solid #3F4B6B",
            height: "64px",
            width: "100%",
          }}
        >
          <img
            style={{
              width: "max-content",
              objectFit: "cover",
              cursor: "pointer",
              position: "sticky",
            }}
            src={Logo}
            alt="logo"
          
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            borderBottom: "1px solid #3F4B6B",
            mt: 2,
          }}
        >
          <List sx={{ display: "flex", flexDirection: "column", gap: '4px' }}>
            {menuItems.map((page, index) => (
              <ListItemButton
                key={index}
                sx={{
                  fontSize: "14px",
                  height: "42px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius:
                    location.pathname === page.path ? "4px" : "none",
                  backgroundColor:
                    location.pathname === page.path ? "#F08D86" : "transparent",
                  "&.Mui-selected": {
                    backgroundColor: "#F08D86", 
                    "&:hover": {
                      backgroundColor: "#F08D86",
                    },
                  },
                  "&:hover": {
                    backgroundColor: "#F08D86", 
                    borderRadius: "4px",
                  },
                }}
                selected={location.pathname === page.path}
              >
                {page.badgeContent ? (
                  <ListItemIcon
                    sx={{
                      width: "24px",
                      height: "24px",
                      color: "#0f0f0f!important",
                      minWidth: "24px",
                    }}
                  >
                    {page.icon}
                  </ListItemIcon>
                ) : (
                  <ListItemIcon
                    sx={{
                      width: "20px",
                      height: "20px",
                      minWidth: "20px",
                      color:
                        location.pathname === page.path ? "#0F1E46" : "#FBFBFC",
                      mr: 2,
                    }}
                  >
                    {page.icon}
                  </ListItemIcon>
                )}
                <ListItemText
                  primary={page.name}
                  primaryTypographyProps={{
                    color:
                      location.pathname === page.path ? "#0F1E46" : "#FBFBFC",
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                  }}
                  sx={{
                    "&:hover": {
                      color: "#0F1E46!important",
                    },
                  }}
                />
                {page.BadgeValue && (
                  <Badge badgeContent={page.BadgeValue} color="primary"></Badge>
                )}
              </ListItemButton>
            ))}
          </List>
        </Box>
        <Box
          sx={{
            width: "100%",
            borderBottom: "1px solid #3F4B6B",
            // mt: 2,
          }}
        >
          <List sx={{ display: "flex", flexDirection: "column", gap: '4px' }}>
            {menuItems2.map((page, index) => (
              <ListItemButton
                key={index}
                sx={{
                  fontSize: "14px",
                  height: "42px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius:
                    location.pathname === page.path ? "4px" : "none",
                  backgroundColor:
                    location.pathname === page.path ? "#F08D86" : "transparent",
                  "&.Mui-selected": {
                    backgroundColor: "#F08D86", 
                    "&:hover": {
                      backgroundColor: "#F08D86",
                    },
                  },
                  "&:hover": {
                    backgroundColor: "#F08D86", 
                    borderRadius: "4px",
                  },
                }}
                selected={location.pathname === page.path}
                // onClick={(e) => handleNavigate(e, page.path)}
              >
                {page.badgeContent ? (
                  <ListItemIcon
                    sx={{
                      width: "24px",
                      height: "24px",
                      color: "#0f0f0f!important",
                      minWidth: "24px",
                    }}
                  >
                    {page.icon}
                  </ListItemIcon>
                ) : (
                  <ListItemIcon
                    sx={{
                      width: "20px",
                      height: "20px",
                      minWidth: "20px",
                      color:
                        location.pathname === page.path ? "#0F1E46" : "#FBFBFC",
                      mr: 2,
                    }}
                  >
                    {page.icon}
                  </ListItemIcon>
                )}
                <ListItemText
                  primary={page.name}
                  primaryTypographyProps={{
                    color:
                      location.pathname === page.path ? "#0F1E46" : "#FBFBFC",
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                  }}
                  sx={{
                    "&:hover": {
                      color: "#0F1E46!important",
                    },
                  }}
                />
                {page.BadgeValue && (
                  <Badge badgeContent={page.BadgeValue} color="primary"></Badge>
                )}
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Box>
      <Box>
        <ThemeBtn />
        <ProfilePlan
          username={"Adam Williams"}
          mail={"Info@gmail.com"}
          currentPlan={"Basic"}
          btnText={"Upgrade To Pro"}
        />
      </Box>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline sx={{ display: { xs: "block", sm: "none" } }} />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          display: { xs: "block", sm: "none" },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive Sidebar
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#0F1E46",
              border: "none",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Sidebar;
