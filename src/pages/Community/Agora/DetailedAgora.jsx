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







const DetailedAgora = () => {
  const navigate = useNavigate();

  const { state }  = useLocation();
  console.log(state)


  return (
    <Container>
      <Grid container spacing={2}>

        <Grid item xs={12} >
          <Typography variant="h4" align="center" gutterBottom>
            토의/토론 상세페이지
          </Typography>
        </Grid>

        <Grid item xs={5} style={{backgroundColor:'orange'}}>
          썸네일
        </Grid>

        <Grid item xs={7} >
          <Typography variant='h5'>
            입력한 주제 
          </Typography>
           <span variant="body2">토의/토론 유형</span>
           {
            state === "2"
            ? <span variant="body2">: 찬반</span>
            : <span variant="body2">: 자유</span>
           }
            <Stack direction="row" style={{justifyContent:'space-between'}}>
              <Stack direction="row">
                <Typography variant="body2">좋아요</Typography>{' '}
                <FavoriteRoundedIcon style={{color:'red'}}/>
                <Typography Typography variant="body2"> 999명</Typography>
              </Stack>

              <Typography variant="body2" style={{float:'right'}}>
                참여자 수 아이콘 999명
              </Typography>
            </Stack>
            <Stack >
              <Typography sx={{ fontSize: 13 }} color="text.secondary" 
                style={{textAlign:'right'}}>
                작성일 2023-01-01
              </Typography>
            </Stack>
        </Grid>


        <Grid item xs={12}>

        </Grid>
        
        <Grid item xs={12}>
          {
            state === "1"
            ? <DetailedFree/>
            : <DetailedYesNo/>
          }
        </Grid>
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

      {
        state === "2"
        ? 
        <Grid container spacing={2} style={{justifyContent:'center'}}>
          <Grid item xs={12} style={{textAlign:'center', margin:"2rem"}}>
            <span>찬성</span>
            <BorderLinearProgress variant="determinate" value={50} />
            <span>반대</span>
          </Grid>
        </Grid>
        : <div></div>
      
      }
      


      <Container>
          
          <Container style={{ textAlign:'center', marginBottom:'2rem'}}>
            {
              state === "2"
              ? <AgoraComments/>
              : <Comments/>
            }
            
          </Container>

          <Container style={{ marginBottom:'2rem'}}>
            <AgoraCommentsList type={state}/>
          </Container>

          <Paginations/>
      </Container>

      <Footer/>
    </Container>
  );
};

export default DetailedAgora;