import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Avatar,
  Badge,
} from "@mui/material";

import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

function Header() {
  return (
    <AppBar
      position="fixed"
      elevation={1}
      sx={{
        backgroundColor: "#fff",
        color: "#222",
        zIndex: 1300,
      }}
    >
      <Toolbar>

        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "#1565C0",
          }}
        >
          ARRIVE Analytics Hub
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <Badge
          badgeContent={3}
          color="error"
          sx={{ mr: 2 }}
        >
          <IconButton>
            <NotificationsNoneIcon />
          </IconButton>
        </Badge>

        <Avatar
          sx={{
            bgcolor: "#1565C0",
            mr: 1,
          }}
        >
          M
        </Avatar>

        <Typography fontWeight="bold">
          Mohamed
        </Typography>

      </Toolbar>
    </AppBar>
  );
}

export default Header;