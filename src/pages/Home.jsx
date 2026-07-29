import { Box, Grid, Typography } from "@mui/material";

import StatCard from "../components/StatCard";
import DashboardCard from "../components/DashboardCard";

import dashboards from "../data/dashboards";

export default function Home() {
  return (
    <Box
      sx={{
        ml: "240px",
        mt: "64px",
        p: 4,
        background: "#F4F7FC",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h4" fontWeight="bold">
        Executive Dashboard
      </Typography>

      <Typography color="text.secondary" mb={4}>
        Welcome to ARRIVE Analytics Hub
      </Typography>

      <Grid container spacing={3} mb={5}>
        <Grid item xs={12} md={3}>
          <StatCard title="Dashboards" value="6" />
        </Grid>

        <Grid item xs={12} md={3}>
          <StatCard title="Active" value="3" color="#2E7D32" />
        </Grid>

        <Grid item xs={12} md={3}>
          <StatCard title="Coming Soon" value="3" color="#ED6C02" />
        </Grid>

        <Grid item xs={12} md={3}>
          <StatCard title="Last Update" value="Today" />
        </Grid>
      </Grid>

      <Typography variant="h5" fontWeight="bold" mb={3}>
        Dashboards
      </Typography>

      <Grid container spacing={3}>
        {dashboards.map((dashboard) => (
          <Grid item xs={12} md={4} key={dashboard.id}>
            <DashboardCard
              title={dashboard.title}
              description={dashboard.description}
              status={dashboard.status}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}