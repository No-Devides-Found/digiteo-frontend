import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Box from '@mui/material/Box';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

const options = ['최신순', '좋아요순'];

export default function Dropdown({order, setOrder}) {

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
    
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
    setOrder(selectedIndex);
    console.log(order)
  };

  const handleToggle = (e) => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <Box >
      <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button"
        style={{height:"100%", backgroundColor:"#E9E9E9", borderRadius:"20px", boxShadow:"none",color:"black", fontSize:"1rem",lineHeight: '1.5rem'}}
        >
        <Button onClick={handleClick} sx={{width:'100%'}}
        style={{backgroundColor:"#E9E9E9",boxShadow:"none", borderRadius:"20px",borderRight:"none",color:"black", fontSize:"1rem",lineHeight: '1.5rem'}}
        >
          {options[selectedIndex]}
        </Button>
        <Button
          style={{backgroundColor:"#E9E9E9", borderRadius:"20px", boxShadow:"none", color:"black" ,lineHeight: '1.5rem',fontSize:"1rem"}}
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
      style={{backgroundColor:"#E9E9E9", }}
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              backgroundColor:"#E9E9E9",
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
         
          >
            <Paper style={{backgroundColor:"#E9E9E9", }}>
              <ClickAwayListener onClickAway={handleClose} >
                <MenuList id="split-button-menu" autoFocusItem
                style={{backgroundColor:"#E9E9E9", width:"100%", }}>
                  {options.map((option, index) => (
                    <MenuItem
                      style={{backgroundColor:"#E9E9E9", width:"100%"}}
                      key={option}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  );
}
