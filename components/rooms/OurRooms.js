import { Box, Button, Container, Grid, Stack, styled, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useRef } from 'react'

const StyledTypo = styled(Typography)({
    fontSize: "24px",
    cursor: "pointer",
    width: "fit-content",
    "&:hover": { color: "#000" }
})

const OurRooms = () => {

    const imgRef = useRef(null)
    const op1 = useRef(null)
    const op2 = useRef(null)
    const op3 = useRef(null)
    const op4 = useRef(null)

    const changeRoom = (event, url) => {
        imgRef.current.src = url

        op1.current.classList.remove('room-active')
        op2.current.classList.remove('room-active')
        op3.current.classList.remove('room-active')
        op4.current.classList.remove('room-active')

        event.target.classList.add('room-active')
    }

    const router = useRouter()

    const navigate = (url) => {
        router.push(url)
        if (typeof handleNav !== 'undefined')
            handleNav()
    }

    return (
        <Box sx={{
            py: "80px"
        }}>

            <Container>

                <Grid container>

                    <Grid data-aos="fade-up" item xs={12} md={6}>

                        <Stack gap="20px" sx={{ color: "#464646", mt: "20px" }}>
                            <StyledTypo ref={op1} className='room-active' onClick={(e) => changeRoom(e, '/our_room__1.png')}>Pemier Suite</StyledTypo>

                            <StyledTypo ref={op2} onClick={(e) => changeRoom(e, '/discover__1.png')}>Junior Suite</StyledTypo>

                            <StyledTypo ref={op3} onClick={(e) => changeRoom(e, '/discover__2.png')}>Deluxe Suite</StyledTypo>

                            <StyledTypo ref={op4} onClick={(e) => changeRoom(e, '/discover__3.png')}>Senior Suite </StyledTypo>
                        </Stack>

                    </Grid>

                    <Grid data-aos="fade-up" item xs={12} md={6}>


                        <img ref={imgRef} width="100%" src="/our_room__1.png" alt="our-rooms" />

                        <Grid mt="25px" container spacing={2} color="#464646">
                            <Grid item xs={12} md={6}>

                                <Typography lineHeight={1.7}>
                                    What kind of suite do you dream of taking? Come to eliminate any stress in a sun-filled penthouse with fabulous views to the island of Formentera. Be the guest in here and you can also enjoy a 40 square metres living room space. Walking on wooden oak floor panels as well as take a bath in the outdoor tub to enjoy all your holidays in here.
                                </Typography>

                                <Box sx={{ marginTop: "20px" }}>
                                    <Button sx={{
                                        background: "#848A7D",
                                        marginRight: "10px",
                                        "&:hover": { background: "#000" }
                                    }} variant='contained' onClick={() => navigate('/room-details')}>View More</Button>

                                    <Button sx={{
                                        color: "#848A7D",
                                        borderColor: "#848A7D",
                                        "&:hover": {
                                            color: "#000",
                                            borderColor: "#000"
                                        }
                                    }} variant='outlined'>Book Now</Button>
                                </Box>


                            </Grid>

                            <Grid item xs={12} md={6}>

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

                            </Grid>

                        </Grid>


                    </Grid>

                </Grid>

            </Container>

        </Box>
    )
}

export default OurRooms