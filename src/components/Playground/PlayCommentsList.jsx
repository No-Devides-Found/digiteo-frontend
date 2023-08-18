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
} from "../../components";



// 디지털 놀이터 댓글 목록 컴포넌트 
// 댓글 유저 닉네임, 프로필 이미지, 별점, 댓글내용, 작성일자
function PlayCommentsList () {

  //코멘트 목록을 가져와야 함
  const comments= [
    { 
      profile_img:"",
      nickname:"닉네임",
      date:"작성일",
      contents:"내용ㄴㅇㄴㅇㄹㄴ", 
      rating:"5.0", 
    },
    { 
      profile_img:"",
      nickname:"",
      date:"",
      contents:"", 
      rating:"", 
    },{ 
      profile_img:"",
      nickname:"",
      date:"",
      contents:"", 
      rating:"", 
    },{ 
      profile_img:"",
      nickname:"",
      date:"",
      contents:"", 
      rating:"", 
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
        <Grid item xs={1} style={{display:"flex", justifyContent:'center'}}>
          <Avatar> {comment.profile_img} </Avatar>
        </Grid>

        <Grid item xs={11}>
          <Grid container spacing={1}>
            <Grid item xs={12} style={{display:"flex", justifyContent:"space-between"}}>
              <Stack direction="row" spacing={3}>
                <Typography fontFamily={"Kumbh Sans"} fontWeight={"bold"} variant="h6"
                gutterBottom >
                  {comment.nickname} 
                </Typography>
                <Typography fontFamily={"Kumbh Sans"} fontWeight={"medium"} variant="subtitle1"
                  style={{verticalAlign:'middle'}}>
                  별점 {comment.rating} {' '}
                <svg
                  width="1rem"
                  height="1rem"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.3625 11.0752C11.3374 11.3213 10.2672 11.3094 9.24783 11.0405C8.22844 10.7715 7.29166 10.254 6.52137 9.53419C5.75108 8.81437 5.17134 7.91476 4.83406 6.91591C4.49677 5.91706 4.41248 4.85015 4.58872 3.81073C4.56192 3.83662 4.53362 3.86091 4.50397 3.88348C4.29397 4.04323 4.03146 4.10248 3.50646 4.22098L3.0302 4.32898C1.18519 4.74672 0.262679 4.95522 0.0429266 5.66097C-0.176075 6.36597 0.452431 7.10171 1.71019 8.57245L2.0357 8.9527C2.3927 9.37045 2.57195 9.5797 2.6522 9.8377C2.73245 10.0964 2.70545 10.3754 2.65145 10.9327L2.60195 11.4404C2.4122 13.4032 2.31695 14.3842 2.89145 14.8199C3.46596 15.2564 4.32997 14.8589 6.05648 14.0632L6.50424 13.8577C6.99474 13.6312 7.23999 13.5187 7.50025 13.5187C7.7605 13.5187 8.00575 13.6312 8.49701 13.8577L8.94326 14.0632C10.6705 14.8582 11.5345 15.2557 12.1083 14.8207C12.6835 14.3842 12.5883 13.4032 12.3985 11.4404L12.3625 11.0752Z"
                    fill="#FFD233"
                  />
                  <path
                    opacity="0.5"
                    d="M5.36502 2.55599L5.11902 2.99698C4.84902 3.48148 4.71402 3.72373 4.50401 3.88348C4.53401 3.86098 4.56176 3.83698 4.58876 3.81073C4.41248 4.85023 4.49677 5.91722 4.83409 6.91615C5.17141 7.91508 5.75122 8.81474 6.52161 9.53458C7.29199 10.2544 8.22889 10.7719 9.24838 11.0408C10.2679 11.3097 11.3382 11.3215 12.3633 11.0752L12.3483 10.9327C12.2951 10.3754 12.2681 10.0964 12.3483 9.8377C12.4286 9.5797 12.6071 9.37045 12.9648 8.9527L13.2903 8.57245C14.5481 7.10246 15.1766 6.36671 14.9569 5.66097C14.7379 4.95522 13.8153 4.74597 11.9703 4.32898L11.4933 4.22098C10.9691 4.10248 10.7066 4.04323 10.4958 3.88348C10.2858 3.72373 10.1508 3.48148 9.88081 2.99698L9.63556 2.55599C8.6853 0.851995 8.21055 0 7.50029 0C6.79003 0 6.31528 0.851995 5.36502 2.55599Z"
                    fill="#FFD233"
                  />
                </svg>
                </Typography>
              </Stack>
              <div>
                {/* <Button style={{color:"gray"}}> 삭제하기 <DeleteOutlineIcon /></Button> */}
                <Button style={{color:"gray"}}>신고하기 <CampaignRoundedIcon /></Button>
              </div>
              
             
             
           
            
            </Grid>

            <Grid item xs={12} >
              <Typography fontFamily={"Kumbh Sans"} >
                {comment.contents}
              </Typography>
            </Grid>

            <Grid item xs={12} mt={2}>
              <Stack  direction="row" style={{display:"flex", justifyContent:'space-between'}}>
                  <Stack direction="row">
                  
                  </Stack>
                  <Typography variant="body2">
                    {comment.date}
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

export default PlayCommentsList;

 
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };