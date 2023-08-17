import React from 'react';
import { useLocation, useNavigate  } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

import {
  Paginations,
  Comments,
  CommentsList,
  Chips, 
} from "../../components";

import { Button, Paper,Grid, Chip, Container, Typography, TextField, Avatar, Stack, IconButton} from '@mui/material';
import { styled } from "@mui/material/styles";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import {Favorite, TypeSpecimenTwoTone} from '@mui/icons-material';
import ShareIcon from '@mui/icons-material/Share';
//창작물 데이터 

const Maindiv=styled(`div`)({
  display:'block',
  margin:"0 auto",
  fontFamily:"Kumbh Sans",
  padding:"0 20%", 
})
const StyledGrid=styled(Grid)({
  display:'block',
  margin:"0 auto", 
  padding:"0 0 0 0"
})

// 제목 페이퍼 
const StyledPaper=styled(Paper)({
  backgroundColor:"#F1F8E9",
  borderRadius:"20px",
  padding:"1rem", 
  margin:"0",
})
//콘텐츠 페이퍼
const ContentPaper=styled(Paper)({
  backgroundColor:"#FFF3E0",
  borderRadius:"20px",
  padding:"2rem 3rem", 
})

const StyledChip=styled(Chip)({
  width:'50%', 
  backgroundColor:"#C5E1A5"
})


//창작물 id 받아오는 것 필요  
function DetailedPractice () {

  const post = {
      title:"",
      nickname:"",
      created_at:"",
      liked:"",
      tags: ["tag1", "tag2", "tag3", "tag4"],
      files:"",
      story:"",
      review:"",
}
  console.log(post.tags[0])

  const navigate = useNavigate();

  // 수정 페이지로 이동, id 같이 보내야 함
  const gotoEdit = (e) => {
    navigate(`/editpractice`);
  }
  // 창작물 삭제
  const onDelete =(e)=>{
  
  }

  return (
    <Maindiv>
      <StyledGrid container >
         {/* 작성자만 보이는 버튼으로 해야 함 */}
        <StyledGrid item xs={12} style={{color:"gray", textAlign:"right", margin:"0 1rem 0.5rem 0", }} >
          <Button style={{color:"#757575", fontSize:"13px"}} > 
            삭제하기 <DeleteOutlineIcon />
          </Button>
          <Button onClick={gotoEdit} style={{color:"#757575", fontSize:"13px"}} >
            수정하기 <BorderColorIcon />
          </Button>
        </StyledGrid>

        <StyledGrid item xs={12} mt={1}>
          <StyledPaper>
            <Grid container >
              <Grid item xs={3} >
                <img src="img/video.png" alt="video-box" width="100%"/>
              </Grid>

              <Grid item xs={9} style={{padding:"0 2rem"}}>
                <Grid container>
                  <Grid item xs={12} mt={2}>
                    <Stack direction="row" style={{display:"flex", justifyContent:'space-between'}}>
                      <Typography variant='h6' fontWeight="bold"  >
                        {post.title}
                      </Typography>
                      <Typography variant="body2" style={{color:'gray'}}>
                         {post.created_at}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs={5} mt={2}>
                    <Stack direction="row">
                      <Avatar style={{marginRight:"1rem"}}>
                        H
                      </Avatar>
                      <Typography style={{lineHeight:"40px"}}>
                        {post.nickname}
                      </Typography>
                    </Stack>
                  </Grid>
                  {/*  칩 태그들 */}
                  <Grid item xs={7} mt={2} style={{width:'100%'}}>
                    <Stack direction="row" spacing={1} >
                      <StyledChip label={post.tags[0]}  /> 
                      <StyledChip label={post.tags[1]} /> 
                    </Stack>
                    <Stack direction="row" spacing={1} mt={1}>
                      <StyledChip label={post.tags[2]}  />
                      <StyledChip label={post.tags[3]} />
                    </Stack>
                  </Grid>

                  <Grid item xs={12} mt={1}>
                        <Stack direction="row">
                          <Typography variant="body2">좋아요</Typography>{' '}
                          <FavoriteRoundedIcon style={{color:'red'}}/>
                          <Typography Typography variant="body2"> {post.liked}명</Typography>
                        </Stack>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </StyledPaper>
          {/* 가지  */}
          <Grid container sx={{justifyContent:"space-between", padding:"0 13%",}}>
            <Grid item xs={0.15} style={{backgroundColor:"#A1887F", height:"5rem"}}>
            </Grid>
            <Grid item xs={5}>
              <Typography fontFamily={"Krona One"} 
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Krona One",
                height: "125%",
                position:"relative",
                textShadow: '1px 1px 1px gray',}}>
              <div style={{backgroundColor:"#FFA000", width:"50%", height:"0.5rem", bottom:"32%",position:"absolute"}}></div>
                ABOUT
                
              </Typography>
              
              
            </Grid>
            <Grid item xs={0.15} style={{backgroundColor:"#A1887F", height:"5rem"}}>
            </Grid>
          </Grid>

          {/* 창작물 */}
          <Paper
          style={{backgroundColor:"#E0E0E0", width:"100%", height:"20rem", padding:"1rem", borderRadius:"10px"}}>
            {post.files}
          </Paper>

          {/* 가지 */}
          <Grid container sx={{justifyContent:"space-between", padding:"0 13%"}}>
            <Grid item xs={0.15} style={{backgroundColor:"#A1887F", height:"5rem"}}>
            </Grid>
            <Grid item xs={0.15} style={{backgroundColor:"#A1887F", height:"5rem"}}>
            </Grid>
          </Grid>

          <ContentPaper >
            {post.story}
          </ContentPaper>

          <ContentPaper style={{marginTop:"2rem"}}>
            {post.review}
          </ContentPaper>
        <StyledGrid item xs={12} mt={3}>
          <Stack direction="row" style={{display:"flex", justifyContent:"space-between", 
           marginTop:"2rem"
        }}>
            <Typography fontFamily="Kumbh Sans" variant="subtitle1" style={{fontWeight:"medium",}}>
              좋아요 <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite  style={{color:'red'}}/>} />
            </Typography>
            <Typography fontFamily="Kumbh Sans" variant="subtitle1"style={{fontWeight:"medium", display:'inline'}}>
              공유하기
                  <IconButton  aria-label="delete" size="large"> 
                  <ShareIcon /> 
                  </IconButton>
            </Typography>
          </Stack>
        </StyledGrid>
                      
      </StyledGrid>


      

        {/* 댓글 */}
        <Grid container style={{}}>
          <Grid item xs={12}>
            <Comments />
          </Grid>
          <Grid item xs={12} mt={4}>
            <CommentsList post={post.id}/>
          </Grid>
          
        </Grid>

      </StyledGrid>

        
     

      

    </Maindiv>
  );
};

export default DetailedPractice;




const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
