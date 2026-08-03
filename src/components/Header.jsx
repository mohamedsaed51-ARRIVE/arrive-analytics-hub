import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  TextField,
  InputAdornment,
  Chip,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import VerifiedIcon from "@mui/icons-material/Verified";
import logo from "../assets/arrive-logo.png";

export default function Header({ search, setSearch }) {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "#FFFFFF",
        borderBottom: "1px solid #E2E8F0",
      }}
    >
      <Toolbar
        sx={{
          minHeight: 88,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* Left */}

        <Box
          display="flex"
          alignItems="center"
          gap={2.5}
        >
          <img
            src={logo}
            alt="ARRIVE"
            style={{
              height: 58,
              width: "auto",
            }}
          />

          <Box>
            <Typography
              sx={{
                fontSize: 26,
                fontWeight: 800,
                color: "#07269B",
                lineHeight: 1.1,
              }}
            >
              ARRIVE Executive Platform
            </Typography>

            <Typography
              sx={{
                color: "#64748B",
                fontSize: 14,
                mt: 0.5,
              }}
            >
              Enterprise Dashboards & Executive Control
            </Typography>
          </Box>
        </Box>

        {/* Right */}

        <Box
          display="flex"
          alignItems="center"
          gap={2}
        >
          <Chip
            icon={<VerifiedIcon />}
            label="System Online"
            sx={{
              bgcolor: "#ECFDF5",
              color: "#16A34A",
              fontWeight: 700,
              borderRadius: 3,
            }}
          />

          <Chip
            label="Version 2.0"
            sx={{
              bgcolor: "#EEF6FF",
              color: "#07269B",
              fontWeight: 700,
              borderRadius: 3,
            }}
          />

          <TextField
            size="small"
            placeholder="Search dashboards..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{
              width: 360,

              "& .MuiOutlinedInput-root": {
                borderRadius: 3,
                background: "#F8FAFC",

                "& fieldset": {
                  borderColor: "#E5E7EB",
                },

                "&:hover fieldset": {
                  borderColor: "#22C7D9",
                },

                "&.Mui-focused fieldset": {
                  borderColor: "#07269B",
                  borderWidth: 2,
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="primary" />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}