import React from 'react';
import {Container, Box, Button, Grid, Stack, Typography} from '@mui/material'; 
import { styled } from "@mui/material/styles";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const StyledGrid = styled(Grid)({
  //padding: '0',  
  '&.MuiGrid-item':{
    //padding: '0',
  }
})
function AgoraCommentsList ({type}) {

  //댓글 정렬 순서
  const [alignment, setAlignment] = React.useState('newest');

  const handleChange = (e) => {
    setAlignment(e.target.value);
  };

  //댓글 목록을 불러와야 함
  const comments = [
    {
      nickname:"",
      contents:"",
      liked:"",
      date:"",
    },
    {
      nickname:"",
      contents:"",
      liked:"",
      date:"",
    },
    {
      nickname:"",
      contents:"",
      liked:"",
      date:"",
    }, {
      nickname:"",
      contents:"",
      liked:"",
      date:"",
    }
  ]


  return (
    <div style={{margin:"0", padding:"0"}}>


      <Grid Container spacing={2}>
        <Grid item xs={12}>
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
          > 
            <ToggleButton value="newest">최신순</ToggleButton>
            <ToggleButton value="like">좋아요순</ToggleButton>
          </ToggleButtonGroup>

        </Grid>
      {comments.map((comment, index) => (
        <div>
        <Grid item xs={12} style={{textAlign:'right',  padding:' 0 2rem'}}>
          <Button>삭제하기</Button>
        </Grid>
        <Grid item xs={12}>
          <Box bgcolor="pink" sx={{ margin:'0 auto', padding:'2rem'}}>
            <StyledGrid container spacing={2}>
              <StyledGrid item xs={12}>
                <Stack direction="row" spacing={2} style={{display:'flex', justifyContent:'space-between'}}>
                  <div>
                    <span>{comments.nickname}</span>{" "}
                    {
                      type==="2"
                      ?  <Button>찬성 / 반대</Button>
                      : <span></span>
                    }
                   
                  </div>
                  <div >신고하기</div>
                </Stack>
              </StyledGrid>

              <StyledGrid item xs={12}>
                {comments.contents}
              </StyledGrid>
          
              <StyledGrid item xs={6} >
                {comments.liked}
              </StyledGrid>
              <StyledGrid item xs={6} style={{textAlign:'right'}} >
                {comments.date}
              </StyledGrid>        
            </StyledGrid>
          </Box>
        </Grid>
        </div>
        ))}       
      </Grid>
      

    </div>
    
  );
};

export default AgoraCommentsList;