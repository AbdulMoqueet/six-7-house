import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

import { GoLocation } from "react-icons/go"

const Location = () => {
    return (
        <Box sx={{
            height: "100vh",
            width: "100%",
            display: "grid",
            placeItems: "center"
        }}>

            <Stack data-aos="fade-up" justifyContent="center" alignItems="center" gap="20px" textAlign="center">

                <GoLocation color='#464646' fontSize="30px" />

                <Typography color="#464646" fontSize="24px">
                    12 King St, Scott Estate <br />
                    Cape Town, 7806 <br />
                    South Africa
                </Typography>

            </Stack>

        </Box>
    )
}

export default Location