import React, { useEffect, useState } from "react";
import Header from "../Component/Common/Header";
import { categoryMovies } from "../services/api";
import { NOWPLAYING_API_URL } from "../Constants/Constant";
import Banner from "../Component/Banner";
import { Box, styled } from "@mui/material";
import UpNext from "../Component/UpNext";
import Slide from "../Component/Slide";

const NewBox = styled(Box)`
  display: flex;
  padding: 20px 0;
`;
const Component = styled(Box)`
  padding: 0 115px;
`;
function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let responce = await categoryMovies(NOWPLAYING_API_URL);
      setMovies(responce.results);
    };
    getData();
  }, []);
  return (
    <>
      <Header />
      <Component>
        <NewBox>
          <Banner movies={movies} />
          <UpNext movies={movies} />
        </NewBox>
          <Slide movies={movies} />
          <Slide movies={movies} />
          <Slide movies={movies} />
          <Slide movies={movies} />
      </Component>
    </>
  );
}

export default Home;
