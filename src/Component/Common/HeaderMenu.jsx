import {Menu,MenuItem} from "@mui/material"
import { Link  } from "react-router-dom"

import { routePath } from "../../Constants/route"


const HeaderMenu=({ open,hanldeClose })=>{
    const openMenu = Boolean(open)
    return(
        <Menu
        id="basic-menu"
        anchorEl={open}
        open={openMenu}
        onClose={hanldeClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link to={`${routePath.category}?category=popular`} style={{textDecoration:"none", color:"black"}}> 
        <MenuItem onClick={hanldeClose}>Popular</MenuItem>
        </Link>
        <Link to={`${routePath.category}?category=Top Rated`} style={{textDecoration:"none", color:"black"}}>
        <MenuItem onClick={hanldeClose}>Toprated</MenuItem>
        </Link>
        <Link to={`${routePath.category}?category=Upcoming`} style={{textDecoration:"none", color:"black"}}>
        <MenuItem onClick={hanldeClose}>Upcoming</MenuItem>
        </Link>
      </Menu>
    )
}

export default HeaderMenu;