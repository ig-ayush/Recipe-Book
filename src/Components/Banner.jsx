import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import Image2 from '../Assets/Images/Welcom-2.png'
const Banner = () => {
  return (
    <Box
      sx={{
        // bgcolor: "#cfcfcfba",
        overflow: "hidden",
        mt: 5,
        px: 4,
        py: 10,
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundImage:`url(${Image2})`
      }}
    >
      <Grid container alignItems="center" spacing={2}>
        {/* Left Content */}
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: { xs: "center", md: "left" }, px: { md: 4 } }}>
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              Best Service
            </Typography>
            <Typography
              variant="h2"
              sx={{
                textTransform: "uppercase",
                color: { xs: "white", sm: "#212121" },
                fontWeight: "bold",
                pb: 3,
              }}
            >
              Best Dishs
            </Typography>
          </Box>
        </Grid>

        {/* Right Content (Empty for Now) */}
        <Grid item xs={12} md={6}></Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
