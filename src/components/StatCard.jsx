import {
  Paper,
  Typography,
  Box,
} from "@mui/material";

export default function StatCard({
  icon,
  title,
  value,
  color,
}) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 4,
        border: "1px solid #E5E7EB",
        background: "#FFFFFF",
        transition: "0.3s",
        height: "100%",

        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 12px 28px rgba(0,0,0,.08)",
          borderColor: color,
        },
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          sx={{
            width: 58,
            height: 58,
            borderRadius: 3,
            bgcolor: color,
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            "& svg": {
              fontSize: 30,
            },
          }}
        >
          {icon}
        </Box>

        <Typography
          variant="h3"
          fontWeight={700}
          color="#0F172A"
        >
          {value}
        </Typography>
      </Box>

      <Box mt={3}>
        <Typography
          variant="subtitle1"
          fontWeight={700}
          color="#334155"
        >
          {title}
        </Typography>
      </Box>
    </Paper>
  );
}