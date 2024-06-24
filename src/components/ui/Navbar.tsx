import React from "react";
import {
  AppBar,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { ShoppingCart } from "@mui/icons-material";

export function Navbar() {
  return (
    <AppBar component="nav" color="inherit" position="sticky" >
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Guillermo
          </Typography>
          <Stack direction="row" spacing={2}>
            <IconButton color="inherit" aria-label="shpping-cart" size="small">
              <ShoppingCart fontSize="large" />
            </IconButton>
            <IconButton color="inherit" aria-label="menu" size="small">
              <AccountCircleIcon fontSize="large" />
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
