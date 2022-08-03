import { Box, Button, Container, styled, Typography } from '@mui/material'
import React from 'react'

const StyledButton = styled(Button)({
  background: "#848A7D",
  color: "#fff",
  textTransform: "none",
  marginTop: "20px",
  "&:hover": {
    background: "#000"
  }
})

const Gallery = () => {
  return (
    <Box sx={{
      py: "80px"
    }}>
      <Container>

        <Box sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem"
        }}>

          <div data-aos="fade-up" className="gallery-item" style={{
            gridColumn: "1/-1"
          }}>
            <img style={{
              height: "400px",
              objectFit: "cover"
            }} src="/discover__1.png" alt="" />

            <Box className='grid-info'>
              <Box sx={{ textAlign: "center" }}>
                <Typography fontSize={{ xs: "20px", md: "28px" }}>Junior</Typography>
              </Box>
            </Box>

          </div>

          <div data-aos="fade-up" className="gallery-item">
            <img src="/discover__2.png" alt="" />

            <Box className='grid-info'>
              <Box sx={{ textAlign: "center" }}>
                <Typography fontSize={{ xs: "20px", md: "28px" }}>Deluxe</Typography>
              </Box>
            </Box>

          </div>

          <div data-aos="fade-up" className="gallery-item">
            <img src="/discover__3.png" alt="" />

            <Box className='grid-info'>
              <Box sx={{ textAlign: "center" }}>
                <Typography fontSize={{ xs: "20px", md: "28px" }}>Senior</Typography>
              </Box>
            </Box>

          </div>

        </Box>


        <Box data-aos="fade-up" sx={{
          margin: "auto",
          marginTop: "80px",
          width: { xs: "300px", md: "800px" },
          textAlign: "center"
        }}>

          <img src="/sea-and-sun.svg" alt="" />
          <Typography pt="10px" lineHeight={1.6} fontSize={{ xs: "20px", md: "40px" }}>Soulful Bohemian style featuring sleek and modern design full of South African magic light</Typography>

          <StyledButton>See all rooms</StyledButton>

        </Box>

      </Container>
    </Box>
  )
}

export default Gallery