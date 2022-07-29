import { Box } from '@mui/material'
import React from 'react'

const Backdrop = ({ popupOpen, togglePopup }) => {
  return (
    <Box sx={{
      position: "fixed",
      background: "rgba(0, 0, 0, 0.5)",
      height: "100vh",
      width: "100%",
      top: 0,
      left: 0,
      zIndex: 5,
      display: popupOpen ? "block" : "none"
    }} onClick={togglePopup}>

    </Box>
  )
}

export default Backdrop