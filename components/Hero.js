import { Box, Container, Stack, Button, styled, Typography } from '@mui/material'
import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { HiLocationMarker } from 'react-icons/hi'
import { BsChevronDown } from 'react-icons/bs'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Popup from './Popup'

const StyledButton = styled(Button)({
    color: "#fff",
    border: "1px solid #E7E1DC",
    textTransform: "none"
})

const Hero = ({ handleNav }) => {

    const [guest, setGuest] = useState(0)
    const [checkInDate, setCheckInDate] = useState(new Date())
    const [checkOutDate, setCheckOutDate] = useState(new Date())

    const [popupOpen, setPopupOpen] = useState(false)

    const addGuest = () => {
        setGuest(++guest)
    }

    const subGuest = () => {
        if (guest === 0)
            return
        setGuest(--guest)
    }

    const togglePopup = () => {

        if(!popupOpen){
            document.body.style.overflowY ="hidden"
        }else{
            document.body.style.overflowY ="auto"
        }

        setPopupOpen(!popupOpen)
    }

    return (
        <Box
            sx={{
                position: "relative",
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url(/hero.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh"
            }}>
            <Popup popupOpen={popupOpen} togglePopup={togglePopup} />
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


                {/* Desktop md */}
                <Box data-aos="fade-up" sx={{
                    color: "#fff",
                    textAlign: "center",
                    display: { xs: "none", md: "grid" },
                    placeItems: "center",
                    height: "calc(100% - 100px)"
                }}>

                    <Box sx={{
                        width: { xs: "300px", md: "500px" }
                    }}>
                        <Typography lineHeight={1.6} fontSize={{ xs: "25px", md: "38px" }}>Explore a place with the comfort of an Airbnb and the predictability of a hotel.</Typography>

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


                {/* Mobile xs, sm */}
                <Box sx={{
                    display: { xs: "block", md: "none" }
                }}>
                    <Box sx={{
                        position: "absolute",
                        width: "230px",
                        color: "#fff",
                        bottom: "30px"
                    }}>

                        <Button sx={{
                            color: "#fff",
                            display: "flex",
                            gap: "5px",
                            marginTop: "20px",
                            background: "rgba(128, 128, 128, 0.37)",
                            padding: "10px",
                            fontSize: "12px",
                            "&:hover": {
                                background: "#fff",
                                color: "#000"
                            }
                        }}>
                            <HiLocationMarker />
                            Hout Bay, South Africa
                        </Button>

                        <Typography my={2} lineHeight={1.6} fontSize="20px">Explore a place with the comfort of an Airbnb and the predictability of a hotel.</Typography>

                        <StyledButton>Book Now</StyledButton>

                    </Box>

                </Box>

            </Container>


            <Box sx={{
                position: "absolute",
                borderTop: "solid 2px #fff",
                color: "#fff",
                bottom: "0px",
                width: "100%",
                display: { xs: "none", md: "block" }
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

                            <Box sx={{
                                position: "relative",
                                "&:hover": {
                                    color: "rgba(200, 200, 200, 0.9)"
                                }
                            }}>

                                <Box sx={{
                                    display: "flex",
                                    gap: "10px",
                                    alignItems: "center",

                                }}>
                                    Check-In <BsChevronDown />
                                </Box>

                                <DatePicker className='date-picker' selected={checkInDate} onChange={(date) => setCheckInDate(date)} />

                            </Box>


                            <Box sx={{
                                position: "relative",
                                "&:hover": {
                                    color: "rgba(200, 200, 200, 0.9)"
                                }
                            }}>

                                <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
                                    Check-Out <BsChevronDown />
                                </Box>

                                <DatePicker className='date-picker checkout-date-picker' selected={checkOutDate} onChange={(date) => setCheckOutDate(date)} />

                            </Box>

                            <Box sx={{ display: "flex", gap: "10px" }}>
                                <Box>Guest</Box>
                                <Box sx={{ display: "flex", gap: "8px" }}>
                                    <Box sx={{
                                        cursor: "pointer",
                                        userSelect: "none",
                                        "&:hover": {
                                            color: "rgba(200, 200, 200, 0.9)"
                                        }
                                    }} onClick={subGuest}>-</Box>
                                    <Box>{guest}</Box>
                                    <Box sx={{
                                        cursor: "pointer",
                                        userSelect: "none",
                                        "&:hover": {
                                            color: "rgba(200, 200, 200, 0.9)"
                                        }
                                    }} onClick={addGuest}>+</Box>
                                </Box>
                            </Box>
                        </Box>

                        <Box sx={{
                            cursor: "pointer"
                        }} onClick={togglePopup}>
                            Check Availability
                        </Box>

                    </Box>
                </Container>

            </Box>



        </Box>
    )
}

export default Hero