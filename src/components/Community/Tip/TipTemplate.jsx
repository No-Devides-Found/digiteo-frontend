import * as React from 'react';
import axios from 'axios';

import {Chips} from '../../../components';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid,  Avatar,  Stack ,CardActionArea} from '@mui/material';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';




// 칩에 넘겨 줄 임의의 태그들
const chips = ['tag1', 'tag2', 'tag3'];




// 팁 노하우 항목 컴포넌트  
export default function TipTemplate({tip}) {
  //제목 작성자:닉네임 태그칩,내용중략 좋아요수 작성일
const card = (
  <React.Fragment  style={{borderRadius:"20px"}}>


    <CardActionArea href='/detailedtip/' style={{borderRadius:"20px",padding:"1rem" ,}}>
      <CardContent style={{padding:"1rem"}}>
        <Typography variant="h5"  gutterBottom>
          {tip.title}
        </Typography>
  
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {tip.auth}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <Chips chips={chips}/>
        </Typography>
        <Typography variant="body2" gutterBottom> 
          {tip.content}
          <br />
        </Typography>
        
      </CardContent>
  
      <CardContent style={{padding:"1rem"}} >
        <Stack direction="row" style={{justifyContent:'space-between'}}>
          <Stack direction="row">
            <Typography variant="body2">
              {tip.likes}
            </Typography>{' '}
            <FavoriteRoundedIcon style={{color:'red'}}/>
            <Typography variant="body2"> 
              명
            </Typography>
          </Stack>
  
          
        </Stack>
        <Stack >
          <Typography sx={{ fontSize: 13 }} color="text.secondary" 
            style={{textAlign:'right'}}>
            {tip.date}
          </Typography>
        </Stack>
        
      </CardContent>
    </CardActionArea>
  </React.Fragment>
);


  return (
    <Box style={{width:"90%", margin:"0 auto", display:"block", borderRadius:"20px"}}>
      <Card style={{borderRadius:"20px", background:"#F1F8E9"}}>{card}</Card>
    </Box>
  );
}