import React, {useState} from 'react';
import {Box, Grid, Typography, Button, ButtonGroup, ClickAwayListener, Grow, Paper, Popper, MenuItem, MenuList, InputBase } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';


import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import DirectionsIcon from '@mui/icons-material/Directions';


import { styled } from "@mui/material/styles";





//options는 받아오는 검색 정렬 옵션






// 검색옵션, 검색바
function SearchBar({options, choice, setChoice, 
  setSearchKeyword, searchKeyword,
  isSearch, setIsSearch
}){
  
  //검색어 
  const handleSearchKeyword = (e) => {
    setSearchKeyword(e.target.value);
  }

  //검색 버튼 클릭
  const clickSearch = (e) => {
    setSearchKeyword(''); //검색창에 입력한 값 초기화
    setIsSearch(true); //검색 시작 전달
  }

 
  const [open, setOpen] = useState(false);  //옵션창 열기(true), 닫기(false)
  const anchorRef = React.useRef(null);

  //선택한 검색 옵션 (순서대로 인덱스)
  const handleClick = () => {
    console.info(`You clicked ${options[choice]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setChoice(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };


  return (
    <Grid container spacing={3}>
      {/* 드롭 다운 - 검색 조건  */}
      <Grid item xs={3} > 
        <ButtonGroup sx={{width:'100%'}}  variant="contained" ref={anchorRef} aria-label="split button"
        style={{height:"100%", backgroundColor:"#E9E9E9", borderRadius:"30px", boxShadow:"none",color:"black", fontSize:"1rem",lineHeight: '1.5rem'}}
        >
            <Button sx={{width:'100%'}}onClick={handleClick} 
            style={{backgroundColor:"#E9E9E9",boxShadow:"none", borderRadius:"30px",borderRight:"none",color:"black", fontSize:"1rem",lineHeight: '1.5rem'}}
            >
              {options[choice]}
            </Button>
            <Button
              style={{backgroundColor:"#E9E9E9",borderRadius:"30px", boxShadow:"none", color:"black" ,lineHeight: '1.5rem',fontSize:"1rem"}}
            
              aria-controls={open ? 'split-button-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-label="select merge strategy"
              aria-haspopup="menu"
              onClick={handleToggle}
            >
              <ArrowDropDownIcon />
            </Button>
        </ButtonGroup>
      </Grid>

      {/* 검색창 */}
      <Grid item xs={9}>
      <Paper
        component="form"
        style={{backgroundColor:"#E9E9E9", borderRadius:"30px", boxShadow:"none",}}
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' , margin:'0 auto'}}
      >
        
        <Popper
          sx={{
            zIndex: 5,
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
                transformOrigin:
                  placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="split-button-menu" autoFocusItem>
                    {options.map((option, index) => (
                      <MenuItem
                        key={option}
                        selected={index === choice}
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
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          onChange={handleSearchKeyword}
          value={searchKeyword}
          sx={{ ml: 1, flex: 1 }}
          placeholder="찾고 싶은 프로그램 제목/내용을 입력해주세요."
          inputProps={{ 'aria-label': 'search google maps' }}
        />
       
        {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton onClick={clickSearch} color="primary" sx={{ p: '8px' }} aria-label="directions">
          search
        </IconButton> */}
      </Paper>
      </Grid>

    
     
      
    </Grid>
         
  );
};

export default SearchBar;