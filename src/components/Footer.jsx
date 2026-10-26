import {
  Box,
  Container,
  Typography,
  Divider,
} from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        mt: 8,
        background: "#FFFFFF",
        borderTop: "1px solid #E5E7EB",
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ py: 4 }}>
          <Divider sx={{ mb: 3 }} />

          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 2 }}>
            <Box>
              <Typography sx={{ fontWeight: 700, color: "#07269B" }}>
                ARRIVE Executive Platform
              </Typography>

              <Typography
                variant="body2" sx={{ color: "text.secondary" }}>
                Enterprise Analytics & Executive Control Tower
              </Typography>
            </Box>

            <Box sx={{ textAlign: "right" }}>
              <Typography
                variant="body2" sx={{ color: "text.secondary" }}>
                Version 2.0
              </Typography>

              <Typography
                variant="body2" sx={{ color: "text.secondary" }}>
                © 2026 ARRIVE. All Rights Reserved.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}