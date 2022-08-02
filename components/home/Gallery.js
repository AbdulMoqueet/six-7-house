import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import GalleryModal from './GalleryModal'

const Gallery = () => {

    const [modalOpen, setModalOpen] = useState(false)
    const [modalImg, setModalImage] = useState("")

    const openModal = (img) => {
        document.body.style.overflowY = "hidden"
        setModalOpen(true)
        setModalImage(img)
    }

    const closeModal = () => {
        document.body.style.overflowY = "auto"
        setModalOpen(false)
    }

    return (
        <Box sx={{
            background: "#E0E2DF",
            py: "120px"
        }}>

            <Box data-aos="fade-up" sx={{
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

                <GalleryModal
                    modalOpen={modalOpen}
                    closeModal={closeModal}
                    modalImg={modalImg} />

                <div className='gallery'>

                    <div data-aos="fade-up" className="gallery-item gallery-item__1">
                        <img src="/grid__1.png" alt="" className="src" />

                        <Box className='grid-info' onClick={() => openModal("/grid__1.png")}>
                            <Box sx={{ textAlign: "center" }}>
                                <Typography fontSize={{ xs: "12px", md: "28px" }}>Lions Head</Typography>
                                <Typography fontSize={{ xs: "8px", md: "16px" }} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, ipsa.</Typography>
                            </Box>
                        </Box>

                    </div>

                    <div data-aos="fade-up" className="gallery-item">
                        <img src="/grid__2.png" alt="" className="src" />

                        <Box className='grid-info' onClick={() => openModal("/grid__2.png")}>
                            <Box sx={{ textAlign: "center" }}>
                                <Typography fontSize={{ xs: "12px", md: "28px" }}>Lions Head</Typography>
                                <Typography fontSize={{ xs: "8px", md: "16px" }} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, ipsa.</Typography>
                            </Box>
                        </Box>

                    </div>

                    <div data-aos="fade-up" className="gallery-item">
                        <img src="/grid__3.png" alt="" className="src" />

                        <Box className='grid-info' onClick={() => openModal("/grid__3.png")}>
                            <Box sx={{ textAlign: "center" }}>
                                <Typography fontSize={{ xs: "12px", md: "28px" }}>Lions Head</Typography>
                                <Typography fontSize={{ xs: "8px", md: "16px" }} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, ipsa.</Typography>
                            </Box>
                        </Box>

                    </div>


                    <div data-aos="fade-up" className="gallery-item">
                        <img src="/grid__4.png" alt="" className="src" />

                        <Box className='grid-info' onClick={() => openModal("/grid__4.png")}>
                            <Box sx={{ textAlign: "center" }}>
                                <Typography fontSize={{ xs: "12px", md: "28px" }}>Lions Head</Typography>
                                <Typography fontSize={{ xs: "8px", md: "16px" }} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, ipsa.</Typography>
                            </Box>
                        </Box>

                    </div>

                    <div data-aos="fade-up" className="gallery-item">
                        <img src="/grid__5.png" alt="" className="src" />

                        <Box className='grid-info' onClick={() => openModal("/grid__5.png")}>
                            <Box sx={{ textAlign: "center" }}>
                                <Typography fontSize={{ xs: "12px", md: "28px" }}>Lions Head</Typography>
                                <Typography fontSize={{ xs: "8px", md: "16px" }} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, ipsa.</Typography>
                            </Box>
                        </Box>

                    </div>
                </div>

            </Container>

        </Box>
    )
}

export default Gallery