import { Box , Grid, Button} from '@mui/material';
import React from 'react';
import { styled } from "@mui/material/styles";
import InputBase from '@mui/material/InputBase';

import SearchIcon from '@mui/icons-material/Search';


const MainGrid = styled(Grid)({

})
const SubGrid = styled(Grid)({

})

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "blue",
  '&:hover': {
    backgroundColor: "red",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: '30rem',
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
      width: '20rem',
    },
  },
}));

const SearchButton = styled(Button)({
  float: "right",
  backgroundColor: "white",
})




function ListTemplate () {
  return (
    <Box>
      <MainGrid container direction="column" >
        <MainGrid item>
          검색바
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="찾고싶은 프로그램 제목/내용을 입력하세요."
              inputProps={{ 'aria-label': 'search' }}
            />
            <SearchButton>
              검색
            </SearchButton>
          </Search>
        </MainGrid>

        <SubGrid container>
          <SubGrid item xs>
            태그
          </SubGrid>
          <SubGrid item xs>
            정렬 드롭다운
          </SubGrid>
        </SubGrid>

        <MainGrid item>
            창작물 목록 쫘르르
        </MainGrid>

        <MainGrid item>
          창작물 올리기 버튼
        </MainGrid>


      </MainGrid>
      

      
    </Box>
  );
};

export default ListTemplate;