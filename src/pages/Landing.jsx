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
      <Typography variant="h2" fontWeight="bold">
        ARRIVE
      </Typography>

      <Typography mt={2} variant="h5">
        Executive Analytics Platform
      </Typography>

      <Typography mt={1} color="grey.400">
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