import { Box, Container, Stack, Button, styled, Typography } from '@mui/material'
import React, { useState } from 'react'
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
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url(/contact_hero.png)",
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
                        <Box sx={{
                            display: { xs: "none", md: "block" }
                        }}>
                            <StyledButton>Book Now</StyledButton>
                        </Box>

                        <FiMenu onClick={handleNav} style={{ fontSize: "30px" }} />
                    </Stack>

                    <Box sx={{
                        position: "absolute",
                        left: { xs: 0, md: "50%" },
                        transform: { xs: "translate(0)", md: "translate(-50%)" }
                    }} component="img" src="/logo_main.png" alt="Logo" />

                </Box>

                <Box data-aos="fade-up" sx={{
                    position: "absolute",
                    color: "#fff",
                    bottom: "130px",
                    maxWidth: "600px"
                }}>

                    <Typography fontSize="46px">Contact Us</Typography>
                    <Typography>If you have any questions regarding your stay, please do not hesitate
                        to reach out to us. We are more than happy to answer your questions!</Typography>

                </Box>


            </Container>





        </Box>
    )
}

export default Hero