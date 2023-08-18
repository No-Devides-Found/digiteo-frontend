import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chips from '../common/Chips/Chips';
import {Link} from "react-router-dom";
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





export default function CreationTemplate( { practice }) {

  //practice 객체를 받습니다. 
  //
  return (
      <StyledPaper>
            <Grid container >
              <Grid item xs={3} >
                {/* 링크 아이디 연결 필요 */}
                <Link to={"/detailedpractice"}>
                  <img src="img/video.png" alt="video-box" width="100%" />
                </Link>
              </Grid>
              <Grid item xs={9} style={{padding:"0 2rem"}}>
                <Grid container>
                  <Grid item xs={12} mt={2}>
                    <Stack direction="row" style={{display:"flex", justifyContent:'space-between'}}>
                    
                        <Typography variant='h6' fontWeight="bold"  >
                          {practice.title}
                        </Typography>
                      <Typography variant="body2" style={{color:'gray'}}>
                          
                          {practice.created_at}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs={5} mt={2}>
                    <Stack direction="row">
                      <Avatar style={{marginRight:"1rem"}}>
                       {practice.profile_img}
                      </Avatar>
                      <Typography style={{lineHeight:"40px"}}>
                        {practice.auth}
                      </Typography>
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
                        <Stack direction="row" style={{justifyContent:"space-between"}}>
                          <Stack direction="row" >
                            <Typography variant="body2">좋아요{' '}</Typography>
                            <Typography variant="body2"><FavoriteRoundedIcon style={{color:'red'}}/></Typography>
                            <Typography variant="body2">
                              {practice.likes}명
                            </Typography>
                          </Stack>
                          <Typography variant="body2" style={{color:'gray'}}>
                            {practice.created_at}
                          </Typography>

                          
                        </Stack>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
           
          </StyledPaper>
  );
}