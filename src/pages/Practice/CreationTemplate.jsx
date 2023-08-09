import React from 'react';

import {Box, Card, Grid, CardContent, CardMedia, Typography} from '@mui/material';


function CreationTemplate() {
  

  return (
      <Card sx={{ display: 'flex', width: 600}}>
        <CardMedia
          component="img"
          sx={{ width: 200, height:160}}
          image="/asset/thumbnail.jpg"
          alt="창작물썸네일"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              창작물 대제목
            </Typography>
            <Grid container>
              <Grid item xs>
                닉네임
              </Grid>
              <Grid item xs>
                태그들
              </Grid>
            </Grid>
            

            {/* <Typography variant="subtitle1" color="text.secondary" component="span" >
              닉네임
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="span">
              태그들
            </Typography> */}
          </CardContent>
          {/* <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <IconButton aria-label="previous">
              {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
            </IconButton>
            <IconButton aria-label="play/pause">
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            </IconButton>
            <IconButton aria-label="next">
              {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
            </IconButton>
          </Box> */}
        </Box>
        
      </Card>
  );
};

export default CreationTemplate;