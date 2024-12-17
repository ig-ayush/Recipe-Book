import {
    Box,
    CardActions,
    CardContent,
    CardMedia,
    Chip,
    Paper,
    Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import StarRateIcon from "@mui/icons-material/StarRate";
export default function Dishs({ product }) {

    return (
        <div>
            <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
                <Paper elevation={2} sx={{ height: "100%" }}>
                    <CardMedia
                        component="img"
                        alt={product.name}
                        height={"300"}
                        image={product.image}
                    />
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="overline"
                            fontWeight="bolder"
                            component="div"
                        >
                            {product.name}
                        </Typography>

                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                mt: 1,
                            }}
                        >
                            <Typography variant="subtitle1">{product.cuisine}</Typography>

                        </Box>
                    </CardContent>
                    <CardActions>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                width: "100%",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: 'space-evenly',
                                    width: "100%",
                                }}
                            >

                                <Typography variant="subtitle2">
                                    {product.mealType}
                                </Typography>


                            </Box>
                            <Chip
                                label={product.rating}
                                size="small"
                                color="success"
                                sx={{ borderRadius: "10px" }}
                                icon={<StarRateIcon sx={{ fontSize: "10px" }} />}
                            />


                        </Box>
                    </CardActions>
                </Paper>
            </Link>
        </div>
    );
}
