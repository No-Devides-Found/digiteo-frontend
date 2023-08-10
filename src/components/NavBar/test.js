import React from "react";

import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

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
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

function NavBar() {
  return (
    <div>
      <Grid container>
        <Grid item xs>
          <Link to="/">
            <NavMenu name="홍보마당"></NavMenu>
          </Link>
        </Grid>
        <Grid item xs>
          <Link to="/">
            <NavMenu name="커뮤니티"></NavMenu>
          </Link>
        </Grid>
        <Grid item xs>
          <Link to="/">
            <NavMenu name="창작마루"></NavMenu>
          </Link>
        </Grid>
        <Grid item xs>
          <Link to="/">
            <NavMenu name="소개"></NavMenu>
          </Link>
        </Grid>
        <Grid item xs>
          <Link to="/">
            <NavMenu name="자료실"></NavMenu>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default NavBar;
