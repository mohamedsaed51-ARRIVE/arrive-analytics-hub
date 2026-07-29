import {
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  Box
} from "@mui/material";

import LaunchIcon from "@mui/icons-material/Launch";

export default function DashboardCard({ dashboard }) {
  const active = dashboard.status === "active";

  return (
    <Card
      elevation={3}
      sx={{
        borderRadius: 4,
        transition: ".3s",

        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: 8
        }
      }}
    >
      <CardContent>

        <Typography
          variant="h6"
          fontWeight="bold"
        >
          {dashboard.icon} {dashboard.title}
        </Typography>

        <Typography
          color="text.secondary"
          mt={1}
          mb={3}
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
          />

          <Button
            variant="contained"
            disabled={!active}
            endIcon={<LaunchIcon />}
            onClick={() => {
              if (active && dashboard.url) {
                window.open(dashboard.url, "_blank");
              }
            }}
          >
            Open
          </Button>
        </Box>

      </CardContent>
    </Card>
  );
}