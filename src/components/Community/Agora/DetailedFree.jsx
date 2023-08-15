import React, {useState} from 'react';
import {Stack, Container, Button, Grid, TextField, Typography } from '@mui/material';


const DetailedFree = () => {
  return (
    <Stack>
      <Grid container spacing={2}>

      <Grid item xs={12}>
          <Typography variant='subtitle1' gutterBottom>이슈 정리</Typography>
          <input type="file" /> 
        </Grid>
        
        <Grid item xs={12}>
        <TextField 
            defaultValue="입력내용"
            InputProps={{ readOnly: true }} 
            style={{width:'100%'}}
            required
            placeholder='이슈에 대한 종합적인 내용을 입력해주세요.(200자 이내로 작성)'/>
        </Grid>
        
        
        <Grid item xs={12}>
          <Typography variant='subtitle1' gutterBottom>
            내 의견
          </Typography>
          
            <TextField 
                defaultValue="입력내용"
                InputProps={{ readOnly: true }} 
                style={{width:'100%'}}  
                required
                placeholder='이슈에 대한 나의 의견을 적어주세요.'/>  
        </Grid>

      </Grid>
        
    </Stack>
  );
};

export default DetailedFree;