import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import {Tags, Free, YesorNo, DragUploadFile } from '../../../components';
import { styled } from "@mui/material/styles";


import { 
  Paper,
  Avatar, 
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



//토의/토론 글 작성 - 유형 선택에 따라 작성폼 컴포넌트 달라짐
function PostQA() {
  const navigate = useNavigate();
  
  const [title, setTitle] = useState(''); //질문 제목
  const [content, setContent]=useState(""); //질문 내용
  const [files, setFiles] = useState([]); //파일

  // 제목 
  const onChangeTitle=(e)=>{
    setTitle(e.target.value);
    console.log('title', title)
  }
  // 내용
  const onChangeContent=(e)=>{
    setContent(e.target.value);
    console.log("content", content)
  }

  //QA 객체
  const qa={
    title:title,
    content:content,
    files:files,
  }


  // 질문글 작성 - 해당 질문 상세 페이지로 이동
  const saveAgora = (e)=>{
    console.log(qa) //잘 온다.


    navigate('/detailedqa');
  }



  // 뒤로 가기 - q&a 목록으로 이동
  const backToList = (e)=>{
    navigate(-1);
  }
  


  return (
    <Container>
      
      
      <Grid container  style={{padding:"1rem 5rem 4rem 5rem"}}>
        {/* 제목 부분 */}
          <Grid item xs={12} mt={6}>
            <StyledPaper>
              <Grid container>
                <Grid item xs={12} style={{display:"flex", justifyContent:"flex-end"}}>
                    {/* <Button onClick={gotoEdit} style={{color:"#757575", fontSize:"13px"}} >
                      수정하기 <BorderColorIcon />
                    </Button> */}
                </Grid>
                <Grid item xs={12}  mt={1}>
                  
                      <TextField 
                          style={{background:"#FFFFFF"}}
                          id="outlined-basic" 
                          name='title' 
                          sx={{width:'100%'}} variant="outlined" 
                          value={title} 
                          onChange={(e)=>setTitle(e.target.value)} 
                          placeholder='질문글의 제목을 입력해주세요.'/>
      
                </Grid>
                
                      
                <Grid item xs={12} mt={2}>
                        <Stack direction="row">
                          <Avatar style={{marginRight:"1rem"}}>H</Avatar>
                          <Typography style={{lineHeight:"40px"}}>닉네임</Typography>
                        </Stack>
                </Grid>
              </Grid> 
            </StyledPaper>
          </Grid>
        

        {/* 창작물 콘텐츠 부분 */}

        
        <Grid item xs={12} mt={3}>
          <Typography variant="h6">파일 업로드</Typography>
        </Grid>
        <Grid item xs={12}>
          <DragUploadFile value={files} onChange={setFiles}/>
        </Grid>
        

        <Grid item xs={12} mt={6}>
          <Typography variant='h6'>창작물 소개</Typography>
        </Grid>
        <Grid item xs={12} mt={1}> 
            <ContentField style={{padding:"2rem 3rem 2rem 3rem"}}>
              <TextField 
                multiline
                rows={4}
                inputProps={{
                  maxLength: 2000,
                }}
                style={{width:"100%"}}
                name='content' 
                value={content} 
                onChange={onChangeContent}
                placeholder='질문 내용 2000자 이내로 작성해주세요.'/>

            </ContentField>
        </Grid>  
       

      </Grid>

        <Grid item xs={12} style={{textAlign:'right'}}>
          <Button type="button" onClick={backToList}>
            취소하기
          </Button>
          <Button type="submit" onClick={saveAgora}>
            등록하기
          </Button>
        </Grid>

  
    </Container>
  );
};

export default PostQA;





