import { Box, Typography } from "@mui/material";

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{ display: "flex", justifyContent: "center", py: 3, px: 1 }}
    >
      <Typography variant="body2" color="text.secondary">
        © 2024 Guillermo Anguiano. All rights reserved.
      </Typography>
    </Box>
  );
}
