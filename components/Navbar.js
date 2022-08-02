import { Box, Button, Container, Grid, Stack, styled, Typography } from '@mui/material'
import React from 'react'
import { VscChromeClose } from 'react-icons/vsc'
import { FiInstagram } from 'react-icons/fi'
import Link from 'next/link'
import { useRouter } from 'next/router'

const StyledButton = styled(Button)({
    color: "#fff",
    border: "1px solid #E7E1DC",
    textTransform: "none"
})

const Navbar = ({ navOpen, handleNav, home, about, contact }) => {

    const router = useRouter()

    const navigate = (url) => {
        router.push(url)
        handleNav()
    }

    return (
        <Box sx={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 1,
            width: "100%",
            background: "#848A7D",
            minHeight: "100vh",
            display: navOpen ? "block" : "none"
        }}>

            <Container>

                <Box sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "end",
                    pt: "20px"
                }}>

                    <Box sx={{
                        display: "flex",
                        gap: "6px",
                        color: "#fff"
                    }}>
                        <Typography fontWeight={500}>EN</Typography>
                        <Typography color="#B4B4B4">&#9679;</Typography>
                        <Typography color="#B4B4B4">GER</Typography>
                    </Box>

                    <Box sx={{
                        display: "flex",
                        gap: "14px",
                        alignItems: "center",
                        color: "#fff"
                    }}>

                        <StyledButton>Book Now</StyledButton>
                        <VscChromeClose onClick={handleNav} fontSize={30} />

                    </Box>

                </Box>


                <Box sx={{
                    display: "grid",
                    placeItems: "center",
                    minHeight: "calc(100vh - 60px)"
                }}>

                    <Box>

                        <Grid container mt="60px">

                            <Grid item xs={12} md={9}>
                                <Box sx={{
                                    display: "flex"
                                }}>

                                    <Box sx={{
                                        display: "flex",
                                        gap: "60px"
                                    }}>

                                        <Box sx={{
                                            color: "#B4B4B4",
                                            textAlign: "right"
                                        }}>
                                            <Typography className={home ? "nav-active" : ""}
                                                sx={{
                                                    fontSize: { xs: "20px", md: "30px" },
                                                    cursor: "pointer",
                                                    "&:hover": { color: "#fff" }
                                                }} onClick={() => navigate('/')}>Home</Typography>

                                            <Typography className={about ? "nav-active" : ""} my="20px"
                                                sx={{
                                                    fontSize: { xs: "20px", md: "30px" },
                                                    cursor: "pointer",
                                                    "&:hover": { color: "#fff" }
                                                }} onClick={() => navigate('/about')}>About</Typography>

                                            <Box sx={{
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: "15px"
                                            }}>
                                                <Typography sx={{
                                                    fontSize: { xs: "20px", md: "30px" },
                                                    cursor: "pointer",
                                                    "&:hover": { color: "#fff" }
                                                }}>Rooms</Typography>

                                                <Typography sx={{
                                                    cursor: "pointer",
                                                    "&:hover": { color: "#fff" }
                                                }}>Premier</Typography>
                                                <Typography sx={{
                                                    cursor: "pointer",
                                                    "&:hover": { color: "#fff" }
                                                }}>Junior</Typography>
                                                <Typography sx={{
                                                    cursor: "pointer",
                                                    "&:hover": { color: "#fff" }
                                                }}>Deluxe</Typography>
                                                <Typography sx={{
                                                    cursor: "pointer",
                                                    "&:hover": { color: "#fff" }
                                                }}>Senior</Typography>
                                            </Box>


                                            <Typography className={contact ? "nav-active" : ""} mt="20px"
                                                sx={{
                                                    cursor: "pointer",
                                                    fontSize: { xs: "20px", md: "30px" },
                                                    "&:hover": { color: "#fff" }
                                                }} onClick={() => navigate('/contact')}>Contact</Typography>
                                        </Box>


                                        <Box>
                                            <Box sx={{
                                                height: { xs: "330px", md: "500px" }
                                            }} component="img" src="/navbar.png" alt="" />
                                        </Box>

                                    </Box>

                                    <Box sx={{
                                        width: "2px",
                                        height: "500px",
                                        background: "#B4B4B4",
                                        marginLeft: "40px",
                                        display: { xs: "none", md: "block" }
                                    }}></Box>


                                    <Stack sx={{
                                        marginLeft: "80px",
                                        color: "#fff",
                                        justifyContent: "space-between",
                                        display: { xs: "none", md: "flex" }
                                    }}>
                                        <Box sx={{
                                            display: "flex",
                                            gap: "10px"
                                        }}>
                                            <FiInstagram />
                                            Follow Us!
                                        </Box>


                                        <Box>
                                            <img src="/logo_main.png" alt="" />

                                            <Typography mt="12px" fontSize="12px">12 King St, Scott Estate<br />
                                                Cape Town, 7806<br />
                                                South Africa <br /><br />

                                                six7house@web.de</Typography>

                                        </Box>



                                    </Stack>


                                </Box>
                            </Grid>

                        </Grid>



                        <Box sx={{
                            display: { xs: "block", md: "none" },
                            mt: "14px",
                            position: "relative"
                        }}>

                            <Box>
                                <img width="50px" src="/logo_main.png" alt="" />

                                <Typography mt="4px" color="#fff" fontSize="12px">12 King St, Scott Estate<br />
                                    Cape Town, 7806<br />
                                    South Africa <br /><br />

                                    six7house@web.de</Typography>

                            </Box>

                            <Box sx={{
                                display: "flex",
                                gap: "10px",
                                color: "#fff",
                                position: "absolute",
                                bottom: 0,
                                right: 0,
                                fontSize: "12px"
                            }}>
                                <FiInstagram />
                                Follow Us!
                            </Box>

                        </Box>


                    </Box>
                </Box>


            </Container>

        </Box>
    )
}

export default Navbar