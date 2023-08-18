import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import {Tags, DragUploadFile} from '../../../components';

import { styled } from "@mui/material/styles";


import { 
  Typography, 
  Input, 
  TextField, 
  Box, 
  Container, 
  Button,
  Grid,
  Stack,
  Avatar,
  Paper,
  FormControlLabel,
} from '@mui/material';



// 제목 페이퍼 
const StyledPaper=styled(Paper)({
  backgroundColor:"#F1F8E9",
  borderRadius:"20px",
  padding:"1rem 3rem", 
  margin:"0",
})
// 콘텐츠 박스
const ContentField = styled(Container)({
  background:"#FFF3E0",
  borderRadius:"20px",
  padding:"2rem 3rem 2rem 3rem",

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




// 나눔터 (Tip) 게시글 작성 페이지 - 제목, 태그, 작성자, 작성일자, 파일, 콘텐츠 내용
function PostTip () {

  const navigate = useNavigate();


  // 글 작성하는 유저 정보


  // 작성 게시글 관련 상태값 
  const [title, setTitle] = useState(''); //질문 제목
  const [tags, setTags] = useState([]); //선택 태그
  const [date, setDate] = useState(""); //작성일자
  const [content, setContent]=useState(""); //팁 내용
  const [files, setFiles] = useState([]); //파일

  

  

  const tip ={
    title : title,
    tags : tags,
    date: date,
    content: content,
    files : files,
  }

  const saveTip = async () => {
    console.log(tip)
    //detailedpractice로 가게 수정해야 함


    navigate(`/detailedtip`, {
      state: tip, //전체 'practice'객체 전달
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
      <Grid container  style={{padding:"1rem 5rem 4rem 5rem"}}>
        {/* 제목 부분 */}
        <Grid item xs={12} mt={6}>
              <StyledPaper>
                <Grid container>
                  <Grid item xs={12}  mt={1}>
                    
                        <TextField 
                            style={{background:"#FFFFFF"}}
                            id="outlined-basic" 
                            name='title' 
                            sx={{width:'100%'}} variant="outlined" 
                            value={title} 
                            onChange={(e)=>setTitle(e.target.value)} 
                            placeholder='팁 & 노하우 제목을 입력해주세요.'/>
        
                  </Grid>
                  
                        
                  <Grid item xs={12} mt={2}>
                          <Stack direction="row">
                            <Avatar style={{marginRight:"1rem"}}>
                              H
                            </Avatar>
                            <Typography style={{lineHeight:"40px"}}>
                              글 작성하는 유저의 닉네임
                            </Typography>
                          </Stack>
                  </Grid>
                 
                </Grid> 
              </StyledPaper>
            </Grid>


            {/* 태그 선택 부분 */}
            <Grid item xs={12} mt={3}>
              <Typography variant="h6">태그 선택</Typography>
            </Grid>
            <Grid item xs={12} mt={1}>
              <ContentField style={{padding:"2rem 3rem 2rem 3rem"}}>
                <Tags programs={programs} value={tags} onChange={setTags}/>
              </ContentField>
            </Grid>
            

            {/* 파일 업로드 */}
            <Grid item xs={12} mt={3}>
              <Typography variant="h6">파일 업로드</Typography>
            </Grid>
            <Grid item xs={12}>
              <DragUploadFile  value={files} onChange={setFiles}/>  
            </Grid>
            
            {/* 창작물 설명 콘텐츠 */}
            <Grid item xs={12} mt={6}>
              <Typography variant='h6'>창작물 소개</Typography>
            </Grid>
            <Grid item xs={12} mt={1}> 
                <ContentField style={{padding:"2rem 3rem 2rem 3rem"}}>
                  <TextField 
                    multiline
                    rows={8}
                    inputProps={{
                      maxLength: 2000,
                    }}
                    placeholder='팁 & 노하우 내용을 2000자 이내로 작성해주세요.'

                    style={{width:"100%"}}
                    name='content' 

                    value={content} 
                    onChange={(e)=>setContent(e.target.value)} 
                    />

                </ContentField>
            </Grid>  
            <Grid item xs={12} style={{textAlign:'right', margin:"3rem 0"}}>
              <StyledButton type="submit" onClick={saveTip}>등록하기</StyledButton>
              <StyledButton type="button" onClick={backToList}>취소하기</StyledButton>
            </Grid>

        
      </Grid>
    </Container>

  );
};

export default PostTip;



