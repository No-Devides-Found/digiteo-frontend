import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import {Tags, UploadFile, DragUploadFile} from '../../components'; 

import { styled } from "@mui/material/styles";


import { 
  Typography, 
  Input, 
  TextField, 
  Box, 
  Chip,
  Paper,
  Stack,
  Avatar,
  Grid,
  Container, 
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
} from '@mui/material';



// 제목 페이퍼 
const StyledPaper=styled(Paper)({
  backgroundColor:"#F1F8E9",
  borderRadius:"20px",
  padding:"1rem 4rem 2rem 4rem", 
  margin:"0",
  width:"100%"
})

const ContentField = styled(Container)({
  background:"#FFF3E0",
  borderRadius:"20px",
  padding:"2rem 3rem",
  

}); 

const StyledButton = styled(Button)({
  backgroundColor: '#FFA000',
  width: '10%',
  borderRadius:"10px",
  color: 'black',
  marginLeft:"1rem",
  float: 'right',
  fontWeight:"bold",
  textAlign: 'center',
});

const StyledChip=styled(Chip)({
  width:'50%', 
  backgroundColor:"#C5E1A5"
})



function PostPractice () {

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

  const savePractice = async () => {
    console.log(practice)
    //detailedpractice로 가게 수정해야 함
    navigate(`/detailedpractice`, {
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
  // 수정 페이지로 이동
  const gotoEdit = (e) => {
    navigate(`/editpractice`);
  }

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <Container>
      <Grid container  style={{padding:"1rem 3rem 4rem 3rem"}}>
        {/* 제목 부분 */}
        <Grid item xs={12} mt={6}>
            <StyledPaper>
              <Grid container>
                  <Grid item xs={12} style={{display:"flex", justifyContent:"flex-end"}}>
                    <Button onClick={gotoEdit} style={{color:"#757575", fontSize:"13px"}} >
                            수정하기 <BorderColorIcon />
                    </Button>
                  </Grid>
                  <Grid item xs={12}  mt={1}>
                  
                      <TextField 
                          style={{background:"#FFFFFF"}}
                          id="outlined-basic" 
                          name='title' 
                          sx={{width:'100%'}} variant="outlined" 
                          value={title} 
                          onChange={onChange} 
                          placeholder='[창작물 대제목]을 입력해주세요.'/>
      
                  </Grid>
                  <Grid item xs={12} mt={2}>
                    
                          
                          
                        
                      </Grid>
                      <Grid item xs={5} mt={2}>
                        <Stack direction="row">
                          <Avatar style={{marginRight:"1rem"}}>H</Avatar>
                          <Typography style={{lineHeight:"40px"}}>닉네임</Typography>
                        </Stack>
                      </Grid>
                      {/*  칩 태그들 */}
                      <Grid item xs={7} mt={2} style={{width:'100%'}}>
                        <Stack direction="row" spacing={1} >
                          <StyledChip label="Clickable"   onClick={handleClick}/>
                          <StyledChip label="Clickable"  onClick={handleClick}/>
                        
                      
                          <StyledChip label="Clickable"   onClick={handleClick}/>
                          <StyledChip label="Clickable" onClick={handleClick}/>
                        </Stack>
                  </Grid>
                </Grid>
            </StyledPaper>
        </Grid>
        

        {/* 창작물 콘텐츠 부분 */}

        
        <Grid item xs={12} mt={6} >
            <Typography variant="h6">파일 업로드</Typography>
        </Grid>

        <Grid item xs={12}>
          <div style={{ position: 'relative' }}>
            <DragUploadFile />
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                marginRight: '15px', 
                marginTop:"15px",
              }}
            >     <Stack direction="row">
                      {/* <div style={{verticalAlign:"middle"}}>파일유형 {'('}필수{')'}</div> */}
                      {/* RadioGroup 컴포넌트 */}
                      <RadioGroup
                        row
                        required
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                      >
                      
                        <FormControlLabel name='type' value="video" onChange={onChange} control={<Radio />} label="영상" />
                        <FormControlLabel name='type' value="img" onChange={onChange} control={<Radio />} label="이미지" />
                        <FormControlLabel name='type' value="voice" onChange={onChange} control={<Radio />} label="음성" />
                        <FormControlLabel name='type' value="text" onChange={onChange} control={<Radio />} label="문서" />
                      </RadioGroup>
                  </Stack>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} mt={6}>
          <Typography variant='h6'>창작물 소개</Typography>
        </Grid>
        <Grid item xs={12} mt={1}> 
            <ContentField>
              <TextField 
                name='story' 
                value={story} 
                onChange={onChange} 
                sx={{width:'100%'}} 
                multiline rows={8} id="outlined-basic" variant="outlined" 
                placeholder='나만의 창작 스토리 (계기, 과정, 의도)를 소개해주세요 :)'/>

            </ContentField>
          </Grid>  
          <Grid item xs={12} mt={2}> 
            <ContentField>
              <TextField 
                name='review' 
                value={review} 
                onChange={onChange} 
                sx={{width:'100%'}} 
                multiline rows={8} id="outlined-basic" variant="outlined" 
                placeholder='창작물을 만들어 본 소감(느낀 점)을 이야기해주세요 :)'/>

            </ContentField>
        </Grid>
        <Grid item xs={12}mt={3} >
          <StyledButton type="submit" onClick={savePractice}>등록하기</StyledButton>
          <StyledButton type="button" onClick={backToList}>취소하기</StyledButton>
        </Grid>
      </Grid>
    </Container>

  );
};

export default PostPractice;



