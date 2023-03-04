import React from "react";

// Mui
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// Mui Icons
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Hero = () => {
  return (
    <Stack sx={{ bgcolor: "green", px: 20, py: 5, height: 500 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          Hero
        </Grid>
        <Grid item xs={12} sm={6}>
          <Stack sx={{ bgcolor: "red", height: "100%" }}>
            <Typography variant="h6">Sneaker Company</Typography>
            <Typography variant="h2">Fall Limited Edition Sneakers</Typography>
            <Typography variant="body1">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they'll withstand
              everything the weather can offer.
            </Typography>
            <Stack direction="row" spacing={2}>
              <Typography>R125</Typography>
              <Typography>50%</Typography>
            </Stack>
            <Typography variant="h4" sx={{ textDecoration: "line-through" }}>
              R125
            </Typography>
            <Stack direction="row" spacing={3}>
              <Button variant="contained">Shop Now</Button>
              <Button variant="outlined" startIcon={<ShoppingCartIcon />}>
                Add to Cart
              </Button>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Hero;
