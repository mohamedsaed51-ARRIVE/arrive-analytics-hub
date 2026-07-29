import {
  Drawer,
  Toolbar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  Box,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";

const drawerWidth = 240;

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          background: "#0F172A",
          color: "white",
        },
      }}
    >
      <Toolbar />

      <Box sx={{ p: 3 }}>
        <Typography
          variant="h6"
          fontWeight="bold"
        >
          ARRIVE
        </Typography>

        <Typography
          variant="body2"
          sx={{ opacity: .7 }}
        >
          Executive Platform
        </Typography>
      </Box>

      <Divider sx={{ bgcolor: "#334155" }} />

      <List>

        <ListItemButton selected>
          <ListItemIcon sx={{ color: "white" }}>
            <HomeIcon />
          </ListItemIcon>

          <ListItemText primary="Home" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon sx={{ color: "white" }}>
            <DashboardIcon />
          </ListItemIcon>

          <ListItemText primary="Dashboards" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon sx={{ color: "white" }}>
            <AssessmentIcon />
          </ListItemIcon>

          <ListItemText primary="Reports" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon sx={{ color: "white" }}>
            <SettingsIcon />
          </ListItemIcon>

          <ListItemText primary="Settings" />
        </ListItemButton>

      </List>

    </Drawer>
  );
}