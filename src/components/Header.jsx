import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import logo from "../assets/arrive-logo.png";

export default function Header({ search, setSearch }) {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "#FFFFFF",
        borderBottom: "1px solid #E5E7EB",
      }}
    >
      <Toolbar
        sx={{
          height: 82,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box display="flex" alignItems="center" gap={2}>
          <img
            src={logo}
            alt="ARRIVE"
            style={{
              height: 56,
              width: "auto",
            }}
          />

          <Box>
            <Typography
              sx={{
                fontSize: 24,
                fontWeight: 700,
                color: "#07269B",
                lineHeight: 1.1,
              }}
            >
              ARRIVE Analytics Hub
            </Typography>

            <Typography
              sx={{
                color: "#64748B",
                fontSize: 14,
              }}
            >
              Executive Control Center
            </Typography>
          </Box>
        </Box>

        <TextField
          size="small"
          placeholder="Search dashboards..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            width: 340,
            "& .MuiOutlinedInput-root": {
              borderRadius: 3,
              background: "#F8FAFC",
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Toolbar>
    </AppBar>
  );
}