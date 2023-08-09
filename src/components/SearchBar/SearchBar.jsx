import React, {useState} from 'react';
import {Box, Grid, Typography,Button, ButtonGroup, ClickAwayListener, Grow, Paper, Popper, MenuItem, MenuList, InputBase } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';

import { styled } from "@mui/material/styles";


const Search = styled('div')(({ theme }) => ({
  display: 'inline-block',
  
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "orange",
  '&:hover': {
    backgroundColor: "yellow",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: '35rem',
  },
}));


const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '25rem',
    },
  },
}));


// 검색 버튼 
const SearchButton = styled(Button)({
  height: '100%',
  position: 'absolute',
  float: "right", 
  
  backgroundColor: "white",
  '&:hover': {
    backgroundColor: "red",
  },
})
const StyledButtonGroup = styled(ButtonGroup)({
})
//options는 받아오는 검색 정렬 옵션






// 검색옵션, 검색바
function SearchBar({options, choice, setChoice, setSearchKeyword, searchKeyword}){
  
  //검색


  const handleSearchKeyword = (e) => {
    setSearchKeyword(e.target.value);
  }

  //검색 버튼 클릭 시 
  const onClick = (e) => {
    setSearchKeyword(''); //검색창에 입력한 값 지우기
  }

  //검색 옵션 
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
    <Box>
      <Grid   container
              direction="row"
              justifyContent="center"
              alignItems="stretch">
      <Grid item  > 
      <StyledButtonGroup variant="contained" ref={anchorRef} aria-label="split button">
          <Button onClick={handleClick}>{options[choice]}</Button>
          <Button
            size="small"
            aria-controls={open ? 'split-button-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-label="select merge strategy"
            aria-haspopup="menu"
            onClick={handleToggle}
          >
            <ArrowDropDownIcon />
          </Button>
      </StyledButtonGroup>
        <Popper
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
      </Grid>
      <Grid item>

      </Grid>
        <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
        
            <StyledInputBase
                    placeholder="찾고싶은 프로그램 제목/내용을 입력하세요."
                    inputProps={{ 'aria-label': 'search' }}
                    name="searchKeyword"
                    value={searchKeyword}
                    onChange={handleSearchKeyword}
            />
          
          <SearchButton type="submit" onClick={onClick} > 
                    검색
          </SearchButton>  
        </Search>
        
</Grid>
     
      


    </Box>
         
  );
};

export default SearchBar;