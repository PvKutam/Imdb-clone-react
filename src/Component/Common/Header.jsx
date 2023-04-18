import React from "react";
import { useState } from "react";
import { AppBar, Toolbar, styled, Box , Typography , InputBase } from "@mui/material";
import { logoURL } from "../../Constants/Constant";
import { Menu , BookmarkAdd, ExpandMore } from '@mui/icons-material';
import HeaderMenu from "./HeaderMenu";

const StyledToolbar = styled(Toolbar)`
  background: #121212;
  min-height:56px !important;
  padding :0 115px !important;
  justify-content: space-between;
 
  & > div {
    display:flex;
    align-items:center;
    cursor:pointer;
    & > p {
      font-size:14px ;
      font-weight:600;
    }
  }

  & > p  {
    font-size:14px ;
      font-weight:600;
  }

`;

const Logo = styled(`img`)({
  width:64
})

const InputSearchField = styled(InputBase)`
background:#ffffff;
height:30px;
width:55%;
border-radius:5px
`



let Header = () => {
  const [open,setOpen]= useState(null);
  const handleClick=(e)=>{
    setOpen(e.currentTarget )
  }

  const hanldeClose=()=>{
    setOpen(null)
  }
  return (
    <AppBar position="static">
      <StyledToolbar>
        <Logo src={logoURL} alt="logo" />
        <Box onClick={handleClick}>
          <Menu />
          <Typography>Menu</Typography>
        </Box>
        <HeaderMenu open={open} hanldeClose={hanldeClose}/>
        <InputSearchField/>
        <Typography>IMDB<Box component="span">Pro</Box></Typography>
        <Box>
          <BookmarkAdd/>
          <Typography >Watchlist</Typography>
        </Box>
        <Typography>Sign In</Typography>
        <Box>
          <Typography>EN</Typography>
          <ExpandMore/>
        </Box>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
