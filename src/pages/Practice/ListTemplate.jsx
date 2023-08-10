import React, {useState} from 'react';
import { Grid , Box, Button} from '@mui/material';
import { styled } from "@mui/material/styles";

// import {Dropdown, SearchBar} from '../../components/';
import Dropdown from '../../components/Dropdown/Dropdown';
import SearchBar from '../../components/SearchBar/SearchBar';
import Tags from '../../components/Tags/Tags';
import Paginations from '../../components/Paginations/Paginations'; 

import CreationTemplate from './CreationTemplate';

const StyledBox = styled(Box)({
  backgroundColor: 'yellowgreen',
  margin: '0 auto',
  width: '75rem',
  padding: '2rem 5rem',


})

const PostButton = styled(Button)({
  display: 'block',
  margin: '0 auto',
  width: '10rem',
  backgroundColor:'white',
  textAlign: 'center'
})
const StyledGrid = styled(Grid)({
  margin: '1rem',
})
const PageGrid = styled(Grid)({
  margin: '0 auto',
})

const options = ["제목+닉네임", "제목", "닉네임"]
const programs = [
  '프로그램명1',
  '프로그램명2', 
  '프로그램명3', 
  '프로그램명4', 
  '프로그램명5', 
  '프로그램명6', 
  '프로그램명7', 
];



function ListTemplate () {
  const [searchKeyword, setSearchKeyword ]= useState(''); //검색어
  const [choice, setChoice] = useState(0); //선택 검색 옵션

  return (
      <StyledBox>
        <Grid  container
                direction="column"
                justifyContent="space-around"
                alignItems="stretch"  >
          <Grid item xs={11} md={11} >
           <SearchBar choice={choice} setChoice={setChoice} options={options} searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword}/>
          </Grid>

          <Grid item>
            <StyledGrid container
                  direction="row"
                  justifyContent="center"
                  alignItems="stretch" >
              <StyledGrid item xs={8}>
                <Tags programs={programs}/>
              </StyledGrid>
              <StyledGrid item xs={2}>
                <Dropdown/>
              </StyledGrid>

            </StyledGrid>
          </Grid>
   
          <Grid item xs={11}>
          <CreationTemplate/>
          </Grid>

          <StyledGrid item xs={11}>
            <PostButton type="button" href="/postpractice">
              창작물 올리기
            </PostButton>
          </StyledGrid>
          <PageGrid item xs={11} >
            <Paginations />
          </PageGrid>
          
        </Grid>
        
      </StyledBox>

  );
};

export default ListTemplate;