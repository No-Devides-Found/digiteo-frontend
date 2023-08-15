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
  const [alignment, setAlignment] = React.useState('newest');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };



  return (
    <Container>
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
        <Grid item xs={12} style={{textAlign:'right',  padding:' 0 2rem'}}>
          <Button>삭제하기</Button>
        </Grid>
        <Grid item xs={12}>
          <Box bgcolor="pink" sx={{ margin:'0 auto', padding:'2rem'}}>
            <StyledGrid container spacing={2}>
              <StyledGrid item xs={12}>
                <Stack direction="row" spacing={2} style={{display:'flex', justifyContent:'space-between'}}>
                  <div>
                    <span>닉네임</span>{" "}
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
                댓글내용마ㅓㄹ 미ㅏ널 ;마ㅣㅓㄴㄹ ;ㅣ너리
              </StyledGrid>
          
              <StyledGrid item xs={6} >
                좋아요N개
              </StyledGrid>
              <StyledGrid item xs={6} style={{textAlign:'right'}} >
                작성일 2023-01-01
              </StyledGrid>        
            </StyledGrid>
          </Box>
        </Grid>
        
      </Grid>
      

    </Container>
    
  );
};

export default AgoraCommentsList;