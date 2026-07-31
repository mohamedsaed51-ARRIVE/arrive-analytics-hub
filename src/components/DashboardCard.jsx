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
import AssessmentIcon from "@mui/icons-material/Assessment";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const icons = {
  inventory: <Inventory2Icon fontSize="large" />,
  shipping: <LocalShippingIcon fontSize="large" />,
  fleet: <DirectionsCarIcon fontSize="large" />,
  kpi: <AssessmentIcon fontSize="large" />,
  ai: <SmartToyIcon fontSize="large" />,
  support: <SupportAgentIcon fontSize="large" />,
};

export default function DashboardCard({ dashboard }) {
  const active = dashboard.status === "active";

  return (
    <Card
      elevation={0}
      sx={{
        height: "100%",
        borderRadius: 4,
        border: "1px solid #E5E7EB",
        transition: "0.3s",

        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 10px 30px rgba(7,38,155,.15)",
          borderColor: "#22C7D9",
        },
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          p: 3,
        }}
      >
        <Box
          sx={{
            width: 60,
            height: 60,
            borderRadius: 3,
            bgcolor: "#07269B",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 2,
          }}
        >
          {icons[dashboard.icon]}
        </Box>

        <Typography variant="h6" fontWeight={700}>
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
            label={active ? "Active" : "Coming Soon"}
            color={active ? "success" : "warning"}
            size="small"
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
              borderRadius: 2,
              bgcolor: "#07269B",

              "&:hover": {
                bgcolor: "#0A3EC9",
              },
            }}
          >
            Open
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}