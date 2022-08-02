import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import Backdrop from '../Backdrop'

const Popup = ({popupOpen, togglePopup}) => {
    return (

        <Box>

            <Backdrop popupOpen={popupOpen} togglePopup={togglePopup} />

            <Box sx={{
                position: "fixed",
                width: "500px",
                height: "200px",
                background: "#fff",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: "10",
                display: popupOpen ? "block": "none"
            }}>

                <Box sx={{
                    padding: "20px",
                    textAlign: "center"
                }}>
                    <Typography variant='h6'>Hotel Booking Availability check</Typography>
                    <Typography mt={4}>Good News! Hotel is available to book for selected date.</Typography>
                    <Button sx={{ mt: 4 }} onClick={togglePopup}>Ok</Button>
                </Box>

            </Box>

        </Box>

    )
}

export default Popup