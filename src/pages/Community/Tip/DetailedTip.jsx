import React from 'react';
import { useLocation, useNavigate  } from 'react-router-dom';

import {
  Paginations,
  Comments,
  CommentsList,
  Chips,
  Tags,
} from "../../../components";

import { Button, Grid, Container, Typography, TextField, Avatar, Stack, Paper,
  IconButton, Checkbox, } from '@mui/material';
import { styled } from "@mui/material/styles";


import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import {Favorite} from '@mui/icons-material';
import ShareIcon from '@mui/icons-material/Share';

// 제목 페이퍼 
const StyledPaper=styled(Paper)({
  backgroundColor:"#F1F8E9",
  borderRadius:"20px",
  padding:"1rem 3rem", 
  margin:"0",
})
// 콘텐츠 박스
const ContentField = styled(Container)({
  background:"#FFF3E0",
  borderRadius:"20px",
  padding:"2rem 3rem 2rem 3rem",

}); 
const StyledButton = styled(Button)({
  backgroundColor: '#FFA000',
  width: '10%',
  borderRadius:"10px",
  color: 'black',
  marginLeft:"1rem",
  float: 'right',
  fontWeight:"bold",
  textAlign: 'center',
});



// 팁 노하우 상세 페이지 

const DetailedTip = ({}) => {  
  const location = useLocation();
  //const practice = location.state;

  // 팁 받아옴 - 제목, 태그, 작성일, 닉네임, 내용 
  //ex
  const tip = {
    auth:"작성자", 
    title: "제목", 
    date: "2021-02-10", 
    content:"sodyddsodf sad fs;dfj;lskdjflkjl",
    likes:"999",
  }; 


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
      <Grid container  style={{padding:"1rem 5rem 4rem 5rem"}}>
        {/* 제목 부분 */}
        <Grid item xs={12} mt={6}>
              <StyledPaper>
                <Grid container>
                  <Grid item xs={12}  mt={1}>
                    <Typography variatn="h5" fontWeight="bold" >
                      {tip.title}
                    </Typography>
        
                  </Grid>
                  
                        
                  <Grid item xs={12} mt={4}>  
                    <Stack direction="row" style={{justifyContent:'space-between'}}>
                      <Stack direction="row">
                        <Avatar></Avatar>
                        <Typography>{tip.auth}</Typography>
                      </Stack>
                      <Typography style={{float:'right'}}>
                        작성일 2023-01-01
                      </Typography>
                    </Stack>
                  </Grid>
                 
                </Grid> 
              </StyledPaper>
            </Grid>


            {/* 태그 선택 부분 */}
            

            
            {/* 콘텐츠 */}
            <Grid item xs={12} mt={3}> 
                <ContentField style={{padding:"2rem 3rem 2rem 3rem"}}>
                  {tip.content}

                </ContentField>
            </Grid>  
            <Grid item xs={12} mt={4} style={{padding:"0 1rem"}}>
                <Stack direction="row" style={{justifyContent:"space-between"}}>
                <Typography >
                  좋아요<Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite style={{color:"red"}}/>} />
                </Typography>
              
                <div>
                  <Typography style={{display:'inline'}}>공유하기</Typography>
                  <IconButton  aria-label="delete" size="large"> 
                  <ShareIcon /> 
                  </IconButton>
                </div>

                </Stack>
          </Grid>
          <Grid item xs={12} mt={2} >
               <hr/>
          </Grid>
          <Grid item xs={12} mt={3} >
            <Comments />
          </Grid>
          <Grid item xs={12} mt={3} >
            <CommentsList />
          </Grid>

        
      </Grid>
      
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

export default DetailedTip;




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