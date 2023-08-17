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




// 토의/토론 글 리스트 템플릿
export default function AgoraTemplate({agora}) {

  const card = (
    <React.Fragment style={{borderRadius:"20px"}}>
  
      <CardActionArea href="/detailedagora/" style={{borderRadius:"20px",padding:"1rem" ,}}>
      <CardMedia
            component="img"
            style={{ paddingRight: "0.7rem", height:"fit-content", borderRadius:"20px"}}
            image="/img/video.png"
            alt="썸네일"
          />
      <CardContent style={{padding:"1rem"}}>
        <Typography variant="h5"  gutterBottom>
          {agora.title} 
        </Typography>
  
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          유형 : {agora.type} 
        </Typography>
      </CardContent>
  
      <CardContent style={{padding:"1rem"}} >
        <Stack direction="row" style={{justifyContent:'space-between'}}>
          <Stack direction="row">
            <Typography variant="body2">
              좋아요
            </Typography>{' '}
            <FavoriteRoundedIcon style={{color:'red'}}/>
            <Typography variant="body2"> 
              {agora.liked}명
            </Typography>
          </Stack>
  
          <Typography sx={{ fontSize: 13 }} color="text.secondary" 
            style={{float:'right'}}>
            참여자 수 {agora.participants}명
          </Typography>
        </Stack>
        <Stack >
          <Typography sx={{ fontSize: 13 }} color="text.secondary" 
            style={{textAlign:'right'}}>
            작성일 {agora.created_at}
          </Typography>
        </Stack>
        
      </CardContent>
      </CardActionArea>
    </React.Fragment>
  );

  return (
    <Box style={{width:"80%", margin:"0 auto", display:"block", borderRadius:"20px"}}>
      <Card style={{borderRadius:"20px", background:"#F1F8E9"}}>{card}</Card>
    </Box>
  );
}