import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  TextField,
  InputAdornment
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import logo from "../assets/arrive-logo.png";

export default function Header({ search, setSearch }) {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: "#fff",
        borderBottom: "3px solid #07269B"
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: 4
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          gap={2}
        >
          <img
            src={logo}
            alt="ARRIVE"
            style={{
              height: 42
            }}
          />

          <Box>
            <Typography
              fontWeight={700}
              color="#07269B"
            >
              Analytics Hub
            </Typography>

            <Typography
              fontSize={12}
              color="gray"
            >
              Executive Control Center
            </Typography>
          </Box>
        </Box>

        <TextField
          placeholder="Search dashboard..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          size="small"
          sx={{
            width: 340
          }}
          InputProps={{
            startAdornment:(
              <InputAdornment position="start">
                <SearchIcon/>
              </InputAdornment>
            )
          }}
        />
      </Toolbar>
    </AppBar>
  );
}