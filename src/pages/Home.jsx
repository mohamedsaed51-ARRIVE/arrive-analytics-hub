import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  TextField,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import dashboards from "../data/dashboards";

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#F4F7FC",
        p: 5,
      }}
    >
      {/* Header */}

      <Typography
        variant="h3"
        fontWeight="bold"
        textAlign="center"
      >
        ARRIVE Analytics Hub
      </Typography>

      <Typography
        textAlign="center"
        color="text.secondary"
        mt={1}
        mb={4}
      >
        Executive Control Center
      </Typography>

      {/* Search */}

      <TextField
        fullWidth
        placeholder="Search Dashboard..."
        InputProps={{
          startAdornment: <SearchIcon sx={{ mr: 1 }} />,
        }}
        sx={{
          mb: 5,
          bgcolor: "#fff",
        }}
      />

      {/* Section */}

      <Typography variant="h5" fontWeight="bold" mb={3}>
        Executive Dashboards
      </Typography>

      <Grid container spacing={3}>
        {dashboards.map((item) => (
          <Grid item xs={12} md={4} key={item.id}>
            <Card
              sx={{
                borderRadius: 4,
                transition: ".3s",

                "&:hover": {
                  transform: "translateY(-6px)",
                },
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                >
                  {item.title}
                </Typography>

                <Typography
                  color="text.secondary"
                  mt={1}
                  mb={3}
                >
                  {item.description}
                </Typography>

                <Chip
                  label={
                    item.status === "active"
                      ? "Active"
                      : "Coming Soon"
                  }
                  color={
                    item.status === "active"
                      ? "success"
                      : "warning"
                  }
                />

                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3 }}
                  disabled={item.status !== "active"}
                >
                  {item.status === "active"
                    ? "Open Dashboard"
                    : "Coming Soon"}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}