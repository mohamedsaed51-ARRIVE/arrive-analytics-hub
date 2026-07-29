import { Container, Typography, Grid } from "@mui/material";
import DashboardCard from "../components/DashboardCard";
import dashboards from "../data/dashboards";
import StatCard from "../components/StatCard";

function Home() {
  const activeDashboards = dashboards.filter(
    (dashboard) => dashboard.status === "active"
  );

  const comingSoonDashboards = dashboards.filter(
    (dashboard) => dashboard.status === "soon"
  );

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" fontWeight="bold">
        Executive Control Center
      </Typography>

      <Typography color="text.secondary" mb={4}>
        Welcome to ARRIVE Executive Dashboards
      </Typography>

      <Grid container spacing={3} mb={5}>
  <Grid size={{ xs: 12, sm: 6, md: 3 }}>
    <StatCard
      title="Dashboards"
      value={dashboards.length}
      color="#1976d2"
    />
  </Grid>

  <Grid size={{ xs: 12, sm: 6, md: 3 }}>
    <StatCard
      title="Active"
      value={activeDashboards.length}
      color="#2e7d32"
    />
  </Grid>

  <Grid size={{ xs: 12, sm: 6, md: 3 }}>
    <StatCard
      title="Coming Soon"
      value={comingSoonDashboards.length}
      color="#ed6c02"
    />
  </Grid>

  <Grid size={{ xs: 12, sm: 6, md: 3 }}>
    <StatCard
      title="Last Update"
      value="Today"
      color="#7b1fa2"
    />
  </Grid>
</Grid>

      <Typography variant="h5" mb={2}>
        Active Dashboards
      </Typography>

      <Grid container spacing={3}>
        {activeDashboards.map((dashboard) => (
          <Grid key={dashboard.id} size={{ xs: 12, md: 4 }}>
            <DashboardCard dashboard={dashboard} />
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" mt={6} mb={2}>
        Coming Soon
      </Typography>

      <Grid container spacing={3}>
        {comingSoonDashboards.map((dashboard) => (
          <Grid key={dashboard.id} size={{ xs: 12, md: 4 }}>
            <DashboardCard dashboard={dashboard} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;