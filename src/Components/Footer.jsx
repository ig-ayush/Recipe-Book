import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import icon from '../Assets/Images/icon.png'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Paper
      elevation={10}
      sx={{
        color: "#353543",
        py: 4,
        px: 2,
        textAlign: { xs: "center", md: "left" },
      }}
    >
      <Grid container spacing={2} justifyContent="center">
       
        <Grid item xs={12} md={6}>
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
        <img src={icon} alt="icone" width={'80px'} style={{marginRight:'8px'}} />
             <h1 style={
              {
                color:'Black',
                fontWeight: "800",
                fontSize: { xs: "60px", sm: "90px" },
                textTransform: "uppercase",
                marginRight:'60px'
              }
              }>R-Book </h1>
          </Box>
          
          <Typography variant="body1" sx={{ mt: 1 }}>
            Recipes Book
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{ textAlign: { xs: "center", md: "right" } }}
        >
          <Typography variant="h6" fontWeight="bold">
            Quick Links
          </Typography>
          <Box sx={{ mt: 1, display: "flex", flexDirection: "column" }}>
            <Link
              to="/"
              style={{
                display: "block",
                mb: 1,
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "18px",
              }}
            >
              Home
            </Link>
            <Link
              to="/about"
              style={{
                display: "block",
                mb: 1,
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "18px",
              }}
            >
              About
            </Link>
            <Link
              to="/shop"
              style={{
                display: "block",
                mb: 1,
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "18px",
              }}
            >
              Recipes
            </Link>
          </Box>
        </Grid>
      </Grid>

      <Typography
        variant="body2"
        sx={{ mt: 4, textAlign: "center", color: "#aaa" }}
      >
        &copy; {new Date().getFullYear()} title. All Rights Reserved.
      </Typography>
    </Paper>
  );
};

export default Footer;
