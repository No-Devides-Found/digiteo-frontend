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
import { styled } from "@mui/material/styles";


const MaxLinesTypography = styled(Typography)(({ theme }) => ({
  display: '-webkit-box',
  '-webkit-line-clamp': 3, // 최대 행 수 설정
  '-webkit-box-orient': 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  // 기타 적용할 스타일을 추가하세요
}));






// Q&A 리스트 템플릿
export default function QandATemplate({qa}) {
  //제목 작성자:닉네임 태그칩,내용중략 좋아요수 작성일
const card = (
  <React.Fragment style={{borderRadius:"20px"}}>
    <CardActionArea href='/detailedqa' style={{borderRadius:"20px", padding:"1rem" ,}}>
    
    <CardContent>
      <Grid container >
        <Grid item xs={12}>
          <Typography variant="h6" fontWeight="bold">
           {qa.title}
          </Typography>
        </Grid>
        <Grid item xs={12} mt={2}>
          <Stack direction="row">
                      <Avatar style={{marginRight:"1rem"}}>
                       {qa.profile_img}
                      </Avatar>
                      <Typography style={{lineHeight:"40px"}}>
                        {qa.nickname}
                      </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} mt={1}>
          <Chips />
          <MaxLinesTypography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom >
            {qa.contents}
          </MaxLinesTypography>
        </Grid>
      </Grid>
      

    </CardContent>
    <CardContent>
      
        <div  style={{display:"flex", justifyContent:"space-between"}}>
          <Stack direction="row" >
            <Typography variant="body2"> 좋아요 </Typography>{' '}
              <FavoriteRoundedIcon style={{color:'red'}}/>
            <Typography Typography variant="body2"> 
                {qa.liked}명  
            </Typography>
          </Stack>

          <Typography variant="body2" color="text.secondary" >
              답글 수 999명
          </Typography>
        </div>
        <div style={{marginTop:"1rem"}}>
          <Typography sx={{ fontSize: 13 }} color="text.secondary" 
            style={{textAlign:'right'}}>
            작성일 {qa.created_at}
          </Typography>

        </div>
   
    </CardContent>
    </CardActionArea>
  </React.Fragment>
);



  return (
    <Box style={{width:"80%", margin:"0 auto", display:"block", borderRadius:"20px"}}>
      <Card  style={{borderRadius:"20px", background:"#F1F8E9"}} >{card}</Card>
    </Box>
  );
}