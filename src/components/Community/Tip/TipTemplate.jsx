import * as React from 'react';


import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid,  Avatar,  Stack ,CardActionArea} from '@mui/material';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';








//제목 작성자:닉네임 태그칩,내용중략 좋아요수 작성일
const card = (
  <React.Fragment>
     <CardActionArea href='/detailedtip'>
    <CardContent>
      <Typography variant="h5" component="div" gutterBottom>
        팁&노하우 제목
      </Typography>

      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        작성자 : 닉네임
      </Typography>
      
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
       태그칩들
      </Typography>

      <Typography variant="body2" gutterBottom> 
        내용 중략
        <br />
      </Typography>

    </CardContent>
    <CardContent>
      <Stack direction="row" style={{justifyContent:'space-between'}}>
        <Stack direction="row">
          <Typography variant="body2">좋아요</Typography>{' '}
          <FavoriteRoundedIcon style={{color:'red'}}/>
          <Typography Typography variant="body2"> ~~~개</Typography>
        </Stack>

        <Typography sx={{ fontSize: 13 }} color="text.secondary" 
        style={{float:'right'}}>
          작성일자 2023-01-01
        </Typography>
      </Stack>
    </CardContent>
    </CardActionArea>
  </React.Fragment>
);




export default function TipTemplate() {
  

  return (
    <Box sx={{ width: '18rem' }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}