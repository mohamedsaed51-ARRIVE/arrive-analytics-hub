import { Card, CardContent, Typography } from "@mui/material";

function StatCard({ title, value, color }) {
  return (
    <Card
      elevation={3}
      sx={{
        borderLeft: `6px solid ${color}`,
        borderRadius: 3,
      }}
    >
      <CardContent>
        <Typography
          variant="h4"
          fontWeight="bold"
        >
          {value}
        </Typography>

        <Typography
          color="text.secondary"
          sx={{ mt: 1 }}
        >
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default StatCard;