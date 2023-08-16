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








//제목 작성자:닉네임 태그칩,내용중략 좋아요수 작성일
const card = (
  <React.Fragment>
    <CardActionArea href='/detailedagora'>
    <CardMedia
          component="img"
          height="120"
          image="\asset\thumbnail.jpg"
          alt="썸네일"
        />
    <CardContent>
      <Typography variant="h5"  gutterBottom>
        토의/토론 주제
      </Typography>

      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        유형 : 찬반/자유
      </Typography>
      
      

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
        </Stack>

        <Typography sx={{ fontSize: 13 }} color="text.secondary" 
          style={{float:'right'}}>
          참여자 수 아이콘 999명
        </Typography>
      </Stack>
      <Stack >
        <Typography sx={{ fontSize: 13 }} color="text.secondary" 
          style={{textAlign:'right'}}>
          작성일 2023-01-01
        </Typography>
      </Stack>
      
    </CardContent>
    </CardActionArea>
  </React.Fragment>
);



// 토의/토론 글 리스트 템플릿
export default function AgoraTemplate() {

  return (
    <Box sx={{ width: '18rem' }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}