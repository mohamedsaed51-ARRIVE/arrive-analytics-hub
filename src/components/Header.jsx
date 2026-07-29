import { AppBar, Toolbar, Typography, Avatar, Box } from "@mui/material";

export default function Header() {
  return (
    <AppBar
      position="fixed"
      elevation={1}
      sx={{
        bgcolor: "#fff",
        color: "#111827",
        zIndex: 1300,
      }}
    >
      <Toolbar>
        <Typography variant="h6" fontWeight="bold" sx={{ flexGrow: 1 }}>
          ARRIVE Analytics Hub
        </Typography>

        <Box display="flex" alignItems="center" gap={2}>
          <Typography>Mohamed</Typography>
          <Avatar sx={{ bgcolor: "#1565C0" }}>M</Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
}