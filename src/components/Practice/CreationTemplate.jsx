import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chips from '../common/Chips/Chips';

import { Grid, Paper,Typography,Chip, Avatar, Card, CardMedia, CardContent, CardActionArea, Stack } from '@mui/material';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

// const Img = styled('img')({
//   margin: 'auto',
//   display: 'block', 
//   maxWidth: '100%', 
//   maxHeight: '100%', 
// });
// 제목 페이퍼 
const StyledPaper=styled(Paper)({
  backgroundColor:"#F1F8E9",
  borderRadius:"20px",
  padding:"1rem", 
  margin:"1rem 0",
})
//칩

const StyledChip=styled(Chip)({
  width:'50%', 
  backgroundColor:"#C5E1A5"
})
const handleClick = () => {
  console.info('You clicked the Chip.');
};


export default function CreationTemplate( {practice }) {
  return (
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
                        창작물 대제목
                        {/* {practice.title} */}
                      </Typography>
                      <Typography variant="body2" style={{color:'gray'}}>
                            작성일 2023.01.01
                          {/* {practice.date} */}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs={5} mt={2}>
                    <Stack direction="row">
                      <Avatar style={{marginRight:"1rem"}}>
                        H
                       {/* {practice.profile_img} */}
                      </Avatar>
                      <Typography style={{lineHeight:"40px"}}>닉네임</Typography>
                    </Stack>
                  </Grid>
                  {/*  칩 태그들 */}
                  <Grid item xs={7} mt={2} style={{width:'100%'}}>
                    <Stack direction="row" spacing={1} >
                      <StyledChip label="Clickable"   onClick={handleClick}/>
                      <StyledChip label="Clickable"  onClick={handleClick}/>
                    </Stack>
                    <Stack direction="row" spacing={1} mt={1}>
                      <StyledChip label="Clickable"   onClick={handleClick}/>
                      <StyledChip label="Clickable" onClick={handleClick}/>
                    </Stack>
                  </Grid>

                  <Grid item xs={12} mt={1}>
                        <Stack direction="row">
                          <Typography variant="body2">좋아요</Typography>{' '}
                          <FavoriteRoundedIcon style={{color:'red'}}/>
                          <Typography Typography variant="body2"> 
                          999명
                          {/* {practice.liked} */}
                          </Typography>
                        </Stack>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </StyledPaper>
  );
}