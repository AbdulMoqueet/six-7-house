import { Box, Container, Stack, Button, styled, Typography } from '@mui/material'
import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { HiLocationMarker } from 'react-icons/hi'
import { BsChevronDown } from 'react-icons/bs'

import Popup from '../home/Popup'

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import Link from 'next/link'

const StyledButton = styled(Button)({
    color: "#fff",
    border: "1px solid #E7E1DC",
    textTransform: "none",
    borderRadius: 0
})

const Hero = ({ handleNav }) => {

    const [guest, setGuest] = useState(0)
    const [enabled, setEnabled] = useState(false)

    const [checkIn, setCheckIn] = useState(false)
    const toggleCheckIn = () => {
        setCheckIn(!checkIn)
    }

    const [checkOut, setCheckOut] = useState(false)
    const toggleCheckOut = () => {
        setCheckOut(!checkOut)
    }

    const [popupOpen, setPopupOpen] = useState(false)

    const addGuest = () => {
        setGuest(++guest)
        if (+date[0].startDate !== +date[0].endDate && guest !== 0) {
            setEnabled(true)
        } else {
            setEnabled(false)
        }
    }

    const subGuest = () => {
        if (guest === 0)
            return
        setGuest(--guest)
        if (+date[0].startDate !== +date[0].endDate && guest !== 0) {
            setEnabled(true)
        } else {
            setEnabled(false)
        }
    }

    const togglePopup = () => {

        if (!enabled)
            return

        if (!popupOpen) {
            document.body.style.overflowY = "hidden"

            console.log("-----------------");
            console.log('Check-In Date: ', date[0].startDate);
            console.log('Check-Out Date: ', date[0].endDate);
            console.log('Number of guest: ', guest);
            console.log("-----------------");

        } else {
            document.body.style.overflowY = "auto"
        }

        setPopupOpen(!popupOpen)
    }

    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const handleChange = (ranges) => {
        setDate([ranges.selection])
        if (+ranges.selection.startDate !== +ranges.selection.endDate && guest !== 0) {
            setEnabled(true)
        } else {
            setEnabled(false)
        }
    }

    return (
        <Box
            sx={{
                position: "relative",
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url(/contact_hero.png)",
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

                    <Stack gap="40px" color="#fff" flexDirection="row" alignItems="center">
                        <Box sx={{
                            display: { xs: "none", md: "block" }
                        }}>
                            <StyledButton>Book Now</StyledButton>
                        </Box>

                        <Box sx={{
                            cursor: 'pointer'
                        }} onClick={handleNav} component="img" src="/menu.svg" />

                    </Stack>

                    <Link href="/">
                        <Box sx={{
                            position: "absolute",
                            left: { xs: 0, md: "50%" },
                            transform: { xs: "translate(0)", md: "translate(-50%)" },
                            cursor: "pointer"
                        }} component="img" src="/logo_main.png" alt="Logo" />
                    </Link>

                </Box>

                <Box data-aos="fade-up" sx={{
                    color: "#fff",
                    position: "absolute",
                    bottom: "160px"
                }}>
                    <Typography fontSize="40px">Our Rooms</Typography>
                    <Typography>Book this room now</Typography>
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
                                    cursor: "pointer"

                                }} onClick={toggleCheckIn}>
                                    Check-In <BsChevronDown />
                                </Box>


                                <Box sx={{
                                    display: checkIn ? "block" : "none"
                                }}>
                                    <DateRangePicker
                                        className='check-in-date-range-picker'
                                        onChange={handleChange}
                                        showSelectionPreview={true}
                                        moveRangeOnFirstSelection={false}
                                        ranges={date}
                                        direction="horizontal"
                                        minDate={new Date()}
                                    />
                                </Box>

                            </Box>


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
                                    cursor: "pointer"
                                }} onClick={toggleCheckOut}>
                                    Check-Out <BsChevronDown />
                                </Box>

                                <Box sx={{
                                    display: checkOut ? "block" : "none"
                                }}>
                                    <DateRangePicker
                                        className='check-out-date-range-picker'
                                        onChange={handleChange}
                                        showSelectionPreview={true}
                                        moveRangeOnFirstSelection={false}
                                        ranges={date}
                                        minDate={new Date()}
                                        direction="horizontal"
                                    />
                                </Box>

                            </Box>

                            <Box sx={{ display: "flex", gap: "10px" }}>
                                <Box>Guest</Box>
                                <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
                                    <Box sx={{
                                        cursor: "pointer",
                                        userSelect: "none",
                                        "&:hover": {
                                            color: "rgba(200, 200, 200, 0.9)"
                                        }
                                    }} onClick={subGuest}>-</Box>
                                    <Box sx={{ fontSize: "14px" }}>{guest}</Box>
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
                            cursor: enabled ? "pointer" : "auto",
                            color: enabled ? "#fff" : "rgba(200, 200, 200, 0.8)"
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