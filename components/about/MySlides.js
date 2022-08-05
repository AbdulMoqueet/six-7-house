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
                <Box sx={{
                    height: "2px",
                    background: "#BBBBBB",
                    width: {xs:"30px", md:"150px"}
                }}>

                </Box>
            );
        },
    };

    return (
        <Box sx={{
            background: "#fff",
            minHeight: "100vh",
            position: "relative",
            display: "grid",
            placeItems: "center",
            py: "140px"
        }}>

            <Box data-aos="fade-up" sx={{
                width: {xs:"300px", sm:"600px", md:"1000px"}
            }}>
                <Slider {...settings}>
                    <div>
                        <img src="/about_slide.png" alt="slide-image" />
                    </div>

                    <div>
                        <img src="/about_slide.png" alt="slide-image" />
                    </div>

                    <div>
                        <img src="/about_slide.png" alt="slide-image" />
                    </div>

                    <div>
                        <img src="/about_slide.png" alt="slide-image" />
                    </div>

                    <div>
                        <img src="/about_slide.png" alt="slide-image" />
                    </div>
                </Slider>

            </Box>

        </Box>
    )
}

export default MySlides