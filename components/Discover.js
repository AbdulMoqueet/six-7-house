import { Box, Button, Container, Grid, styled, Typography } from '@mui/material'
import React from 'react'

const StyledButton = styled(Button)({
    background: "#848A7D",
    color: "#fff",
    textTransform: "none",
    marginTop: "20px",
    "&:hover": {
        background: "#000"
    }
})

const Discover = () => {
    return (
        <Box py="200px">

            <Box sx={{ margin: "auto", width: "800px", textAlign: "center" }}>
                <Typography fontSize="40px">Introducing six7house. A dream made true in Hout Bay.</Typography>

                <StyledButton>
                    Discover More
                </StyledButton>

            </Box>


            <Container >

                <Grid container py="100px" spacing={4}>

                    <Grid item xs={12} md={6} >

                        <Box className='discover-card' sx={{ position: "relative" }}>

                            <img width="100%" src="/discover__1.png" alt="" />

                            <Box className='discover-info'>
                                Premier
                            </Box>
                        </Box>

                    </Grid>

                    <Grid item xs={12} md={6}>

                        <Box className='discover-card' sx={{ position: "relative" }}>

                            <img width="100%" src="/discover__2.png" alt="" />

                            <Box className='discover-info'>
                                Junior
                            </Box>
                        </Box>

                    </Grid>

                    <Grid item xs={12} md={6}>

                        <Box className='discover-card' sx={{ position: "relative" }}>

                            <img width="100%" src="/discover__3.png" alt="" />

                            <Box className='discover-info'>
                                Deluxe
                            </Box>
                        </Box>

                    </Grid>

                    <Grid item xs={12} md={6}>

                        <Box className='discover-card' sx={{ position: "relative" }}>

                            <img width="100%" src="/discover__1.png" alt="" />

                            <Box className='discover-info'>
                                Senior
                            </Box>
                        </Box>

                    </Grid>

                </Grid>

            </Container>


            <Box sx={{ margin: "auto", width: "800px", textAlign: "center" }}>

                <img src="/sea-and-sun.svg" alt="" />
                <Typography pt="10px" lineHeight={1.6} fontSize="40px">Soulful Bohemian style featuring sleek and modern design full of South African magic light</Typography>

                <StyledButton>See all rooms</StyledButton>

            </Box>


        </Box>
    )
}

export default Discover