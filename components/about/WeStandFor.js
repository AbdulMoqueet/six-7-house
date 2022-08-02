import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const WeStandFor = () => {
  return (
    <Box sx={{
        background: "#E0E2DF",
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        py: "80px"
    }}>

        <Box>

            <Stack data-aos="fade-up" gap="20px" width={{xs:"320px", md:"550px"}} textAlign="center">
                <Typography color="#464646">Six7house</Typography>
                <Typography fontSize="30px">What we stand for</Typography>
                <Typography color="#464646" lineHeight={1.8}>Each one of the 50 guestrooms and suites at the 11 Mirrors Design Hotel takes an inspiration from contemporary interior design with a profound understanding of worldwide trends and innovative concepts. Smart elegance without any heavy elements and imperial exaggerations sets up a creative environment that inspires and encourages genuine interaction, while the hotel’s staff provides a service of an exceptional quality.erial exaggerations sets up a creative environment that inspires and encourages genuine interaction, while the hotel’s staff provides a service of an exceptional quality.</Typography>
            </Stack>

            <Box data-aos="fade-up" sx={{
                mt:"40px",
                width: {xs:"340px", md:"600px"},
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                color: "#848A7D"
            }}>

                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems:"center"
                }}>
                    <img src='/mobile.svg' alt="mobile" />
                    <Typography>Modern</Typography>
                </Box>

                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems:"center"
                }}>
                    <img src='/time.svg' alt="clock" />
                    <Typography>Convenient</Typography>
                </Box>

                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems:"center"
                }}>
                    <img src='/premium.svg' alt="premium" />
                    <Typography>Premium</Typography>
                </Box>

            </Box>

        </Box>

    </Box>
  )
}

export default WeStandFor