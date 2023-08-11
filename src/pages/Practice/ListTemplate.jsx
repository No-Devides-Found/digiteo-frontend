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
  backgroundColor: '#FFF5E5',
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
  marginBottom: '1rem',
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
  const [practice, setPractice] = useState({
    title: '',
    createdBy: '',
    tags: [],
    type: '',
    file: '',
    story: '',
    review: '',
  });

  const { title, createdBy,  tags, type, file, story, review } = practice; //비구조화 할당

  const [searchKeyword, setSearchKeyword ]= useState(''); //검색어
  const [choice, setChoice] = useState(0); //선택 검색 옵션
  // const [tags, setPractice] = useState([]);

  return (
      <StyledBox>
        <Grid container style={{padding: '0 5rem',}}>
          <StyledGrid item xs={12}>
            <SearchBar  choice={choice} setChoice={setChoice} options={options} searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword}/>
          </StyledGrid>
          <StyledGrid item xs={9}>
            <Tags  programs={programs} tags={practice.tags} setPractice={setPractice}/>
          </StyledGrid>
          <StyledGrid item xs={3} style={{marginBottom:'5rem', textAlign:'right'}}>
            <Dropdown  />
          </StyledGrid> 
          <StyledGrid item xs={12}>
            <CreationTemplate/>
          </StyledGrid>
          <PostButton type="button" href="/postpractice">
              창작물 올리기
          </PostButton>
        </Grid>
        
      </StyledBox>

  );
};

export default ListTemplate;