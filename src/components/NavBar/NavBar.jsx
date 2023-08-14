import React from "react";

import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Hidden } from "@mui/material";
import { HideImage } from "@mui/icons-material";


const NavMenu = (props) => {
 
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {props.name}
      </Button>
      <Menu
        
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {props.items.map((item) => (
          item !== null ?  
          <MenuItem key={item} onClick={handleClose}>
            {item}
          </MenuItem> : null
        ))}
      </Menu>
    </div>
  );
};

export default function NavBar() {
  const navMenuItems = [
    ["홍보·이벤트", "정보마당"], // Menu items for "홍보마당"
    ["배움터", "나눔터"], // Menu items for "커뮤니티"
    [null], // Menu items for "창작마루"
    // Menu items for "소개"
    [null], // Menu items for "자료실"
  ];

  return (
    <div>
      <Grid container>
        {navMenuItems.map((items, index) => (
          <Grid item xs key={index}>
            <Link
              to={
                index === 0
                  ? ""
                  : index === 1
                  ? ""
                  : index === 2
                  ? "practicehome"
                  : ""
              }
            >
              <NavMenu
                name={
                  index === 0
                    ? "홍보마당"
                    : index === 1
                    ? "커뮤니티"
                    : index === 2
                    ? "창작마루"
                    : "자료실"
                }
                items={items}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

