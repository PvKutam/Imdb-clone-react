import React from 'react'
import Header from '../Component/Common/Header'
import { Box,Typography,styled,Divider } from "@mui/material"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { categoryMovies } from "../services/api";
import { useLocation } from 'react-router-dom';
import { POPULAR_API_URL,TOPRATED_APT_URL,UPCOMING_API_URL,moviesType } from '../Constants/Constant';

import MoiviesList from '../Component/Common/MoiviesList';


import { useState,useEffect } from 'react';

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
  });

  const Component= styled(Box)`
  width: 80%;
  margin :auto;
  max-width: 1000px; // replace with the appropriate value
`;

const Container= styled(Box)`
background:#F5F5F5;
padding:10px,
`;
const MovieCategory = () => {
  const [movies,setMovies] = useState([])
  const { search } = useLocation();

    useEffect(()=>{
        const getData= async(API_URL)=>{
            let response= await categoryMovies(API_URL);
            setMovies(response.results)
        }
        let API_URL;
        if(search.includes(`popular`)){
          API_URL= POPULAR_API_URL;
        }
        else if(search.includes('Upcoming')){
          API_URL= UPCOMING_API_URL;

        }
        else if(search.includes("Top%20Rated")){
          API_URL= TOPRATED_APT_URL;
        }
        getData(API_URL)
    },[search])
  return (
    <>
      <Header/>
        <Component >
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
        {
        movies.map(movie => (
            <StyledBanner
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt="banner"
            />
        ))
        }
      </Carousel>
      <Container>
        <Typography variant='h6'>IMDb charts</Typography>
        <Typography variant='h4'> IMDb {moviesType[search.split(`=`)[1]]}Movies</  Typography>
        <Typography style={{ fontSize  : 12, margin : 5}}>IMDb Top {movies.length}as rated by IMDb voters</Typography>  
        <Divider/>
        <MoiviesList movies={movies}/>
      </Container>
        </Component>
    </>
  )
}

export default MovieCategory
