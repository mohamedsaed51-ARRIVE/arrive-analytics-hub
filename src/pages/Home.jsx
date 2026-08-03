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

import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import VerifiedIcon from "@mui/icons-material/Verified";
import ConstructionIcon from "@mui/icons-material/Construction";
import SyncIcon from "@mui/icons-material/Sync";

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

  // Active أولاً
  const sorted = [...filtered].sort((a, b) => {
    if (a.status === b.status) return 0;
    return a.status === "active" ? -1 : 1;
  });
const activeDashboards = sorted.filter(
  (d) => d.status === "active"
);

const comingDashboards = sorted.filter(
  (d) => d.status === "coming"
);
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
          p: { xs: 2, md: 4 },
        }}
      >
        {/* Hero */}

        <Box
          sx={{
            mb: 5,
            p: 5,
            borderRadius: 5,
            background:
              "linear-gradient(135deg,#07269B 0%,#0B43D9 60%,#22C7D9 100%)",
            color: "#fff",
            boxShadow: "0 20px 45px rgba(7,38,155,.20)",
          }}
        >
          <Typography
            variant="h3"
            fontWeight={800}
          >
            ARRIVE Executive Platform
          </Typography>

          <Typography
            sx={{
              mt: 1,
              opacity: .9,
              fontSize: 18,
            }}
          >
            Enterprise Analytics & Executive Control Tower
          </Typography>

          <Box
            display="flex"
            gap={2}
            flexWrap="wrap"
            mt={4}
          >
            <Box
              sx={{
                bgcolor: "rgba(255,255,255,.15)",
                px: 2,
                py: 1,
                borderRadius: 3,
              }}
            >
              📊 Analytics
            </Box>

            <Box
              sx={{
                bgcolor: "rgba(255,255,255,.15)",
                px: 2,
                py: 1,
                borderRadius: 3,
              }}
            >
              🚚 Operations
            </Box>

            <Box
              sx={{
                bgcolor: "rgba(255,255,255,.15)",
                px: 2,
                py: 1,
                borderRadius: 3,
              }}
            >
              🤖 AI Ready
            </Box>

            <Box
              sx={{
                bgcolor: "rgba(255,255,255,.15)",
                px: 2,
                py: 1,
                borderRadius: 3,
              }}
            >
              📈 Executive Insights
            </Box>
          </Box>
        </Box>

        {/* Stats */}

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
              icon={<SyncIcon />}
              title="Version"
              value="V2.0"
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

      </Box>
    </>
  );
}