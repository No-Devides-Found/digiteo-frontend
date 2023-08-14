import React, {useState} from 'react';
import {  useNavigate } from 'react-router-dom';
import { Container, Grid , Box, Button, Typography} from '@mui/material';
import { styled } from "@mui/material/styles";

import {LeftList, Chips, Dropdown, AgoraList, Paginations,
  SearchBar, Footer} from '../../../components';

const StyledButton=styled(Button)({
  width:'15rem',
  backgroundColor:'orange',
  height:'3rem',
  margin: '0 1rem',
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
  const page = 'agora'; 
  const navigate = useNavigate();
  const [searchKeyword, setSearchKeyword ]= useState(''); //검색어
  const [choice, setChoice] = useState(0); //선택 검색 옵션



  const movetoQA = (e) =>{
    navigate('/')  //일단 홈으로 가기/ 어디로 가야 하나? 
  }
  const postAgora=(e)=>{
    navigate('/postagora')
  }
  




  return (
    <Container fixed >
      <Grid container spacing={2} >

        {/* 왼쪽 메뉴바 */}
        <Grid item xs={4}>
          <LeftList page={page}/>
        </Grid>


        {/* 나눔터 */}
        <Grid item xs={8} >
          <Box>
            <Typography variant="h4" gutterBottom>배움터</Typography>
          </Box>
          <Box>
            <StyledButton onClick={movetoQA} style={{backgroundColor:'lightgray'}}>
              Q & A
            </StyledButton>
            <StyledButton>
              배움터
            </StyledButton>
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
          <AgoraList/>
        </Grid>
        <Grid item xs={12}>
          <Button onClick={postAgora} style={{display:'block', margin:'0 auto'}}>글쓰기</Button> 
        </Grid>
        <Grid item xs={12}>
        <Paginations/>
        </Grid>
      </Grid>
      <Footer/>
      
      {/* <Container>
        <TipList/>
      </Container> */}

      {/* <Container>
        <Button onClick={onClick} style={{display:'block', margin:'0 auto'}}>글쓰기</Button> 
      </Container> */}
      

      
      

    </Container>
  );
};

export default Agora;