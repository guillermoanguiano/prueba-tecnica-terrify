import React from "react";
import { AppBar, Box, Container, IconButton, Toolbar, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export function Navbar() {
  return (
    <AppBar component="nav" color="inherit" position="sticky">
      <Container maxWidth="lg">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Guillermo
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            size="small"
          >
            <AccountCircleIcon fontSize="large" />
          </IconButton>
        </Box>
      </Toolbar>
      </Container>
    </AppBar>
  );
}
