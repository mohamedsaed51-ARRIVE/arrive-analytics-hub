import {
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  Box,
} from "@mui/material";

function DashboardCard({ dashboard }) {
  const active = dashboard.status === "active";

  return (
    <Card elevation={4}>
      <CardContent>
        <Typography variant="h6">
          {dashboard.title}
        </Typography>

        <Typography sx={{ mt: 1 }}>
          {dashboard.description}
        </Typography>

        <Chip
          label={active ? "Active" : "Coming Soon"}
          color={active ? "success" : "warning"}
          sx={{ mt: 2 }}
        />

        <Box mt={2}>
          <Button
            variant={active ? "contained" : "outlined"}
            disabled={!active}
            fullWidth
          >
            {active ? "Open Dashboard" : "Coming Soon"}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default DashboardCard;