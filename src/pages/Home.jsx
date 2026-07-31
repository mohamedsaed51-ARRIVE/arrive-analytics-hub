import { useState } from "react";

import {
  Box,
  Grid,
  Typography,
} from "@mui/material";

import Header from "../components/Header";
import DashboardCard from "../components/DashboardCard";
import StatCard from "../components/StatCard";
import dashboards from "../data/dashboards";

import DashboardIcon from "@mui/icons-material/Dashboard";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ScheduleIcon from "@mui/icons-material/Schedule";
import UpdateIcon from "@mui/icons-material/Update";

export default function Home() {
  const [search, setSearch] = useState("");

  const filtered = dashboards.filter((d) =>
    d.title.toLowerCase().includes(search.toLowerCase())
  );

  const total = dashboards.length;
  const active = dashboards.filter(
    (d) => d.status === "active"
  ).length;
  const coming = total - active;

  return (
    <>
      <Header
        search={search}
        setSearch={setSearch}
      />

      <Box
        sx={{
          background: "#F4F7FC",
          minHeight: "100vh",
          p: 4,
        }}
      >
        <Typography
          variant="h4"
          fontWeight={700}
          mb={1}
        >
          Executive Control Center
        </Typography>

        <Typography
          color="text.secondary"
          mb={4}
        >
          Manage all ARRIVE executive dashboards from one platform.
        </Typography>

        <Grid container spacing={3} mb={5}>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              icon={<DashboardIcon />}
              title="Dashboards"
              value={total}
              color="#07269B"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              icon={<CheckCircleIcon />}
              title="Active"
              value={active}
              color="#16A34A"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              icon={<ScheduleIcon />}
              title="Coming Soon"
              value={coming}
              color="#F59E0B"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              icon={<UpdateIcon />}
              title="Last Update"
              value="Today"
              color="#22C7D9"
            />
          </Grid>
        </Grid>

        <Typography
          variant="h5"
          fontWeight={700}
          mb={3}
        >
          Executive Dashboards
        </Typography>

        <Grid container spacing={3}>
          {filtered.map((dashboard) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={dashboard.id}
            >
              <DashboardCard dashboard={dashboard} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}