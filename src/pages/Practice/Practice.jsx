import React from 'react';
import { useLocation, useNavigate  } from 'react-router-dom';

import {
  Paginations,
  Comments,
  CommentsList,
  Chips, 
} from "../../components";

import { Button, Grid, Container, Typography, TextField, Avatar, Stack, IconButton} from '@mui/material';
import { styled } from "@mui/material/styles";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import {Favorite} from '@mui/icons-material';
import ShareIcon from '@mui/icons-material/Share';




const Practice = ({idx, title, type, tags, story, review, createdBy}) => {  
  const location = useLocation();
  const practice = location.state;

  const navigate = useNavigate();
  const gotoEdit = (e) => {
    navigate(`/editpractice`);
  }

  return (
    <Container>
      <ButtonContainer>
        {/* 작성자만 보이는 버튼으로 해야 함 */}
        <UpperButton>삭제하기</UpperButton>
        <UpperButton onClick={gotoEdit}>수정하기</UpperButton>
      </ButtonContainer>

      <StyledContainer>
        <Typography>
          <Subtitle variant='subtitle1'>창작물 대제목</Subtitle>
          <Grid container spaing={2} >
            <Grid item xs={4} >
              <Stack direction="row" spacing={2}>
                <Avatar>H</Avatar><Typography>닉네임</Typography>
              </Stack>
            </Grid>
            <Grid item xs={8} >
              {/* 선택된 태그들 */}
              <Container >
                <Chips style={{justifyContent:'flex-end'}}/>
              </Container>
              
            </Grid>
          </Grid>
        </Typography>
      </StyledContainer>
      <StyledContainer>
        창작물이 들어갈 공간
      </StyledContainer>

      <StyledContainer>
        <Subtitle variant='subtitle1'>창작물 소개</Subtitle>
          <Typography variant='subtitle2'>* 창작 스토리 {'('}계기, 과정, 의도{')'}</Typography> 
            <StyledTextField id='story' name='story' sx={{width:'100%'}}  
            defaultValue={practice.story} 
            InputProps={{ readOnly: true }} 
            variant='outlined' />
          
          <Typography variant='subtitle2'>* 후기</Typography> 
          <StyledTextField id='review' name='review'  sx={{width:'100%'}} defaultValue={practice.review} InputProps={{ readOnly: true }} variant='outlined'  />
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