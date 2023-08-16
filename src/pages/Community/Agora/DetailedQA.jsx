import React, {useState} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

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
  IconButton,
  RadioGroup,
  FormControlLabel,
  Grid
} from '@mui/material';


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


  return (
    <Container>
      <Grid container spacing={2}>

        <Grid item xs={12} >
          <Typography variant="h4" align="center" gutterBottom>
            Q&A 상세페이지 제목
          </Typography>
        </Grid>

        {/* 프로그램 태그들 */}
        <Grid item xs={12} >
          <Chips style={{justifyContent:'flex-start'}}/>
        </Grid>

        <Grid item xs={12} style={{display:"flex", justifyContent:"space-between"}}>
          <div>닉네임</div>
          <div>작성일자 2023-01-01</div>
        </Grid>

        
        
        <Grid item xs={12}>
          파일 업로드하기 <input type="file" />
        </Grid>

        {/* q&a 내용 */}
        <Grid item xs={12}>
          <TextField id="outlined-basic" sx={{width:'100%'}} variant="outlined" 
            name='content' 
            defaultValue="입력내용"
            rows={8}
            InputProps={{ readOnly: true }} 
            placeholder='질문 내용 2000자 이내로 작성해주세요.(파일은 최대 100M 크기까지 업로드 가능합니다.)'/>
        </Grid>

        
        <Grid container spacing={2} style={{marginTop:"3rem"}}>
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
      </Grid>
      <Container>
          
          <Container style={{ textAlign:'center', marginBottom:'2rem'}}>
            <Comments/>            
          </Container>
          {/* 댓글 */}
          <Container style={{ marginBottom:'2rem'}}>
            <AgoraCommentsList type={state}/>
          </Container>

          <Paginations/>
      </Container>

      <Footer/>
      
    </Container>
  );
};

export default DetailedQA;