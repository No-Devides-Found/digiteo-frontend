import { Container, Button, Grid, TextField, Typography } from '@mui/material';
import React, {useState} from 'react';
import {Tags, Free, DragUploadFile} from '../../../components';

function YesorNo({
  summary,setSummary, 
  yes, setYes, 
  no, setNo, 
  my_opinion, setMyOpinion,
  myChoice, setMyChoice,
  summaryFile, setSummaryFile}) {

  const onChangeSummary = (e) => {
    setSummary(e.target.value)
  }
  const onChangeYes = (e) => {
    setYes(e.target.value)
  }
  const onChangeNo = (e) => {
    setNo(e.target.value)
  }
  const onChangeOpinion = (e) => {
    setMyOpinion(e.target.value)
  }
  const handleChoice = (e)=>{
    setMyChoice(e.target.value)
  }

  return (
    <Container>
      <Grid container spacing={2}>

        <Grid item xs={12}>
          <Typography variant='subtitle1' gutterBottom>이슈 정리</Typography>
          <DragUploadFile/>
        </Grid>
        <Grid item xs={12}>
        <TextField 
            onChange={onChangeSummary}
            value={summary} 
            style={{width:'100%'}}
            required
            placeholder='이슈에 대한 종합적인 내용을 입력해주세요.(200자 이내로 작성)'/>
        </Grid>
        
        <Grid item xs={6}>
        <Typography variant='subtitle1' gutterBottom>찬성 입장 </Typography>
          <TextField 
            onChange={onChangeYes}
            value={yes}
            style={{width:'100%'}}
            required
            placeholder='찬성측 입장을 적어주세요.'/>  
        </Grid>
        <Grid item xs={6}>
        <Typography variant='subtitle1' gutterBottom>반대 입장 </Typography>
          <TextField 
            onChange={onChangeNo}
            value={no}
            style={{width:'100%'}}  
            required
            placeholder='반대측 입장을 적어주세요.'/>  
        </Grid>
        <Grid item xs={12}>
          <Typography variant='subtitle1' gutterBottom>
            내 의견
            <Button value="yes" onClick={handleChoice} >찬성</Button>
            <Button value="no" onClick={handleChoice} >반대</Button>
          </Typography>
          
            <TextField 
                onChange={onChangeOpinion}
                value={my_opinion}
                style={{width:'100%'}}  
                required
                placeholder='이슈에 대한 나의 의견을 적어주세요.'/>  
        </Grid>

      </Grid>
        
    </Container>
  );
};

export default YesorNo;