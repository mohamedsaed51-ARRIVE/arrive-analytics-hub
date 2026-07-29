import {
  Card,
  CardContent,
  Typography,
  Chip,
  Button,
} from "@mui/material";

export default function DashboardCard({
  title,
  description,
  status,
}) {
  return (
    <Card
      sx={{
        height: "100%",
        borderRadius: 3,
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          fontWeight="bold"
        >
          {title}
        </Typography>

        <Typography
          mt={1}
          color="text.secondary"
        >
          {description}
        </Typography>

        <Chip
          sx={{ mt: 3 }}
          label={status === "active" ? "Active" : "Coming Soon"}
          color={status === "active" ? "success" : "warning"}
        />

        <Button
          fullWidth
          variant="contained"
          disabled={status !== "active"}
          sx={{ mt: 3 }}
        >
          {status === "active"
            ? "Open Dashboard"
            : "Coming Soon"}
        </Button>
      </CardContent>
    </Card>
  );
}