import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

const Details = () => {
    return (
        <Box sx={{
            py: "80px"
        }}>
            <Container>

                <Grid container spacing={18} >

                    <Grid item xs={12} md={5} sx={{
                        display: "flex",
                        justifyContent: "space-between"
                    }}>

                        <Box sx={{
                            width: "260px",
                            margin: { md: "0", xs: "auto" }
                        }}>

                            <Typography letterSpacing="2px" mb="20px" fontSize="38px">Pemier Suite </Typography>
                            <Typography color="#464646" lineHeight={1.7}>
                                An Cape Town style room with a natural set of design details to add up to a king size bed and a large private terrace. Contemporary elements like copper and limestone on the wall, or stone pebble floors in its large bathroom
                            </Typography>

                        </Box>

                        <Box sx={{
                            background: "#BBBBBB",
                            width: "2px",
                            height: "100%",
                            display: { xs: "none", md: "block" }
                        }} />

                    </Grid>

                    <Grid item xs={12} md={7}>

                        <Box sx={{
                            color: "#464646",
                            display: "flex",
                            gap: {xs: "50px", md:"200px"},
                            flexWrap: 'wrap',
                            justifyContent: 'center'
                        }}>

                            <Stack gap="20px">
                                <Typography fontSize="20px">
                                    38 - 45 sqm (inc. terrace)
                                </Typography>

                                <Typography fontSize="20px">
                                    Double beds
                                </Typography>

                                <Typography fontSize="20px">
                                    Shower and tub
                                </Typography>

                                <Typography fontSize="20px">
                                    Pillow menu
                                </Typography>

                                <Typography fontSize="20px">
                                    Unlimited access to spa
                                </Typography>

                            </Stack>


                            <Stack gap="20px">
                                <Typography fontSize="20px">
                                    Terrace
                                </Typography>

                                <Typography fontSize="20px">
                                    High velocity wifi
                                </Typography>

                                <Typography fontSize="20px">
                                    Bang &amp; Olufsen
                                </Typography>

                                <Typography fontSize="20px">
                                    Coffee-point
                                </Typography>

                            </Stack>


                        </Box>

                    </Grid>

                </Grid>

            </Container>
        </Box>
    )
}

export default Details