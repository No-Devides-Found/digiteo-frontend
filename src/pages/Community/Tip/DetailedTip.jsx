import React from 'react';
import { useLocation, useNavigate  } from 'react-router-dom';

import {
  Paginations,
  Comments,
  CommentsList,
  Chips,
  Footer, 
} from "../../../components";

import { Button, Grid, Container, Typography, TextField, Avatar, Stack, 
  IconButton, Checkbox, } from '@mui/material';
import { styled } from "@mui/material/styles";


import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import {Favorite} from '@mui/icons-material';
import ShareIcon from '@mui/icons-material/Share';




const Practice = ({idx, title, type, tags, story, review, createdBy}) => {  
  const location = useLocation();
  const practice = location.state;

  const navigate = useNavigate();
  const movetoTip=(e)=>{
    navigate('/tip');
  }
  // 나눔터 팁노하우는 수정 불가능한 거 맞는지 확인 필요
  // const gotoEdit = (e) => {
  //   navigate(`/editpractice`);
  // }

  return (
    <Container>
      <ButtonContainer>
        <UpperButton onClick={movetoTip} style={{float:'left'}}> 나눔터로 돌아가기</UpperButton> 

        {/* 작성자만 보이는 버튼으로 해야 함 */}
        <UpperButton>삭제하기</UpperButton>
        {/* <UpperButton onClick={gotoEdit}>수정하기</UpperButton> */}
      </ButtonContainer>

      <StyledContainer>
        <Typography>
          <Subtitle variant='subtitle1'>팁&노하우 제목</Subtitle>
          <Grid container spaing={2} >
            <Grid item xs={12} >
              {/* 선택된 태그들 */}
              <Container >
                <Chips style={{justifyContent:'flex-end'}}/>
              </Container>
            </Grid>
            {/* style={{borderBottom:'solid black 1px'}} */}
            <Grid item xs={12} >  
              <Stack direction="row" style={{justifyContent:'space-between'}}>
                <Stack direction="row">
                  <Avatar>H</Avatar><Typography>닉네임</Typography>
                </Stack>
                <Typography style={{float:'right'}}>작성일 2023-01-01</Typography>
              </Stack>
              
            </Grid>
          </Grid>
        </Typography>
      </StyledContainer>
     
      <StyledContainer>
        {/* <Subtitle variant='subtitle1'>창작물 소개</Subtitle> */}
          {/* <Typography variant='subtitle2'>* 창작 스토리 {'('}계기, 과정, 의도{')'}</Typography>  */}
          <StyledTextField id='story' name='story' sx={{width:'100%'}}  
          //defaultValue={practice.story} 
          InputProps={{ readOnly: true }} variant='outlined' 
          placeholder="팁 노하우 내용!!"/>
          
          
      </StyledContainer>


        <StyledContainer>
          <Grid container>
            <Grid item xs>
          <Typography >
            좋아요<Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
          </Typography>
            
            </Grid>
            <Grid item xs={{float:'right'}}>
            <Typography style={{display:'inline'}}>공유하기</Typography>
              <IconButton  aria-label="delete" size="large"> 
               <ShareIcon /> 
              </IconButton>
            </Grid>
          </Grid>
        </StyledContainer>
        <StyledContainer>
          댓글 {'('}총~개{')'}
          <Container style={{ textAlign:'center', marginBottom:'2rem'}}>
            <Comments/>
          </Container>
          <Container style={{ marginBottom:'2rem'}}>
            <CommentsList />
          </Container>
          <Paginations/>
        </StyledContainer>

    </Container>
  );
};

export default Practice;




const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

//{ idx, title, tags, createdBy, type, story, review }
const StyledContainer = styled(Container)({
  width: '60rem', 
  backgroundColor: '#FFF5E5',
  padding: '2rem',
  marginBottom:'0.5rem',
  height:'fit-content',

});
const ButtonContainer=styled(Container)({
  width: '60rem', 
  padding:'0',
  marginBottom:'0.5rem',
  textAlign:'right',
 
})
const UpperButton=styled(Button)({
  backgroundColor:'orange',
  margin: '0 0.3rem',
})
const Subtitle = styled(Typography)({
  marginBottom: '0.5rem',
  fontSize:'1.1rem',
  fontWeight:'bold',
}); 

const StyledTextField = styled(TextField)(({ theme }) => ({
  rows: '8',
  "& .MuiInputBase-input:read-only": {
    color: "black", // 뚜렷한 블랙으로 글자색 변경

  },
  "& .MuiOutlinedInput-root": {
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: 'grey',
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: 'grey',
    },
  },
}));