import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const ContactForm = () => {
    return (
        <Box sx={{
            background: "#E0E2DF",
            py: "80px"
        }}>

            <Container data-aos="fade-up">

                <Box>
                    <Typography fontSize="30px">How can we help you?</Typography>
                    <Typography mt="10px" color="#464646">Sent us a message and we will get back to you as quickly as possible!</Typography>
                </Box>

                <form>

                    <Grid container spacing={4} sx={{
                        mt: "20px"
                    }}>

                        <Grid item xs={12} md={3}>
                            <input
                                className='contact-input'
                                placeholder='*First Name'
                                required />
                        </Grid>

                        <Grid item xs={12} md={9}>
                        <input
                                className='contact-input'
                                placeholder='*Last Name'
                                required />
                        </Grid>

                        <Grid item xs={12}>
                        <input
                                className='contact-input'
                                type='email'
                                placeholder='*Email'
                                required />
                        </Grid>

                        <Grid item xs={12}>
                        <input
                                className='contact-input'
                                placeholder='*Message'
                                required />
                        </Grid>

                        <Grid item xs={12}>
                            <Button type='submit' sx={{
                                background: "#848A7D",
                                color: "#fff",
                                padding: "12px 20px",
                                borderRadius: "0",
                                "&:hover": {background: "#000"}
                            }}>Send Message</Button>
                        </Grid>

                    </Grid>

                </form>

            </Container>


        </Box>
    )
}

export default ContactForm