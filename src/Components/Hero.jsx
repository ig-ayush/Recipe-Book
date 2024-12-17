import { Box, Typography } from "@mui/material";
import { css, keyframes } from "@emotion/react";
import React from "react";
import Image from '../Assets/Images/Main.jpg'
export default function Hero() {

  return (
  
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          backgroundImage: `url(${Image})`,
        }}
      >
        <Typography
          sx={{
            fontWeight: "900",
            fontSize: { xs: "50px", sm: "80px" },
            textTransform: "uppercase",
            color: "white",
            zIndex:5
          }}
          gutterBottom
          
        >
          Welcome <span style={{color:'#ffffffb8'}}>To</span> Recipe Book
        </Typography>
        <Typography
          gutterBottom
          sx={{ fontWeight: "900", fontSize: "40px", color: "white" }}
        >
          Website
        </Typography>
        <Typography
          gutterBottom
          sx={{ width: "80%", fontWeight: "600", color: "white" }}
        >
          Where you can found the best quality of recipes and dish.
        </Typography>
      </Box>
    </Box>
  );
}
