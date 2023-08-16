import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import {Tags} from '../../components'; 

import { styled } from "@mui/material/styles";


import { 
  Typography, 
  Input, 
  TextField, 
  Box, 
  Grid,
  Container, 
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
} from '@mui/material';

const StyledContainer = styled(Container)({
  width: '60rem', 
  backgroundColor: '#FFF5E5',
  padding: '2rem',
  marginBottom:'0.5rem',
  height:'fit-content',
});

const Subtitle = styled(Typography)({
  marginBottom: '0.5rem',
  fontSize:'1.1rem',
  fontWeight:'bold',
}); 

const StyledButton = styled(Button)({
  backgroundColor: 'orange',
  width: '10rem',
  color: 'black',
  margin: '1rem',
  float: 'right',
  textAlign: 'center',
});
const ButtonContainer = styled(Container)({
  width: '60rem',
})


function EditPractice () {

  const navigate = useNavigate();
  const [practice, setPractice] = useState({
    title: '',
    createdBy: '',
    tags: [],
    type: '',
    file: '',
    story: '',
    review: '',
  });

  const { title, createdBy,  tags, type, file, story, review } = practice; //비구조화 할당

  const onChange = (event) => {
    const { value, name } = event.target;

    setPractice((prevPractice) => ({
      ...prevPractice,
      [name]: name === 'tags' ? value.split(',') : value,
  }));
    
  };

  const editComplete= async () => {
    console.log(practice)
    navigate(`/practice`, {
      state: practice, //전체 'practice'객체 전달
    });
    //practice 객체를 보냄
    // await axios.post('/practicelist', practice).then((res) => {
    //   alert('등록되었습니다.');
    //   navigate('/practicelist/:idx'); 
    // });
  };
  //작성 취소
  const backToList = () => {
    navigate('/practicelist');
  };


  const programs = [
    '프로그램명1',
    '프로그램명2',
    '프로그램명3',
    '프로그램명4',
    '프로그램명5',
    '프로그램명6',
    '프로그램명7',
  ];

  return (
    <Container>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center" gutterBottom>
            창작물 수정 페이지
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Subtitle variant='subtitle1'>창작물 대제목</Subtitle>
          <TextField 
            name='title' 
            value={title} 
            onChange={onChange} 
            sx={{width:'100%'}} 
            variant="outlined" 
            placeholder='창작물 대제목을 입력해주세요.'/>
        </Grid>

        <Grid item xs={12}>
          <Subtitle variant='subtitle1'>태그</Subtitle>
          <Tags programs={programs} tags={practice.tags} setPractice={setPractice}/>
        </Grid>

        <Grid item xs={12}>
           <Subtitle variant="subtitle1" >파일 업로드</Subtitle>
            <Typography variant="subtitle2">파일 유형</Typography>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel name='type' value="video" onChange={onChange} control={<Radio />} label="영상" />
                <FormControlLabel name='type' value="img" onChange={onChange} control={<Radio />} label="이미지" />
                <FormControlLabel name='type' value="voice" onChange={onChange} control={<Radio />} label="음성" />
                <FormControlLabel  name='type' value="text" onChange={onChange} control={<Radio />} label="문서" />
              </RadioGroup>
              <Input type="file" ></Input>
        </Grid>

        <Grid item xs={12}>
         <Subtitle variant='subtitle1'>창작물 소개</Subtitle>
          <Typography variant='subtitle2'>* 창작 스토리 {'('}계기, 과정, 의도{')'}</Typography> 
            <TextField name='story' 
              value={story} 
              onChange={onChange} 
              sx={{width:'100%'}} 
              multiline rows={8} 
              id="outlined-basic" 
              variant="outlined" 
              placeholder='창작물 대제목을 입력해주세요.'/>
          
          <Typography variant='subtitle2'>* 후기</Typography> 
            <TextField name='review' 
              value={review} 
              onChange={onChange} 
              sx={{width:'100%'}} 
              multiline rows={8} id="outlined-basic" 
              variant="outlined" 
              placeholder='창작물 대제목을 입력해주세요.'/>
        </Grid>
        <Grid item xs={12}>
          <StyledButton type="submit" onClick={editComplete}>수정 완료</StyledButton>
          <StyledButton type="button" onClick={backToList}>수정 취소</StyledButton>
        </Grid>
      </Grid>
      

    </Container>

  );
};

export default EditPractice;