import React from 'react';
import {Box, Button, Grid, Stack, Typography} from '@mui/material'; 
import { styled } from "@mui/material/styles";
import Avatar from '@mui/material/Avatar';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import CampaignRoundedIcon from '@mui/icons-material/CampaignRounded';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


function CommentsList () {
  return (
    <Box  
    style={{margin:"0",
    backgroundColor:"#F1F8E9", borderRadius:"1rem", fontFamily:"Kumbh Sans"}} 
    sx={{ width: "100%" , margin:'0', padding:"1.5rem 2rem"}}>
      
      <Grid container spacing={2} style={{height:'100%'}}>
        <Grid item xs={1} style={{display:"flex", justifyContent:'flex-end'}}>
          <Avatar>H</Avatar>
        </Grid>

        <Grid item xs={11}>
          <Grid container spacing={1}>
            <Grid item xs={12} style={{display:"flex", justifyContent:"space-between"}}>
              <Typography fontFamily={"Kumbh Sans"} fontWeight={"bold"} variant="h6"
              gutterBottom>
                댓글 닉네임
              </Typography>
             
              <Button style={{color:"gray"}}> 삭제하기 <DeleteOutlineIcon /></Button>
              {/* <Button style={{color:"gray"}}>신고하기 <CampaignRoundedIcon /></Button> */}
           
            
            </Grid>

            <Grid item xs={12} >
              <Typography fontFamily={"Kumbh Sans"} >
                댓글 내용  댓글 내용  댓글 내용  댓글 내용 
              </Typography>
            </Grid>

            <Grid item xs={12} mt={2}>
              <Stack  direction="row" style={{display:"flex", justifyContent:'space-between'}}>
                  <Stack direction="row">
                    <Typography variant="body2">좋아요</Typography>{' '}
                    <FavoriteRoundedIcon style={{color:'red'}}/>
                    <Typography Typography variant="body2"> 999명</Typography>
                  </Stack>
                  <Typography variant="body2">
                    작성일 2023.01.01
                  </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
        </Grid>
        
          
      </Box>
  );
};

export default CommentsList;

 