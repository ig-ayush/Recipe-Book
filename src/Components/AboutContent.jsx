import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import Image from '../Assets/Images/chatgpt.jpg'
export default function AboutContent() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid2
        container
        // spacing={2}
        sx={{ backgroundColor: "#acab753b", borderRadius: "20px" }}
      >
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <img

            height={'600px'}
            src={Image}
            alt="picture"
            style={{ width: "90%", borderRadius: "70px",padding:'25px' }}
          />
        </Grid2>
        <Grid2
          size={{ xs: 12, sm: 6 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              p: 3,
              textAlign: "justify",
            }}
          >
            <Typography
              gutterBottom
              sx={{ fontWeight: "900", fontSize: "40px" }}
            >
              About Recipe Book <span style={{ color: "#5a0c4a" }}></span>
            </Typography>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{ fontWeight: "900" }}
            >
            
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ textAlign: "justify" }}
            >
              <p>
              Welcome to Recipe Book, your go-to source for discovering and sharing amazing recipes from around the world. Whether you're looking to cook something new or recreate a classic dish, we provide a diverse range of recipes with step-by-step instructions, nutritional details, and much more.
              </p>

              <p>
              We aim to inspire you to explore your culinary creativity and enjoy the art of cooking. With recipes for all skill levels, from beginners to professionals, Recipe Book makes sure there's something for everyone.
              </p>

              <p>Join us in this exciting journey of flavors, and let's cook up something delicious together!</p>
            </Typography>
          
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}
