import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Tab,
  Tabs,
  Tooltip,
  Typography,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LaunchIcon from "@mui/icons-material/Launch";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import RefreshIcon from "@mui/icons-material/Refresh";

import dashboards from "../data/dashboards";
import logo from "../assets/arrive-logo.png";

const BRAND = "#07269B";
const ACCENT = "#22C7D9";

const available = dashboards.filter(
  (d) => d.visible !== false && d.status === "active" && d.url
);

function FramePanel({ dashboard }) {
  const [loading, setLoading] = useState(true);
  const [slow, setSlow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setSlow(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box sx={{ position: "relative", flexGrow: 1 }}>
      {loading && (
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            zIndex: 1,
          }}
        >
          <CircularProgress sx={{ color: BRAND }} />
          <Typography sx={{ color: "text.secondary" }}>
            Loading {dashboard.title}...
          </Typography>

          {slow && (
            <Box sx={{ textAlign: "center" }}>
              <Typography sx={{ color: "text.secondary", mb: 1 }}>
                Taking longer than expected, or the dashboard blocks embedding.
              </Typography>
              <Button
                variant="contained"
                component="a"
                href={dashboard.url}
                target="_blank"
                rel="noopener noreferrer"
                endIcon={<LaunchIcon />}
              >
                Open in new tab
              </Button>
            </Box>
          )}
        </Box>
      )}

      <iframe
        id="dashboard-frame"
        title={dashboard.title}
        src={dashboard.url}
        onLoad={() => setLoading(false)}
        allow="fullscreen; clipboard-write"
        style={{
          border: 0,
          width: "100%",
          height: "100%",
          display: "block",
          background: "#fff",
        }}
      />
    </Box>
  );
}

export default function DashboardView() {
  const { id } = useParams();
  const navigate = useNavigate();

  const current = available.find((d) => String(d.id) === id);

  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    if (current) document.title = `${current.title} | ARRIVE`;
    return () => {
      document.title = "ARRIVE Executive Platform";
    };
  }, [current]);

  if (!current) {
    return (
      <Box sx={{ p: 6, textAlign: "center" }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Dashboard not found
        </Typography>
        <Button variant="contained" onClick={() => navigate("/home")}>
          Back to Library
        </Button>
      </Box>
    );
  }

  const goFullscreen = () => {
    document.getElementById("dashboard-frame")?.requestFullscreen?.();
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "#F4F7FC",
      }}
    >
      {/* Top bar */}

      <Box
        sx={{
          background: `linear-gradient(90deg, ${BRAND} 0%, #0A3EC9 100%)`,
          color: "#fff",
          px: 2,
          display: "flex",
          alignItems: "center",
          gap: 2,
          minHeight: 56,
        }}
      >
        <Tooltip title="Back to Library">
          <IconButton
            onClick={() => navigate("/home")}
            sx={{ color: "#fff" }}
          >
            <ArrowBackIcon />
          </IconButton>
        </Tooltip>

        <Box
          sx={{
            bgcolor: "#fff",
            borderRadius: 1.5,
            p: 0.5,
            display: { xs: "none", sm: "flex" },
          }}
        >
          <img src={logo} alt="ARRIVE" style={{ height: 28 }} />
        </Box>

        <Tabs
          value={current.id}
          onChange={(_, v) => navigate(`/dashboard/${v}`)}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          sx={{
            flexGrow: 1,
            minHeight: 56,
            "& .MuiTabs-indicator": {
              bgcolor: ACCENT,
              height: 4,
              borderRadius: "4px 4px 0 0",
            },
            "& .MuiTab-root": {
              color: "rgba(255,255,255,.75)",
              minHeight: 56,
              fontWeight: 600,
            },
            "& .Mui-selected": { color: "#fff !important" },
            "& .MuiTabScrollButton-root": { color: "#fff" },
          }}
        >
          {available.map((d) => (
            <Tab key={d.id} value={d.id} label={d.title} />
          ))}
        </Tabs>

        <Tooltip title="Reload">
          <IconButton
            onClick={() => setReloadKey((k) => k + 1)}
            sx={{ color: "#fff" }}
          >
            <RefreshIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Fullscreen">
          <IconButton onClick={goFullscreen} sx={{ color: "#fff" }}>
            <FullscreenIcon />
          </IconButton>
        </Tooltip>

        <Button
          component="a"
          href={current.url}
          target="_blank"
          rel="noopener noreferrer"
          endIcon={<LaunchIcon />}
          sx={{
            color: BRAND,
            bgcolor: ACCENT,
            borderRadius: 3,
            px: 2,
            display: { xs: "none", md: "inline-flex" },
            "&:hover": { bgcolor: "#5ADBE8" },
          }}
        >
          Open in new tab
        </Button>
      </Box>

      <FramePanel key={`${current.id}-${reloadKey}`} dashboard={current} />
    </Box>
  );
}
