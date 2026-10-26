import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#0F172A",
        color: "#fff",
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: "bold" }}>
        ARRIVE
      </Typography>

      <Typography variant="h5" sx={{ mt: 2 }}>
        Executive Analytics Platform
      </Typography>

      <Typography sx={{ mt: 1, color: "grey.400" }}>
        One Platform • All Executive Dashboards
      </Typography>

      <Button
        variant="contained"
        size="large"
        sx={{ mt: 5 }}
        onClick={() => navigate("/home")}
      >
        Enter Dashboard
      </Button>
    </Box>
  );
}