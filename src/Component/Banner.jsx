import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box,styled } from "@mui/material";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};
const StyledBanner= styled(`img`)({
   width:`100%`
})
const Banner = ({ movies }) => {
  return (
    <Box style={{width:`65%`}}>
      <Carousel 
      responsive={responsive}
      swipeable={false}
      draggable={false}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      keyBoardControl={true}
      slidesToSlide={1}
      >
        {movies.map((movie) => {
          return (
            <StyledBanner
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt="banner"
            />
          );
        })}
      </Carousel>
    </Box>
  );
};

export default Banner;
