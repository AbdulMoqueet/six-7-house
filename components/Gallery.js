import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const Gallery = () => {
    return (
        <Box sx={{
            background: "#E0E2DF",
            py: "120px"
        }}>

            <Box sx={{
                width: "800px",
                margin: "auto",
                textAlign: "center",
                pb: "100px"
            }}>

                <Typography fontSize="30px" fontWeight="500">
                    Explore our Photo Gallery
                </Typography>

                <Typography mt="10px" color="#848A7D">Instagram</Typography>

            </Box>


            <Container>

                <Box sx={{
                    width: "1100px",
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    gap: "10px",
                    columnGap: "18px",
                    margin: "auto"
                }}>

                    <Box sx={{ gridRow: 'span 2' }}>

                        <Box className='grid-card'>

                            <img src="/grid__1.png" />
                            <Box className='grid-info'>
                                <Box sx={{ textAlign: "center" }}>
                                    <Typography fontSize="28px">Lions Head</Typography>
                                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, ipsa.</Typography>
                                </Box>
                            </Box>

                        </Box>

                    </Box>

                    <Box>
                        <Box className='grid-card'>

                            <img src="/grid__2.png" />
                            <Box className='grid-info'>
                                <Box sx={{ textAlign: "center" }}>
                                    <Typography fontSize="28px">Lions Head</Typography>
                                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, ipsa.</Typography>
                                </Box>
                            </Box>

                        </Box>
                    </Box>

                    <Box>
                        <Box className='grid-card'>

                            <img src="/grid__4.png" />
                            <Box className='grid-info'>
                                <Box sx={{ textAlign: "center" }}>
                                    <Typography fontSize="28px">Lions Head</Typography>
                                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, ipsa.</Typography>
                                </Box>
                            </Box>

                        </Box>
                    </Box>

                    <Box>
                        <Box className='grid-card'>

                            <img src="/grid__3.png" />
                            <Box className='grid-info'>
                                <Box sx={{ textAlign: "center" }}>
                                    <Typography fontSize="28px">Lions Head</Typography>
                                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, ipsa.</Typography>
                                </Box>
                            </Box>

                        </Box>
                    </Box>

                    <Box>
                        <Box className='grid-card'>

                            <img src="/grid__5.png" />
                            <Box className='grid-info'>
                                <Box sx={{ textAlign: "center" }}>
                                    <Typography fontSize="28px">Lions Head</Typography>
                                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, ipsa.</Typography>
                                </Box>
                            </Box>

                        </Box>
                    </Box>

                </Box>

            </Container>

        </Box>
    )
}

export default Gallery