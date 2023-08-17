import React, {useState} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { styled } from "@mui/material/styles";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { 
  Paginations,
  AgoraComments,
  AgoraCommentsList,
  Chips, Footer,
  Tags, Comments,
  DetailedFree, DetailedYesNo
} from "../../../components/";

import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import {Favorite} from '@mui/icons-material';
import ShareIcon from '@mui/icons-material/Share';


import { 
  Paper,
  Chip,
  Avatar,
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


const Maindiv=styled(`div`)({
  display:'block',
  margin:"0 auto",
  fontFamily:"Kumbh Sans",
  padding:"0 20%", 
})


const StyledGrid=styled(Grid)({
  display:'block',
  margin:"0 auto", 
  padding:"0 0 0 0"
})

// 제목 페이퍼 
const StyledPaper=styled(Paper)({
  backgroundColor:"#F1F8E9",
  borderRadius:"20px",
  padding:"1rem", 
  margin:"0",
})
//콘텐츠 페이퍼
const ContentPaper=styled(Paper)({
  backgroundColor:"#FFF3E0",
  borderRadius:"20px",
  padding:"2rem 3rem", 
})

const StyledChip=styled(Chip)({
  width:'50%', 
  backgroundColor:"#C5E1A5"
})






const DetailedAgora = () => {
  const navigate = useNavigate();

  const { state }  = useLocation();
  console.log(state)


  return (
    <Maindiv>
      <StyledGrid container >
      <Grid container spacing={2}>
        

        <StyledGrid item xs={12}>
          {/* 포스트 제목 부분 */}
          <StyledPaper>
            <Grid container >
              <Grid item xs={5} >
                <img src="/img/video.png" alt="video-box" width="80%"/>
              </Grid>

              <Grid item xs={7} style={{padding:"0 2rem 1rem 0 "}}>
                <Grid container>
                  <Grid item xs={12} mt={4}>
                      <Typography variant='h5' fontWeight="bold"  >
                        입력한 주제
                      </Typography>
                  </Grid>
                  <Grid item xs={12}  mt={3}>
                    <span variant="body2">토의/토론 유형</span>
                    {
                      state === "2"
                      ? <span variant="body2">: 찬반</span>
                      : <span variant="body2">: 자유</span>
                    }
                  </Grid>
                  

                  <Grid item xs={12} mt={5} style={{ display:"flex", justifyContent:'space-between'}}>
                    <Stack direction="row" >
                          <Typography variant="body2">좋아요 {' '}</Typography>
                          <FavoriteRoundedIcon style={{color:'red', margin:"0 0.5rem"}}/> 
                          <Typography variant="body2"> 명</Typography>
                    </Stack>
                    <Stack direction="row" >
                          <Typography variant="body2">참여인원 {' '}</Typography>
                          <PeopleAltIcon style={{margin:"0 0.5rem"}}/> 
                          <Typography variant="body2"> 명</Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} mt={2}>
                    <Typography variant="body2" style={{color:'gray',  textAlign:"right"}}>
                         작성일
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </StyledPaper>


          
        </StyledGrid>

        

        

   
            <Stack direction="row" style={{justifyContent:'space-between'}}>
              <Stack direction="row">
                <Typography variant="body2">좋아요 {' '}</Typography>
                <FavoriteRoundedIcon style={{color:'red'}}/> 
                <Typography Typography variant="body2"> 명</Typography>
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
            좋아요<Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite style={{color:"red"}}/>} />
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
            <span style={{textAlign:'left'}}>찬성</span>
            <BorderLinearProgress variant="determinate" value={50} style={{width:"70%"}} />
            <span style={{textAlign:'right'}}>반대</span>
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


      </StyledGrid >
    </Maindiv>
  );
};

export default DetailedAgora;