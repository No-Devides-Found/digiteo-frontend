import React from 'react';
import {Box, Button, Grid, Stack, Typography} from '@mui/material'; 
import { styled } from "@mui/material/styles";
import Avatar from '@mui/material/Avatar';
import CampaignRoundedIcon from '@mui/icons-material/CampaignRounded';

const StyledGrid = styled(Grid)({
  //padding: '0',  
  '&.MuiGrid-item':{
    //padding: '0',
  }
})
function CommentsList () {
  return (
    <Box bgcolor="white" sx={{ width: 'rem' , margin:'0 auto', padding:'2rem'}}>
      <StyledGrid container spacing={2}>
        <StyledGrid item xs={2.5}>
          <Stack direction="row" spacing={2}>
            <Avatar>H</Avatar><Typography>닉네임</Typography>
          </Stack>
        </StyledGrid>
        <StyledGrid item xs={7}>
          sdfasgasdf sadf asdfsadf sdf sadfsadf sadfsad fsadfsdaf sd
        </StyledGrid>
        <StyledGrid item xs={2.5}>
          <StyledGrid container spacing={2}>
            <StyledGrid item xs={12}>
              <Button>신고하기 <CampaignRoundedIcon /></Button>
              
            </StyledGrid>
            <StyledGrid item xs={12} >
              <Typography>작성일 2023.01.01</Typography>
            </StyledGrid>
          </StyledGrid>
        </StyledGrid>
      </StyledGrid>
    </Box>
  );
};

export default CommentsList;