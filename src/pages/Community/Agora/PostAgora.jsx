import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import {Tags} from '../../../components';
import YesorNo from '../../../components/Community/YesorNo';
import { styled } from "@mui/material/styles";


import { 
  Typography, 
  Input, 
  TextField, 
  Box, 
  Container, 
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  Grid
} from '@mui/material';


//토의/토론 글 작성 - 유형 선택에 따라 작성폼 컴포넌트 달라짐
function PostAgora() {

  const [agora, setAgora] = useState({
    //post_id: 0, //작성자
    thumbnail: '',  //썸네일
    title:'', //제목
    type:'2',   //유형 토론2, 자유1 (처음 고정=토론)
    summary:'', //이슈 정리
    yes:'', //찬성입장
    no:'',  //반대입장
    my_opinion:'',  //내 의견
}); 

  const { thumbnail, title, type, summary, yes, no, my_opinion } = agora; //비구조화 할당
 
  const onChange = (event) => {
    const { value, name } = event.target;

    setAgora((prevAgora) => ({
      ...prevAgora,
      [name]: value,
  }));
    
  };
  // const onChangeType=(e)=>{
  //   console.log(e.target.value); 
  //   setType(e.target.value) 
  // }




  return (
    <Container>
      <Grid container spacing={2}>

        <Grid item xs={12} >
          <Typography variant="h4" align="center" gutterBottom>
            토의/토론 만들기
          </Typography>
        </Grid>

        <Grid item xs={5} style={{backgroundColor:'orange'}}>
          썸네일
        </Grid>

        <Grid item xs={7} >
          <Typography variant='subtitle1'>주제</Typography>
          <TextField id="outlined-basic" sx={{width:'100%'}} variant="outlined" 
            name='title' value={title} 
            onChange={onChange}
            placeholder='토의/토론 제목을 입력해주세요.'/>

           <Typography variant='subtitle1'>토의/토론 유형</Typography>

           <RadioGroup
              required
              onChange={onChange}
              value={type}
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="2" control={<Radio />} label="토의/토론" />
              <FormControlLabel value="1" control={<Radio />} label="자유" />
            </RadioGroup>

        </Grid>

        <Grid item xs={12}>
          썸네일 설정하기 <input type="file" />
        </Grid>

        <Grid item xs={12}>
          {
            type==="2"
            ? <YesorNo my_opinion={my_opinion} yes={yes} no={no} />
            : <Typography>안녕</Typography>
          }
         
          
        </Grid>

      </Grid>
      
    </Container>
  );
};

export default PostAgora;