import React from 'react';
import { styled } from "@mui/material/styles";
import {Box, Card, Grid, CardContent, CardMedia, Typography} from '@mui/material';

const StyledBox = styled(Box)({
  margin: '0 5rem',
})

const ContentGrid = styled(Grid)({
  paddingTop: '1rem',
});

function CreationTemplate() {
  
  return (
    <StyledBox>
      <Card sx={{ margin:'0 auto', display: 'flex', width: '80%'}}>
        <CardMedia
          component="img"
          sx={{ width: 300, height:160}}
          image="/asset/thumbnail.jpg"
          alt="창작물썸네일"
        />
        <Box sx={{ width: 500, flexDirection: 'column' }}>
          <CardContent>
            <Typography component="div" variant="h5" >
              창작물 대제목
            </Typography>
            <Grid container alignItems="stretch" sx={{height: '4rem'}}>
              <Grid item xs={3}>닉네임</Grid>
              <Grid item xs={9}> 태그들 </Grid>
            </Grid>
            <Grid container >
              <Grid item xs>
                  좋아요 수{" "} 
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.66675 7.61489C1.66675 11.6674 5.01675 13.8266 7.46841 15.7599C8.33341 16.4416 9.16675 17.0841 10.0001 17.0841C10.8334 17.0841 11.6667 16.4424 12.5317 15.7591C14.9842 13.8274 18.3334 11.6674 18.3334 7.61572C18.3334 3.56322 13.7501 0.689056 10.0001 4.58572C6.25008 0.688223 1.66675 3.56239 1.66675 7.61489Z" fill="#F24E1E"/>
                  </svg>
              </Grid>
              <Grid item xs>
                작성일 2023.08.18
              </Grid>
            
            </Grid>

          </CardContent>

        </Box>
        
      </Card>
      
    </StyledBox>
      
  );
};

export default CreationTemplate;