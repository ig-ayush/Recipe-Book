import {
    Box,
    Chip,
    Divider,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
  } from "@mui/material";
  import axios from "axios";
  import React, { use, useEffect, useState } from "react";
  import { useParams } from "react-router-dom";
  import StarRateIcon from "@mui/icons-material/StarRate";
  export default function SingleDish() {
    // let url = useParams();
    const {id} = useParams()
    console.log(id);
    const [productInfo,setProductInfo] = useState();
    const [ImageI,SetImageI] = useState(0)
    // const [Image,SetSubImage] = useState();
    useEffect(()=>{
      axios.get('https://dummyjson.com/recipes/'+id).then((result)=>{
        setProductInfo(result.data);
        
      }).catch((error)=>{
        console.log(error);
        
      })
    },[id])
  
    //   console.log(productInfo);
    return (
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <Box sx={{ p: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={2}>
              <Paper
                elevation={0}
                sx={{
                  height: "104vh",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                
                  <Box
                    
                    sx={{
                      cursor: "pointer",
                      margin: "10px 0",
                      height: "100vh",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <img
                      src={productInfo?.image}
                      style={{
                        width: "60%",
                        height: "60%",
                        objectFit: "contain",
                      }}
                      alt='Selected'
                    />
                  </Box>
                
              </Paper>
            </Grid>
            <Grid item xs={12} md={5}>
              <Paper
                elevation={0}
                sx={{
                  height: "100vh",
                  display: "flex",
                  justifyContent: "center",
                  p: 2,
                }}
              >
                <img
                  src={productInfo?.image}
                  style={{
                    width: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                  }}
                  alt="Selected"
                />
              </Paper>
            </Grid>
            <Grid item xs={12} md={5}>
              <Paper elevation={0} sx={{ height: "100vh", padding: 2 }}>
                <Box>
                  <Typography
                    variant="button"
                    color="text.secondary"
                    sx={{ fontSize: "14px", fontWeight: "bolder" }}
                  >
                    {productInfo?.brand}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="button"
                    color="text.secondary"
                    sx={{ fontSize: "24px", fontWeight: "bolder" }}
                  >
                    {productInfo?.name}
                  </Typography>
                </Box>
                <Box 
                  sx={{ display: "flex", justifyContent: "flex-start", gap: 2 }}
                >
                  <Chip
                    size="small"
                    label={productInfo?.rating}
                    color={
                      productInfo?.rating > 4.5
                        ? "success"
                        : productInfo?.rating > 4
                        ? "warning"
                        : "error"
                    }
                    icon={<StarRateIcon sx={{ fontSize: "16px" }} />}
                    sx={{ borderRadius: "10px" }}
                  />
                  {/* <Typography variant="body" color="text.secondary">
                    {productInfo?.reviews.length} reviews
                  </Typography> */}
                </Box>
                <Box
                  sx={{ display: "flex", justifyContent: "flex-start", gap: 2 }}
                >
                  {/* <Typography
                    variant="h6"
                    mt={1}
                    fontWeight={"bolder"}
                    color="green"
                  >
                    Extra {productInfo?.discountPercentage}% Off
                  </Typography> */}
                </Box>
                <Box
                  sx={{ display: "flex", justifyContent: "flex-start", gap: 2 }}
                >
                  {/* <Typography variant="h4" mt={1} color="text.secondary">
                    $ {productInfo?.price}
                  </Typography>
                  <Typography variant="h6" mt={1} color="text.secondary">
                    <strike>
                      $
                      {parseInt(
                        productInfo?.price + productInfo?.discountPercentage / 100
                      )}
                    </strike>
                  </Typography> */}
                </Box>
                <Box
                  sx={{ display: "flex", justifyContent: "flex-start", gap: 2 }}
                >
                  <Typography variant="caption" mb={1} color="text.secondary">
                    {productInfo?.shippingInformation}
                  </Typography>
                </Box>
                <Divider />
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Cuisine</TableCell>
                        <TableCell>
                          <Typography variant="caption" color="text.secondary">
                            {productInfo?.cuisine}
                          </Typography>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Ingredients</TableCell>
                        <TableCell>
                          <Typography variant="caption" color="text.secondary">
                            {productInfo?.ingredients}
                          </Typography>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Perparation time</TableCell>
                        <TableCell>
                          <Typography variant="caption" color="text.secondary">
                            {productInfo?.prepTimeMinutes}
                          </Typography>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Cook Time</TableCell>
                        <TableCell>
                          <Typography variant="caption" color="text.secondary">
                            {productInfo?.cookTimeMinutes}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody></TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  }
  