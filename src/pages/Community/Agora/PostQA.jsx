import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import {Tags, Free, YesorNo} from '../../../components';
import { styled } from "@mui/material/styles";


import { 
  Typography, 
  Input, 
  TextField, 
  Box, 
  Container, 
  Button,
  Stack,
  Radio,
  RadioGroup,
  FormControlLabel,
  Grid
} from '@mui/material';


//토의/토론 글 작성 - 유형 선택에 따라 작성폼 컴포넌트 달라짐
function PostQA() {
  const navigate = useNavigate();
  
  const [title, setTitle] = useState(''); //질문 제목
  const [content, setContent]=useState(""); //질문 내용
  
  // 제목 
  const onChangeTitle=(e)=>{
    setTitle(e.target.value);
    console.log('title', title)
  }
  const onChangeContent=(e)=>{
    setContent(e.target.value);
    console.log("content", content)
  }

  // 뒤로 가기 - q&a 목록으로 이동
  const backToList = (e)=>{
    navigate(-1);
  }
  // 질문글 작성 - 해당 질문 상세 페이지로 이동
  const saveAgora = (e)=>{
    navigate('/detailedqa');
  }


  return (
    <Container>
      <Grid container spacing={2}>

        <Grid item xs={12} >
          <Typography variant="h4" align="center" gutterBottom>
            Q&A 작성
          </Typography>
        </Grid>

        

        <Grid item xs={12} >
          <Typography variant='subtitle1'>주제</Typography>
          <TextField id="outlined-basic" sx={{width:'100%'}} variant="outlined" 
            name='title' 
            value={title} 
            onChange={onChangeTitle}
            placeholder='토의/토론 제목을 입력해주세요.'/>



        </Grid>

        <Grid item xs={12}>
          파일 업로드하기 <input type="file" />
        </Grid>
        <Grid item xs={12}>
          <TextField id="outlined-basic" sx={{width:'100%'}} variant="outlined" 
            name='content' 
            value={content} 
            onChange={onChangeContent}
            placeholder='질문 내용 2000자 이내로 작성해주세요.(파일은 최대 100M 크기까지 업로드 가능합니다.)'/>
        </Grid>

        
        <Grid item xs={12} style={{textAlign:'right'}}>
          <Button type="button" onClick={backToList}>
            취소하기
          </Button>
          <Button type="submit" onClick={saveAgora}>
            등록하기
          </Button>
        </Grid>

      </Grid>
      
    </Container>
  );
};

export default PostQA;





