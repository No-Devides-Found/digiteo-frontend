import React, {useState} from 'react';
import { Grid , Box, Button} from '@mui/material';
import { styled } from "@mui/material/styles";

// import {Dropdown, SearchBar} from '../../components/';
import Dropdown from '../common/Dropdown/Dropdown';
import SearchBar from '../common/SearchBar/SearchBar';
import Tags from '../common/Tags/Tags';
import Paginations from '../common/Paginations/Paginations'; 

import CreationTemplate from './CreationTemplate';

const StyledBox = styled(Box)({
  
  margin: '0 auto',
  width: '100%',
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





// 
function ListTemplate ({page}) {

  console.log('여기 리스트 템플릿', page) //페이지 정보 잘 오는지 확인 -완료

   // 페이지 유형에 맞는 창작물 데이터 목록을 가져와야 함. -> 제목, 닉네임, 좋아요 개수, 
  //const [practice, setPractice] = useState([]);

  //const { title, createdBy,  tags, type, file, story, review } = practice; //비구조화 할당

  //가져온 창작물 객체 목록
  const practices = [
  {
    title: '',
    createdBy: '',
    tags: [],
    type: '',
    file: '',
    story: '',
    review: '',
  },
  {
    title: '',
    createdBy: '',
    tags: [],
    type: '',
    file: '',
    story: '',
    review: '',
  },
  {
    title: '',
    createdBy: '',
    tags: [],
    type: '',
    file: '',
    story: '',
    review: '',
  },
  {
    title: '',
    createdBy: '',
    tags: [],
    type: '',
    file: '',
    story: '',
    review: '',
  },


]; 

 
  return (
      <StyledBox>
        <Grid container >
          {/* 창작물 목록 리스트 */}
          <Grid item xs={12}>
            {practices.map((practice, index) => (
              <CreationTemplate key={index} practice={practice}/>
            ))}
          </Grid>


          {/* 페이지네이션 */}
          <Grid item xs={12}>
            <Paginations />
          </Grid>
        </Grid>
        
      </StyledBox>

  );
};

export default ListTemplate;