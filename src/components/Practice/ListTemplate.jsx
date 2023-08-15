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
  backgroundColor: '#FFF5E5',
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




// 
function ListTemplate ({page}) {

  console.log('여기 리스트 템플릿', page) //페이지 정보 잘 오는지 확인 -완료

  // 페이지 유형에 맞는 창작물 데이터 목록을 가져와야 함. -> 제목, 닉네임, 좋아요 개수, 
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

  // 검색바 관련 상태값
  const [searchKeyword, setSearchKeyword ]= useState(""); //검색어
  const [searchOption, setSearchOption]=useState(0); 


  // const [tags, setPractice] = useState([]);

  return (
      <StyledBox>
        <Grid container spacing={1}>
          {/* 검색바 */}
          <Grid item xs={12}>
            <SearchBar 
              searchKeyword={searchKeyword} 
              setSearchKeyword={setSearchKeyword}
              searchOption={setSearchOption} 
              setSearchOption={setSearchOption} 
              options={options}
            />
          </Grid>

          {/* 프로그램 태그 선택 */}
          <Grid item xs={9}>
            <Tags  programs={programs} tags={practice.tags} setPractice={setPractice}/>
          </Grid>
          
          {/* 정렬순 드롭다운 */}
          <Grid item xs={3} style={{textAlign:'right'}}>
            <Dropdown  />
          </Grid> 

          {/* 창작물 목록 리스트 하나 */}
          <Grid item xs={12}>
            <CreationTemplate/>
          </Grid>

          {/* 창작물 작성 페이지로 이동 */}
          <PostButton type="button" href="/postpractice">
            창작물 올리기
          </PostButton>

          {/* 페이지네이션 */}
          <StyledGrid item xs={12} style={{marginTop:'2rem'}}>
           <Paginations />
          </StyledGrid>
          
        </Grid>
        
      </StyledBox>

  );
};

export default ListTemplate;