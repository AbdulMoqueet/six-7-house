import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
    <Box sx={{
      background: "#848A7D",
      pt: "120px",
      pb: "40px"
    }}>

      <Container>

        <Box color="#fff" width={{ xs: "300px", md: "500px" }}>
          <Typography fontSize="30px">
            Stay up to date!
          </Typography>
          <Typography pt="30px">Get our emails. Letters from our five stars hotel, news about Ibiza, offers, and much more. Not too often — Just enough.</Typography>
        </Box>

        <Box mt="80px" my="120px">
          <form>

            <Grid container spacing={4}>
              <Grid item xs={12} md={3}>
                <input className='form-input-name' placeholder='Name' required />
              </Grid>

              <Grid item xs={12} md={9}>
                <div style={{ position: "relative", width: "100%", display: "inline" }}>
                  <input className='form-input-email' placeholder='Email' type='email' required />
                  <input type="submit" value="Subscribe" style={{
                    position: "absolute",
                    right: 0,
                    color: "#fff",
                    textDecoration: "none",
                    background: "transparent",
                    outline: "none",
                    border: "none",
                    cursor: "pointer"
                  }} />
                </div>
              </Grid>

            </Grid>




          </form>
        </Box>

        <Box sx={{
          background: "#c4c4c4",
          height: "2px"
        }}>

        </Box>

        <Box sx={{
          marginTop: "30px",
          display: "flex",
          justifyContent: {xs:"center",md:"space-around"},
          color: "#c4c4c4"
        }}>

          <Box sx={{
            display: "flex",
            gap: {xs:"4px", md:"14px"},
          }}>
            <Typography fontSize={{xs:"9px", md:"16px"}}>@ 2021 six7house, Inc.</Typography>
            <Typography fontSize={{xs:"9px", md:"16px"}}>&#9679;</Typography>
            <Typography fontSize={{xs:"9px", md:"16px"}}>Privacy</Typography>
            <Typography fontSize={{xs:"9px", md:"16px"}}>&#9679;</Typography>
            <Typography fontSize={{xs:"9px", md:"16px"}}>Terms</Typography>
            <Typography fontSize={{xs:"9px", md:"16px"}}>&#9679;</Typography>
            <Typography fontSize={{xs:"9px", md:"16px"}}>Sitemap</Typography>
            <Typography fontSize={{xs:"9px", md:"16px"}}>&#9679;</Typography>
            <Typography fontSize={{xs:"9px", md:"16px"}}>Company details</Typography>
          </Box>

          <Box sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: "4px"
          }}>
            <AiOutlineInstagram />
            Follow us!
          </Box>

        </Box>


      </Container>

    </Box>
  )
}

export default Footer