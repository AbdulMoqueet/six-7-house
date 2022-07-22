import { Box } from '@mui/material'
import React from 'react'
import Slider from "react-slick";

const MySlides = () => {

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging: function (i) {
            return (
                <div style={{
                    height: "2px",
                    background: "#BBBBBB",
                    width: "150px"
                }}>

                </div>
            );
        },
    };

    return (
        <Box sx={{
            background: "#E0E2DF",
            minHeight: "100vh",
            position: "relative",
            display: "grid",
            placeItems: "center",
            py: "140px"
        }}>

            <Box sx={{
                width: "1000px"
            }}>
                <Slider {...settings}>
                    <div>
                        <img src="/slide__1.png" alt="slide-image" />
                    </div>

                    <div>
                        <img src="/slide__1.png" alt="slide-image" />
                    </div>

                    <div>
                        <img src="/slide__1.png" alt="slide-image" />
                    </div>

                    <div>
                        <img src="/slide__1.png" alt="slide-image" />
                    </div>

                    <div>
                        <img src="/slide__1.png" alt="slide-image" />
                    </div>
                </Slider>

            </Box>

        </Box>
    )
}

export default MySlides