import React, {useState} from 'react';
import {  useNavigate } from 'react-router-dom';
import { Container, Grid , Box, Button, ToggleButton, ToggleButtonGroup, Typography} from '@mui/material';
import { styled } from "@mui/material/styles";

import {LeftList, Chips, Dropdown, AgoraList, Paginations,
  SearchBar, Footer} from '../../../components';

const StyledToggleButton=styled(ToggleButton)({
  width:'15rem',
  backgroundColor:'orange',
  height:'3rem',
  // margin: '0 1rem',
  color:'black'
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



const Agora = () => {
  const [page, setPage] = useState("agora"); //페이지 (배움터 / Q&A)

  const navigate = useNavigate();

  const [searchKeyword, setSearchKeyword ]= useState(''); //검색어
  const [choice, setChoice] = useState(0); //선택 검색 옵션

  // 글쓰기 버튼 - 이동
  const postAgora=(e)=>{
    if(page==="agora"){
      navigate('/postagora') //토의토론 작성 페이지로 이동
    }else{
      navigate('/postqa') //q&a 작성 페이지로 이동
    }
    
  }

  //배움터-큐엔에이 토글
  const handlePage=(e)=>{
    setPage(e.target.value);
    console.log(page)
  }




  return (
    <Container fixed >
      <Grid container spacing={2} >

        {/* 왼쪽 메뉴바 */}
        <Grid item xs={4}>
          <LeftList page={page}/>
        </Grid>

        <Grid item xs={8} >
          <Box>
            <Typography variant="h4" gutterBottom>배움터</Typography>
          </Box>
          <Box>
          <ToggleButtonGroup
            color="primary"
            value={page}
            exclusive
            onChange={handlePage}
            aria-label="Platform"    
            style={{width:"100%"}}  
          >
              <ToggleButton value="qa" style={{width:"50%"}}>
                Q & A
              </ToggleButton>
              <ToggleButton value="agora" style={{width:"50%"}}>
                배움터
              </ToggleButton>
          </ToggleButtonGroup>

          </Box>
          <Box>
            <SearchBar choice={choice} setChoice={setChoice} 
              options={options} 
              searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword}/>
          </Box>          
        </Grid>


        {/* 태그들 */}
        <Grid item xs={10}>
          <Chips style={{justifyContent:'flex-start'}} />
        </Grid>

        {/* 정렬 드롭다운 */}
        <Grid item xs={2} style={{ justifyContent:'flex-end'}}>
          <Dropdown />
        </Grid>

        <Grid item xs={12}>
          <AgoraList page={page}/>
        </Grid>

        <Grid item xs={12}>
          <Button onClick={postAgora} style={{display:'block', margin:'0 auto'}}>
            글쓰기
          </Button> 
        </Grid>

        {/* 페이지네이션 */}
        <Grid item xs={12}>
          <Paginations/>
        </Grid>
      </Grid>
      
      

    </Container>
  );
};

export default Agora;