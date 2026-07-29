import { Card, CardContent, Typography } from "@mui/material";

export default function StatCard({
  title,
  value,
  color = "#1565C0",
}) {
  return (
    <Card
      sx={{
        borderTop: `5px solid ${color}`,
        borderRadius: 3,
      }}
    >
      <CardContent>
        <Typography color="text.secondary">
          {title}
        </Typography>

        <Typography
          variant="h4"
          fontWeight="bold"
          mt={1}
        >
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}