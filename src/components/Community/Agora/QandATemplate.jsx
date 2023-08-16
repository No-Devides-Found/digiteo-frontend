import * as React from 'react';

import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid,  Avatar,  Stack ,CardActionArea} from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import {Chips} from "../../../components";







//제목 작성자:닉네임 태그칩,내용중략 좋아요수 작성일
const card = (
  <React.Fragment>
    <CardActionArea href='/detailedqa'>
    
    <CardContent>
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <Avatar>K</Avatar>썸네일 닉네임
        </Grid>
        <Grid item xs={10}>
          <Typography variant="h5" component="div" gutterBottom>
           - 질문 제목 - 
          </Typography>
          <Chips/>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            내용 중략
          </Typography>
        </Grid>
      </Grid>
      

      
      
      

    </CardContent>
    <CardContent>
      <Stack direction="row" style={{justifyContent:'space-between'}}>
        <Stack direction="row">
          <Typography variant="body2">
            좋아요
          </Typography>{' '}
          <FavoriteRoundedIcon style={{color:'red'}}/>
          <Typography variant="body2"> 
            999명
          </Typography>
          <Typography sx={{ fontSize: 13 }} color="text.secondary" 
            style={{float:'right'}}>
              답글 수 아이콘 999명
          </Typography>
        </Stack>
       
      
        <Stack direction="row">
          <Typography sx={{ fontSize: 13 }} color="text.secondary" 
            style={{textAlign:'right'}}>
            작성일 2023-01-01
          </Typography>
        </Stack>
      </Stack>
      
    </CardContent>
    </CardActionArea>
  </React.Fragment>
);



// Q&A 리스트 템플릿
export default function QandATemplate() {

  return (
    <Box sx={{ width: "100%" }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}