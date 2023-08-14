import { Container, Grid, TextField, Typography } from '@mui/material';
import React, {useState} from 'react';

function YesorNo() {


  return (
    <Container>
      <Grid container spacing={2}>

        <Grid item xs={12}>
          <Typography variant='subtitle1' gutterBottom>이슈 정리 </Typography>
          <input type="file"/>
        </Grid>
        <Grid item xs={12}>
        <TextField 
            style={{width:'100%'}}
            required
            placeholder='이슈에 대한 종합적인 내용을 입력해주세요.(200자 이내로 작성)'/>
        </Grid>
        
        <Grid item xs={6}>
        <Typography variant='subtitle1' gutterBottom>찬성 입장 </Typography>
          <TextField 
            style={{width:'100%'}}
            required
            placeholder='찬성측 입장을 적어주세요.'/>  
        </Grid>
        <Grid item xs={6}>
        <Typography variant='subtitle1' gutterBottom>반대 입장 </Typography>
          <TextField 
            style={{width:'100%'}}  
            required
            placeholder='반대측 입장을 적어주세요.'/>  
        </Grid>
        <Grid item sx={12}>
        <Typography variant='subtitle1' gutterBottom>내 의견 </Typography>

        </Grid>

      </Grid>
        
    </Container>
  );
};

export default YesorNo;