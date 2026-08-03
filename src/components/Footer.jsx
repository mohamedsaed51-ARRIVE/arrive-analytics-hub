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
        <Box py={4}>
          <Divider sx={{ mb: 3 }} />

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap"
            gap={2}
          >
            <Box>
              <Typography
                fontWeight={700}
                color="#07269B"
              >
                ARRIVE Executive Platform
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
              >
                Enterprise Analytics & Executive Control Tower
              </Typography>
            </Box>

            <Box textAlign="right">
              <Typography
                variant="body2"
                color="text.secondary"
              >
                Version 2.0
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
              >
                © 2026 ARRIVE. All Rights Reserved.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}