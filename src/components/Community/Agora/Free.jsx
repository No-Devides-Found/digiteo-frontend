import { Container, Button, Grid, TextField, Typography } from '@mui/material';
import React, {useState} from 'react';
import {Tags, DragUploadFile} from '../../../components';

import { styled } from "@mui/material/styles";
import { 
  Paper,
  Chip,
  Avatar,
  Input, 
  Box, 
  Stack,
  Radio,
  IconButton,
  RadioGroup,
  FormControlLabel,
} from '@mui/material';




const ContentField = styled(Container)({
  background:"#FFF3E0",
  borderRadius:"20px",
  padding:"2rem 3rem",
}); 



// 자유 형식 아고라 글 작성
function Free({
  summary, setSummary, 
  my_opinion, setMyOpinion,
  files, setFiles}) 
  {

  // 이슈 요약 정리 
  const onChangeSummary = (e) => {
    setSummary(e.target.value)
  }
  // 내 의견
  const onChangeOpinion = (e) => {
    setMyOpinion(e.target.value)
  }

  return (
    <div>
      <Grid container>

        <Grid item xs={12} mt={3}>
          <Typography variant="h6">파일 업로드</Typography>
        </Grid>
        <Grid item xs={12}>
          <DragUploadFile value={files} onChange={setFiles}/>
        </Grid>
        <Grid item xs={12} mt={3}>
        <Typography variant="h6" gutterBottom>이슈 정리</Typography>
        </Grid>
        <Grid item xs={12}>
         <ContentField>
            <TextField 
              multiline
              rows={4}
              onChange={onChangeSummary}
              value={summary} 
              style={{width:'100%'}}
              required
              inputProps={{
                maxLength: 200,
              }}
              placeholder='이슈에 대한 종합적인 내용을 입력해주세요.(200자 이내로 작성)'/>
            </ContentField>
        </Grid>

        
        
        
        <Grid item xs={12} mt={3}>
            <Typography variant="h6">내 의견</Typography>
        </Grid>
        <Grid item xs={12}>

        
          <ContentField>
            <TextField 
                multiline
                onChange={onChangeOpinion}
                value={my_opinion}
                style={{width:'100%'}}  
                required
                placeholder='이슈에 대한 나의 의견을 적어주세요.'/>  

          </ContentField>
        </Grid>
    </Grid>
        
    </div>
  );
};

export default Free;