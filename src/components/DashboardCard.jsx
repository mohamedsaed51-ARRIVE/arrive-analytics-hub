import { useNavigate } from "react-router-dom";
import {
  Card,
  Typography,
  Button,
  Chip,
  Box,
  IconButton,
  Tooltip,
} from "@mui/material";

import LaunchIcon from "@mui/icons-material/Launch";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn";
import AltRouteIcon from "@mui/icons-material/AltRoute";
import FactCheckIcon from "@mui/icons-material/FactCheck";

function getIcon(name) {
  switch (name) {
    case "inventory":
      return <Inventory2Icon sx={{ fontSize: 30 }} />;

    case "shipping":
      return <LocalShippingIcon sx={{ fontSize: 30 }} />;

    case "fleet":
      return <DirectionsCarIcon sx={{ fontSize: 30 }} />;

    case "kpi":
      return <AnalyticsIcon sx={{ fontSize: 30 }} />;

    case "ai":
      return <AutoAwesomeIcon sx={{ fontSize: 30 }} />;

    case "support":
      return <SupportAgentIcon sx={{ fontSize: 30 }} />;

    case "returns":
      return <AssignmentReturnIcon sx={{ fontSize: 30 }} />;

    case "middlemile":
      return <AltRouteIcon sx={{ fontSize: 30 }} />;

    case "audit":
      return <FactCheckIcon sx={{ fontSize: 30 }} />;

    default:
      return <AnalyticsIcon sx={{ fontSize: 30 }} />;
  }
}

export default function DashboardCard({ dashboard }) {
  const navigate = useNavigate();
  const active = dashboard.status === "active" && dashboard.url;

  return (
    <Card
      elevation={0}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 4,
        border: "1px solid #E5E7EB",
        overflow: "hidden",
        transition: "all .3s ease",
        opacity: active ? 1 : 0.85,

        "&:hover": {
          transform: active ? "translateY(-6px)" : "none",
          boxShadow: "0 18px 40px rgba(7,38,155,.14)",
          borderColor: active ? "#22C7D9" : "#E5E7EB",
        },
      }}
    >
      {/* Brand header band */}

      <Box
        sx={{
          position: "relative",
          height: 96,
          px: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "#fff",
          background: active
            ? "linear-gradient(135deg,#07269B 0%,#0A3EC9 60%,#22C7D9 140%)"
            : "linear-gradient(135deg,#64748B,#94A3B8)",
          overflow: "hidden",

          "&::after": {
            content: '""',
            position: "absolute",
            right: -30,
            top: -40,
            width: 130,
            height: 130,
            borderRadius: "50%",
            background: "rgba(255,255,255,.10)",
          },
        }}
      >
        <Box
          sx={{
            width: 56,
            height: 56,
            borderRadius: 3,
            bgcolor: "rgba(255,255,255,.18)",
            border: "1px solid rgba(255,255,255,.35)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
          }}
        >
          {getIcon(dashboard.icon)}
        </Box>

        <Chip
          size="small"
          label={dashboard.category}
          sx={{
            zIndex: 1,
            bgcolor: "#fff",
            color: "#07269B",
            fontWeight: 700,
          }}
        />
      </Box>

      {/* Content */}

      <Box
        sx={{
          p: 3,
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 800, color: "#0F172A" }}>
          {dashboard.title}
        </Typography>

        <Typography
          sx={{ color: "#64748B", mt: 0.5, mb: 3, flexGrow: 1, lineHeight: 1.6 }}
        >
          {dashboard.description}
        </Typography>

        {/* Footer */}

        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                bgcolor: active ? "#16A34A" : "#F59E0B",
                boxShadow: active
                  ? "0 0 0 4px rgba(22,163,74,.18)"
                  : "0 0 0 4px rgba(245,158,11,.18)",
              }}
            />
            <Typography
              fontSize={14} sx={{ fontWeight: 700, color: active ? "#16A34A" : "#B45309" }}>
              {active ? "Online" : "Coming Soon"}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            {active && (
              <Tooltip title="Open in new tab">
                <IconButton
                  size="small"
                  component="a"
                  href={dashboard.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: "#07269B" }}
                >
                  <LaunchIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            )}

            <Button
              variant="contained"
              disabled={!active}
              endIcon={<ArrowForwardIcon />}
              onClick={() => navigate(`/dashboard/${dashboard.id}`)}
              sx={{
                borderRadius: 3,
                bgcolor: "#07269B",
                px: 2.5,
                "&:hover": { bgcolor: "#0A3EC9" },
              }}
            >
              Open
            </Button>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}
