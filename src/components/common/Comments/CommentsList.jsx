import React from 'react';
import {Box, Button, Grid, Stack, Typography} from '@mui/material'; 
import { styled } from "@mui/material/styles";
import Avatar from '@mui/material/Avatar';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import CampaignRoundedIcon from '@mui/icons-material/CampaignRounded';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import {Favorite, TypeSpecimenTwoTone} from '@mui/icons-material';
import {
  Paginations,
  Comments,
  Chips, 
} from "../../../components";

function CommentsList () {

  //코멘트 목록을 가져와야 함
  const comments= [
    { 
      profile_img:"",
      nickname:"",
      created_at:"",
      contents:"", 
      liked:"", 
    },
    { 
      profile_img:"",
      nickname:"",
      created_at:"",
      contents:"", 
      liked:"", 
    },
    { 
      profile_img:"",
      nickname:"",
      created_at:"",
      contents:"", 
      liked:"", 
    },
  ];

  return (

<div style={{margin:"0", padding:"0"}}>
  
    {comments.map((comment, index) => (
      <Box  
    style={{margin:"0 0 1rem 0",
    backgroundColor:"#F1F8E9", borderRadius:"1rem", fontFamily:"Kumbh Sans"}} 
    sx={{ width: "100%" , margin:'0', padding:"1.5rem 2rem"}}>
      
      <Grid container style={{height:'100%'}}>
        <Grid item xs={1} style={{display:"flex", justifyContent:'flex-end'}}>
          <Avatar>{comment.nickname}</Avatar>
        </Grid>

        <Grid item xs={11}>
          <Grid container spacing={1}>
            <Grid item xs={12} style={{display:"flex", justifyContent:"space-between"}}>
              <Typography fontFamily={"Kumbh Sans"} fontWeight={"bold"} variant="h6"
              gutterBottom>
                {comment.nickname}
              </Typography>
             
              <Button style={{color:"gray"}}> 삭제하기 <DeleteOutlineIcon /></Button>
              {/* <Button style={{color:"gray"}}>신고하기 <CampaignRoundedIcon /></Button> */}
           
            
            </Grid>

            <Grid item xs={12} >
              <Typography fontFamily={"Kumbh Sans"} >
                {comment.contents}
              </Typography>
            </Grid>

            <Grid item xs={12} mt={2}>
              <Stack  direction="row" style={{display:"flex", justifyContent:'space-between'}}>
                  <Stack direction="row">
                  <Typography fontFamily="Kumbh Sans" variant="subtitle1" style={{fontWeight:"medium",}}>
                    좋아요 <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite  style={{color:'red'}}/>} />
                    {comment.liked}명
                  </Typography>
                  </Stack>
                  <Typography variant="body2">
                    {comment.created_at}
                  </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
       
      </Grid>
        
          
      </Box>
      
    ))}

      <Grid item xs={12} mt={4} mb={5}>
            <Paginations />
        </Grid>
   </div> 
  );
};

export default CommentsList;

 
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };