import React, {useState} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
//import FavoriteRoundedIcon  from '@mui/icons-material/FavoriteRoundedIcon';
import BorderColorIcon from '@mui/icons-material/BorderColor';

import { 
  Paginations,
  AgoraComments,
  AgoraCommentsList,
  Chips, Footer,
  Tags, Comments,
  DetailedFree, DetailedYesNo
} from "../../../components/";

import { styled } from "@mui/material/styles";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import {Favorite} from '@mui/icons-material';
import ShareIcon from '@mui/icons-material/Share';


import { 
  Typography, 
  Input, 
  TextField, 
  Box, 
  Container, 
  Button,
  Stack,
  Radio,
  Avatar,
  Paper,
  IconButton,
  RadioGroup,
  FormControlLabel,
  Grid
} from '@mui/material';

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



// 찬반 막대
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  width:"40rem",
  display:"inline-block",
  margin:'0 1rem',
  height: '2rem',
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#F24E1E',
    //theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#43CCF8' : '#F24E1E',
  },
}));

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };





// 배움터 - Q&A 상세페이지
const DetailedQA = () => {
  const navigate = useNavigate();

  const { state }  = useLocation();
  console.log(state)

  // id 로 특정 질문글 가져오기
  const qa = {
    title:"제목",
    content:"내용",
    date:"작성일자",
  }

  const gotoEdit=(e)=>{

  }


  return (
    <Container>
      <Grid container  style={{padding:"1rem 5rem 4rem 5rem"}}>

        {/* 제목 부분 */}
        <Grid item xs={12} mt={6}>
            <StyledPaper>
              <Grid container>
                {/* 게시글의 작성자일 경우에만 수정 버튼 보여야 함 */}
                <Grid item xs={12} style={{display:"flex", justifyContent:"flex-end"}}>
                    <Button onClick={gotoEdit} style={{color:"#757575", fontSize:"13px"}} >
                      수정하기 
                      <BorderColorIcon />
                    </Button>
                </Grid>
                <Grid item xs={12}  mt={1}>
                  <Typography variant='h6' fontWeight="bold"  >
                      {qa.title}
                  </Typography>      
                </Grid>
                
                      
                <Grid item xs={12} mt={2} style={{display:"flex", justifyContent:"space-between"}}>
                        <Stack direction="row">
                          <Avatar style={{marginRight:"1rem"}}>H</Avatar>
                          <Typography style={{lineHeight:"40px"}}> 
                            {qa.auth}
                          </Typography>
                        </Stack>
                        <Typography style={{lineHeight:"40px"}} > 
                          {qa.date}
                        </Typography>
                </Grid>
              </Grid> 
            </StyledPaper>
          </Grid>
        

        
        <Grid item xs={12}>
          {qa.files}
        </Grid>

        {/* 가지 */}
          <Grid container sx={{justifyContent:"space-between", padding:"0 13%"}}>
            <Grid item xs={0.15} style={{backgroundColor:"#A1887F", height:"5rem"}}>
            </Grid>
            <Grid item xs={0.15} style={{backgroundColor:"#A1887F", height:"5rem"}}>
            </Grid>
          </Grid>

        {/* q&a 내용 */}
        <Grid item xs={12}> 
            <ContentField style={{padding:"2rem 3rem 2rem 3rem"}}>
              <TextField 
                name='content' 
                multiline
                defaultValue={qa.content}
                rows={8}
                InputProps={{ readOnly: true }} 
                style={{width:"100%"}}
            
                />

            </ContentField>
        </Grid>  
        
        <Grid container  >
          <Grid item xs mt={4} style={{padding:"0 2rem"}}>
            <Typography >
              좋아요<Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite style={{color:"red"}} />} />
            </Typography>
          </Grid>
          <Grid item xs={{float:'right'}} mt={4} style={{padding:"0 2rem"}}>
              <Typography style={{display:'inline'}}>공유하기</Typography>
                <IconButton  aria-label="delete" size="large"> 
                <ShareIcon /> 
                </IconButton>
          </Grid>
        </Grid>
      
      
        <Grid item xs={12} mt={3} style={{padding:"0 2rem"}}>
          <Comments/>        
        </Grid>
        <Grid item xs={12} style={{padding:"0 2rem"}}>
          <AgoraCommentsList type={state}/> 
        </Grid>


        <Grid item xs={12} mt={3}>
          <Paginations/>
        </Grid>
          

          
      </Grid>
      
    </Container>
  );
};

export default DetailedQA;