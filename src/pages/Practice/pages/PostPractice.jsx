import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Autocomplete from '@mui/material/Autocomplete';
import Tags from './../../../components/Tags/Tags'

import { styled } from "@mui/material/styles";


import { 
  Typography, 
  Input, 
  InputLabel, 
  TextField, 
  Grid , Box, 
  Container, 
  Button,
  Radio,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  FormControl,
  
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


function PostPractice () {

  const navigate = useNavigate();
  const [practice, setPractice] = useState({
    title: '',
    createdBy: '',
    tags: '',
    type: '',
    file: '',
    story: '',
    review: '',
  });

  const { title, createdBy,  tags, type, file, story, review } = practice; //비구조화 할당

  const onChange = (event) => {
    const { value, name } = event.target; //event.target에서 name과 value만 가져오기
    
    setPractice({
      ...practice,
      [name]: value,
    });
    console.log(practice.title, practice.type, practice.story);
    
  };

  const savePractice = async () => {
    console.log(practice)
    //practice 객체를 보냄
    await axios.post('/practicelist', practice).then((res) => {
      alert('등록되었습니다.');
      navigate('/practicelist/:idx'); 
    });
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

      <Typography variant="h4" align="center" gutterBottom>
        창작물 작성
      </Typography>

      <Box type='form'>
        
        <StyledContainer>
        <Subtitle variant='subtitle1'>창작물 대제목</Subtitle>
        <TextField id="outlined-basic" name='title' value={title} onChange={onChange} sx={{width:'100%'}} variant="outlined" placeholder='창작물 대제목을 입력해주세요.'/>
        </StyledContainer>
          
        <StyledContainer>
        <Subtitle variant='subtitle1'>태그</Subtitle>
        <Tags programs={programs} />
        </StyledContainer>
        
        <StyledContainer >
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

        </StyledContainer>

        
        <StyledContainer>
        <Subtitle variant='subtitle1'>창작물 소개</Subtitle>
          <Typography variant='subtitle2'>* 창작 스토리 {'('}계기, 과정, 의도{')'}</Typography> 
            <TextField name='story' value={story} onChange={onChange} sx={{width:'100%'}} multiline rows={8} id="outlined-basic" variant="outlined" placeholder='창작물 대제목을 입력해주세요.'/>
          
          <Typography variant='subtitle2'>* 후기</Typography> 
            <TextField name='review' value={review} onChange={onChange} sx={{width:'100%'}} multiline rows={8} id="outlined-basic" variant="outlined" placeholder='창작물 대제목을 입력해주세요.'/>

        </StyledContainer>

        <ButtonContainer>
          <StyledButton type="submit" onClick={savePractice}>등록하기</StyledButton>
          <StyledButton type="button" onClick={backToList}>취소하기</StyledButton>
        </ButtonContainer>
        
        
      </Box>
    </Container>

  );
};

export default PostPractice;



