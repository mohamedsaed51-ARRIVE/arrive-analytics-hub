import { useState } from "react";

import {
  Box,
  Grid,
  Typography,
} from "@mui/material";

import Header from "../components/Header";
import DashboardCard from "../components/DashboardCard";
import StatCard from "../components/StatCard";
import Footer from "../components/Footer";

import dashboards from "../data/dashboards";

import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import VerifiedIcon from "@mui/icons-material/Verified";
import ConstructionIcon from "@mui/icons-material/Construction";
import UpdateIcon from "@mui/icons-material/Update";

export default function Home() {
  const [search, setSearch] = useState("");

  // الداشبوردات الظاهرة فقط
  const visibleDashboards = dashboards.filter(
    (d) => d.visible !== false
  );

  // البحث
  const filtered = visibleDashboards.filter((d) =>
    d.title.toLowerCase().includes(search.toLowerCase())
  );

  // ترتيب الـ Online أولاً
  const sorted = [...filtered].sort((a, b) => {
    if (a.status === b.status) return 0;
    return a.status === "active" ? -1 : 1;
  });

  // الإحصائيات
  const total = visibleDashboards.length;

  const active = visibleDashboards.filter(
    (d) => d.status === "active"
  ).length;

  const coming = visibleDashboards.filter(
    (d) => d.status === "coming"
  ).length;

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
        {/* Page Title */}

        <Box mb={5}>
          <Typography
            variant="h4"
            fontWeight={700}
            color="#07269B"
          >
            Executive Dashboards
          </Typography>

          <Typography
            color="text.secondary"
            mt={1}
          >
            Central access to all ARRIVE executive dashboards.
          </Typography>
        </Box>

        {/* Statistics */}

        <Grid container spacing={3} mb={5}>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              icon={<SpaceDashboardIcon />}
              title="Dashboards"
              value={total}
              color="#07269B"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              icon={<VerifiedIcon />}
              title="Online"
              value={active}
              color="#16A34A"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              icon={<ConstructionIcon />}
              title="Under Development"
              value={coming}
              color="#F59E0B"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              icon={<UpdateIcon />}
              title="Version"
              value="2.0"
              color="#22C7D9"
            />
          </Grid>
        </Grid>

        {/* Dashboards */}

        <Typography
          variant="h5"
          fontWeight={700}
          mb={3}
        >
          Available Dashboards
        </Typography>

        <Grid container spacing={3}>
          {sorted.map((dashboard) => (
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

        <Footer />
      </Box>
    </>
  );
}