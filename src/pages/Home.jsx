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

  // ترتيب: Online أولاً
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
        {/* عنوان الصفحة */}

        <Box
          sx={{ mb: 4, 
            p: { xs: 3, md: 4 },
            borderRadius: 4,
            color: "#fff",
            background:
              "linear-gradient(120deg,#07269B 0%,#0A3EC9 65%,#22C7D9 130%)",
            position: "relative",
            overflow: "hidden",
            "&::after": {
              content: '""',
              position: "absolute",
              right: -60,
              top: -80,
              width: 260,
              height: 260,
              borderRadius: "50%",
              background: "rgba(255,255,255,.08)",
            },
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 800 }}>
            Dashboard Library
          </Typography>

          <Typography sx={{ mt: 1,  opacity: 0.9 }}>
            Access and manage all ARRIVE dashboards from one place.
          </Typography>
        </Box>

        {/* الإحصائيات */}

        <Grid container spacing={3} mb={5}>
          <Grid size={{ xs: 12, md: 4 }}>
            <StatCard
              icon={<SpaceDashboardIcon />}
              title="Dashboards"
              value={total}
              color="#07269B"
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <StatCard
              icon={<VerifiedIcon />}
              title="Online"
              value={active}
              color="#16A34A"
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <StatCard
              icon={<ConstructionIcon />}
              title="Under Development"
              value={coming}
              color="#F59E0B"
            />
          </Grid>
        </Grid>

        {/* عنوان القسم */}

        <Typography
          variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
          Available Dashboards
        </Typography>

        {/* الداشبوردات */}

        <Grid container spacing={3}>
          {sorted.map((dashboard) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
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