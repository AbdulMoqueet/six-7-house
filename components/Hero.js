import { Box, Container, Stack, Button, styled, Typography } from '@mui/material'
import React from 'react'
import { FiMenu } from 'react-icons/fi'
import { HiLocationMarker } from 'react-icons/hi'
import { BsChevronDown } from 'react-icons/bs'

const StyledButton = styled(Button)({
    color: "#fff",
    border: "1px solid #E7E1DC",
    textTransform: "none"
})

const Hero = ({ handleNav }) => {
    return (
        <Box
            sx={{
                position: "relative",
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url(/hero.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh"
            }}>
            <Container sx={{ position: "relative", height: "100vh" }}>
                <Box sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "right",
                    alignItems: "center",
                    paddingTop: "30px"
                }}>

                    <Stack gap="30px" color="#fff" flexDirection="row" alignItems="center">
                        <StyledButton>Book Now</StyledButton>
                        <FiMenu onClick={handleNav} style={{ fontSize: "30px" }} />
                    </Stack>

                    <Box sx={{
                        position: "absolute",
                        left: { xs: 0, md: "50%" },
                        transform: { xs: "translate(0)", md: "translate(-50%)" }
                    }} component="img" src="/logo_main.png" alt="Logo" />

                </Box>


                <Box sx={{
                    color: "#fff",
                    textAlign: "center",
                    display: "grid",
                    placeItems: "center",
                    height: "calc(100% - 100px)"
                }}>

                    <Box sx={{
                        width: {xs:"300px", md:"500px"}
                    }}>
                        <Typography lineHeight={1.6} fontSize={{xs:"25px", md:"38px"}}>Explore a place with the comfort of an Airbnb and the predictability of a hotel.</Typography>

                        <Button sx={{
                            color: "#fff",
                            display: "flex",
                            gap: "5px",
                            margin: "auto",
                            marginTop: "20px",
                            background: "rgba(128, 128, 128, 0.37)",
                            padding: "10px",
                            "&:hover": {
                                background: "#fff",
                                color: "#000"
                            }
                        }}>
                            <HiLocationMarker />
                            Hout Bay, South Africa
                        </Button>
                    </Box>



                </Box>


            </Container>


            <Box sx={{
                position: "absolute",
                borderTop: "solid 2px #fff",
                color: "#fff",
                bottom: "0px",
                width: "100%"
            }}>

                <Container>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        height: "100px",
                        alignItems: "center"
                    }}>

                        <Box sx={{
                            display: "flex",
                            gap: "100px"
                        }}>
                            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>Check-In <BsChevronDown /> </Box>
                            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>Check-Out <BsChevronDown /> </Box>

                            <Box sx={{ display: "flex", gap: "10px" }}>
                                <Box>Guest</Box>
                                <Box sx={{ display: "flex", gap: "8px" }}>
                                    <Box>-</Box>
                                    <Box>0</Box>
                                    <Box>+</Box>
                                </Box>
                            </Box>
                        </Box>

                        <Box>
                            Check Availability
                        </Box>

                    </Box>
                </Container>

            </Box>



        </Box>
    )
}

export default Hero