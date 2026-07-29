import {
  Box,
  Typography,
  Grid,
  Divider
} from "@mui/material";

import dashboards from "../data/dashboards";
import DashboardCard from "../components/DashboardCard";

const sections = [
  "Operations",
  "Executive",
  "Customer Experience"
];

export default function Home() {
  return (
    <Box
      sx={{
        background: "#F4F7FC",
        minHeight: "100vh",
        p: 5
      }}
    >
      {/* Header */}

      <Box textAlign="center" mb={6}>
        <Typography
          variant="h3"
          fontWeight="bold"
        >
          ARRIVE Analytics Hub
        </Typography>

        <Typography
          color="text.secondary"
          mt={1}
        >
          Executive Control Center
        </Typography>
      </Box>

      {sections.map((section) => (
        <Box key={section} mb={7}>
          <Typography
            variant="h4"
            fontWeight="bold"
            mb={2}
          >
            {section}
          </Typography>

          <Divider sx={{ mb: 3 }} />

          <Grid container spacing={3}>
            {dashboards
              .filter((d) => d.category === section)
              .map((dashboard) => (
                <Grid
                  item
                  xs={12}
                  md={4}
                  key={dashboard.id}
                >
                  <DashboardCard dashboard={dashboard} />
                </Grid>
              ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
}