import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chips from '../common/Chips/Chips';

import { Grid, Typography, Avatar, Card, CardMedia, CardContent, CardActionArea, Stack } from '@mui/material';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function CreationTemplate(key) {
  return (
    <Card sx={{ maxWidth: 800, margin:'0 auto'}}>
      <Grid container>
        <Grid item xs={4}>
          <CardActionArea>
            <CardMedia
                  component="img"
                  height="160"
                  image="\assets\thumbnail.jpg"
                  alt="썸네일"
                />
          </CardActionArea>
        </Grid>
        <Grid item xs={8}>
        <CardContent>
          <Grid container>
            <Grid item xs={12}>
              <Typography gutterBottom variant="h5" component="div">
                창작물 대제목
              </Typography>
            </Grid>
            <Grid item xs={3} style={{maxHeight:'3rem',  marginBottom:'1rem',}}>
              <Stack direction="row" spacing={2}>
                <Avatar>H</Avatar><Typography style={{lineHeight:'40px'}}>닉네임</Typography>
              </Stack>
            </Grid>
            <Grid item xs={9} style={{maxHeight: '3rem', overflow:'hidden', }}>
              <Chips style={{justifyContent:'flex-end'}}/> 
            </Grid>
            <Grid item xs={6}>
               <Stack direction="row" alignItems="center">
                  <Typography>좋아요</Typography>{' '}
                  <FavoriteRoundedIcon style={{color:'red'}}/>
                  <Typography> ~~~개</Typography>
                </Stack>
            </Grid>
            <Grid item xs={6} style={{textAlign:'right'}} >
              <Typography variant="body2" color="text.secondary">작성일자 2023.01.01</Typography>
            </Grid>
          </Grid>
        </CardContent>
          {/* <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions> */}
        </Grid>
      </Grid>
    </Card>
  );
}