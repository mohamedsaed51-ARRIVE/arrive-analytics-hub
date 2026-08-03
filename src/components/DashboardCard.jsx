import {
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  Box,
} from "@mui/material";

import LaunchIcon from "@mui/icons-material/Launch";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

function getIcon(name) {
  switch (name) {
    case "inventory":
      return <Inventory2Icon sx={{ fontSize: 34 }} />;
    case "shipping":
      return <LocalShippingIcon sx={{ fontSize: 34 }} />;
    case "fleet":
      return <DirectionsCarIcon sx={{ fontSize: 34 }} />;
    case "kpi":
      return <AnalyticsIcon sx={{ fontSize: 34 }} />;
    case "ai":
      return <AutoAwesomeIcon sx={{ fontSize: 34 }} />;
    case "support":
      return <SupportAgentIcon sx={{ fontSize: 34 }} />;
    default:
      return <AnalyticsIcon sx={{ fontSize: 34 }} />;
  }
}

export default function DashboardCard({ dashboard }) {
  const active = dashboard.status === "active";

  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 5,
        border: "1px solid #E5E7EB",
        height: "100%",
        transition: ".35s",

        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 18px 35px rgba(7,38,155,.12)",
          borderColor: "#22C7D9",
        },
      }}
    >
      <CardContent
        sx={{
          p: 3,
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Box
          sx={{
            width: 64,
            height: 64,
            borderRadius: 4,
            background:
              "linear-gradient(135deg,#07269B,#22C7D9)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 3,
          }}
        >
          {getIcon(dashboard.icon)}
        </Box>

        <Typography
          sx={{
            color: "#22C7D9",
            fontWeight: 700,
            fontSize: 13,
            mb: .5,
          }}
        >
          {dashboard.category}
        </Typography>

        <Typography
          variant="h6"
          fontWeight={700}
        >
          {dashboard.title}
        </Typography>

        <Typography
          color="text.secondary"
          sx={{
            mt: 1,
            mb: 3,
            flexGrow: 1,
          }}
        >
          {dashboard.description}
        </Typography>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Chip
            label={active ? "Online" : "Under Development"}
            color={active ? "success" : "warning"}
            sx={{
              fontWeight: 600,
            }}
          />

          <Button
            variant="contained"
            endIcon={<LaunchIcon />}
            disabled={!active}
            onClick={() => {
              if (active && dashboard.url) {
                window.open(dashboard.url, "_blank");
              }
            }}
            sx={{
              borderRadius: 3,
              textTransform: "none",
              px: 2.5,
              bgcolor: "#07269B",

              "&:hover": {
                bgcolor: "#0A3EC9",
              },
            }}
          >
            Launch
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}