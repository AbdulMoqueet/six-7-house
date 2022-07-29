import { Box } from '@mui/material'
import React from 'react'

import { AiOutlineCloseCircle } from "react-icons/ai"
import Backdrop from './Backdrop'

const GalleryModal = ({ modalOpen, closeModal, modalImg }) => {
    return (
        <Box>
            <Backdrop popupOpen={modalOpen} togglePopup={closeModal} />

            <Box sx={{
                position: "fixed",
                width: {xs:"320px", md:"1000px"},
                height: {xs:"200px", md:"600px"},
                background: "#fff",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: "10",
                display: modalOpen ? "block" : "none"
            }}>

                <AiOutlineCloseCircle style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    fontSize: "30px",
                    margin: "10px",
                    cursor: "pointer"
                }} onClick={closeModal} />

                <Box sx={{
                    padding: {xs:"20px", md:"40px"},
                    textAlign: "center"
                }}>

                    <Box sx={{
                        height: {xs:"160px",md:"520px"},
                        objectFit: "cover"
                    }} component="img" src={modalImg} />

                </Box>

            </Box>
        </Box>
    )
}

export default GalleryModal