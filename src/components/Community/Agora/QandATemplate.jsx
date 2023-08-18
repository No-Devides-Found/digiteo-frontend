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
}));






// Q&A 리스트 템플릿
export default function QandATemplate({qa}) {
  //제목 작성자:닉네임 태그칩,내용중략 좋아요수 작성일



const card = (
  <React.Fragment style={{borderRadius:"20px"}}>
    <CardActionArea href='/detailedqa' style={{borderRadius:"20px", padding:"1rem" ,}}>
    
    <CardContent>
      <Grid container >
      <Grid item xs={3} mt={2}>
          
                      <Avatar style={{marginRight:"1rem"}}>
                       {qa.profile_img}
                      </Avatar>
                      <Typography style={{lineHeight:"40px", marginLeft:"1rem"}}>
                        {qa.nickname}
                      </Typography>
         
        </Grid>
        <Grid item xs={9} mt={2}>
          <Grid container>
            
            <Grid item xs={12}>
            
            <Typography variant="h5" fontWeight="bold">
              {qa.title}
              </Typography>
             

             
            </Grid>
            <Grid item xs={12} mt={3}>
              <Typography  color="text.secondary" gutterBottom >
                {qa.contents}
              </Typography>
            </Grid>
          </Grid>
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
         `{qa.created_at}
          </Typography>
        </div>

   
    </CardContent>
    </CardActionArea>
  </React.Fragment>
);



  return (
    <Box style={{width:"100%", margin:"0 auto", display:"block", borderRadius:"20px"}}>
      <Card  style={{borderRadius:"20px", background:"#F1F8E9"}} >{card}</Card>
    </Box>
  );
}