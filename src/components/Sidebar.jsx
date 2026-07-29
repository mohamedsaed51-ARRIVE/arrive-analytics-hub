import {
  Drawer,
  Toolbar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from "@mui/icons-material/Home";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";

const drawerWidth = 240;

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,

        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          background: "#111827",
          color: "#fff",
        },
      }}
    >
      <Toolbar />

      <List>
        <ListItemButton selected>
          <ListItemIcon sx={{ color: "#fff" }}>
            <HomeIcon />
          </ListItemIcon>

          <ListItemText primary="Home" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon sx={{ color: "#fff" }}>
            <DashboardIcon />
          </ListItemIcon>

          <ListItemText primary="Dashboards" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon sx={{ color: "#fff" }}>
            <AssessmentIcon />
          </ListItemIcon>

          <ListItemText primary="Reports" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon sx={{ color: "#fff" }}>
            <SettingsIcon />
          </ListItemIcon>

          <ListItemText primary="Settings" />
        </ListItemButton>
      </List>
    </Drawer>
  );
}