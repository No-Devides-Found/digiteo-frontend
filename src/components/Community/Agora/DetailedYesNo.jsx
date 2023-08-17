import React, {useState} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import {
  Paginations,
  AgoraComments,
  AgoraCommentsList,
  Chips, Footer,
  Tags
} from "../../../components";

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
  ToggleButton,
  ToggleButtonGroup,
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



const ContentField = styled(Container)({
  background:"#FFF3E0",
  borderRadius:"20px",
  padding:"2rem 3rem",
}); 



const DetailedYesNo = ({type, post}) => {

  const [choice, setChoice] = React.useState("yes");  //찬반 선택  //찬반 선택 댓글

  const handleChange = (e) => {  //찬반 선택 세팅
    setChoice(e.target.value);
  };



  return (
    <Stack>
      <Grid container spacing={2}>

        
        <Grid item xs={12} mt={3}>
          <Typography variant="h6" >이슈 정리</Typography>
          </Grid>
          <Grid item xs={12}>
            <ContentField>
              <TextField 
                multiline
                rows={4}
                defaultValue={post.summary} 
                style={{width:'100%'}}
                required
                InputProps={{ readOnly: true }} 
                />
            </ContentField>
        </Grid>


        <Grid item xs={6} mt={3}>
          <Typography variant="h6">찬성 입장</Typography>
            <ContentField >
              <TextField 
                multiline
                rows={2}
                defaultValue={post.yes}
                InputProps={{ readOnly: true }} 
                style={{width:'100%'}}
                required
                placeholder='찬성측 입장을 적어주세요.'/>  

            </ContentField>
        </Grid>
        <Grid item xs={6} mt={3}>
        <Typography variant="h6">반대 입장 </Typography>
          <ContentField >
            <TextField 
              multiline
              rows={2}
              defaultValue={post.no}
              InputProps={{ readOnly: true }} 
              style={{width:'100%'}}  
              required
              placeholder='반대측 입장을 적어주세요.'/>  
          </ContentField>
        </Grid>


        <Grid item xs={12}>
          <Typography variant="h6">
            내 의견

            {/* 작성자가 선택한 입장에 따라 selected ,disabled 달라져야 함 */}
            <ToggleButtonGroup
              color="primary"
              value={post.choice}
              exclusive
              aria-label="Platform"  
              style={{width: '100%'}}    
            >
              <ToggleButton value="yes" 
                selected
                style={{width: '50%'}}    
              >
                찬성
              </ToggleButton>
              <ToggleButton value="no" 
              disabled
              style={{width: '50%'}}    
              >
                반대
              </ToggleButton>
            </ToggleButtonGroup>
          </Typography>
          
            <TextField 
                defaultValue={post.yes}
                InputProps={{ readOnly: true }} 
                style={{width:'100%'}}  
                required
                //placeholder='이슈에 대한 나의 의견을 적어주세요.'
                />  
        </Grid>
       

      </Grid>
        
    </Stack>
  );
};

export default DetailedYesNo;