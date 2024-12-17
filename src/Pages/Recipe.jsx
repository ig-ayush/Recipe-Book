import { error } from 'ajv/dist/vocabularies/applicator/dependencies'
import axios from 'axios'
import React, { use } from 'react'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Box, Chip, Grid2, Paper, TextField, Typography } from "@mui/material";
import NoData from './NoData'
import Dishs from '../Components/Dishs'




export default function Recipe() {

    const [Recipes, SetRecipes] = useState([])
    let [search, setSearch] = useState('');
    // const [filterRi, setfilterRi] = useState([]);
    let navigate = useNavigate();
    const NavHome = () => {
        navigate('/')
    }

    useEffect(() => {
        axios.get('https://dummyjson.com/recipes')
            .then((getObject) => {

                console.log(getObject)
                SetRecipes(getObject.data.recipes);
                // console.log(Recipes.name);

            }).catch((error) => {
                console.log(error);

            });
     
    },[])


const filterRi=search==""? Recipes : Recipes.filter((ri) => ri.name.toLowerCase().includes(search.toLowerCase()))
console.log(filterRi)
    return (
        <div>
            <header style={{
                width: '100%',
                height: '110px',
                display: 'flex',
                justifyContent: 'center',
                fontSize: '1.4rem',
                color: '#000000b8'
            }}>
                <h1>Get Your Recipes</h1>
            </header>
            <div className="btn" style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                fontSize: '1.4rem',
                color: '#000000b8'
            }}>
                <button style={{
                    height: '50px',
                    width: '100px',
                    background: 'black',
                    color: 'white',
                    border: 'none',
                    borderRadius: '10px',
                    fontSize: '1.2rem',
                    fontWeight: 'bold'
                }}
                    onClick={NavHome}
                >Home</button>
            </div>
            <hr />
            <br />

            <div style={{
                margin: '60px'
            }}>
                <div className="Input" style={{
                    display: 'grid',
                    gridTemplateColumns: 'reapeat(2,500px)'
                }}>
                    <TextField
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}

                        id="outlined-basic" label="Search Item" variant="outlined" />
                   
                </div>
                <div>
                    <Box sx={{ flexGrow: 1, p: 3 }}>
                        <Grid2 container spacing={2}>
                            {filterRi.length > 0 ?
                                filterRi.map((item, index) => (

                                    <Grid2 size={{ xs: 12, sm: 4 }}>
                                        
                                        <Dishs product={item} />
                                      
                                    </Grid2>
                                )) : (

                                    <Box sx={{ flexGrow: 1, p: 3 }}>
                                        <Grid2 container spacing={2}>
                                            <Grid2 size={{ xs: 12, sm: 12 }}>
                                                <NoData />
                                            </Grid2>
                                        </Grid2>
                                    </Box>
                                )}

                        </Grid2>
                    </Box>
                </div>
            </div>

        </div>
    )
}
