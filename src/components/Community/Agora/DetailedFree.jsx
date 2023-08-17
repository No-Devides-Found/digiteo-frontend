import React, {useState} from 'react';
import {Stack, Container, Button, Grid, TextField, Typography } from '@mui/material';
import { styled } from "@mui/material/styles";


const ContentField = styled(Container)({
  background:"#FFF3E0",
  borderRadius:"20px",
  padding:"2rem 3rem",
}); 




const DetailedFree = ({post}) => {
  return (
    <Stack>
      <Grid container >

    


        <Grid item xs={12} mt={3}>
          <Typography variant="h6" gutterBottom>이슈 정리</Typography>
          </Grid>
          <Grid item xs={12}>
            <ContentField>
              <TextField 
                multiline
                rows={4}
                defaultValue={post.summary} 
                style={{width:'100%'}}
                required
                InputProps={{ readOnly: true }} 
                />
            </ContentField>
        </Grid>


        <Grid item xs={12}>
          
        <TextField 
            defaultValue="입력내용"
            InputProps={{ readOnly: true }} 
            style={{width:'100%'}}
            required
            placeholder='이슈에 대한 종합적인 내용을 입력해주세요.(200자 이내로 작성)'/>
        </Grid>
        
        
        <Grid item xs={12}>
          <Typography variant='subtitle1' gutterBottom>
            내 의견
          </Typography>
          
            <TextField 
                defaultValue="입력내용"
                InputProps={{ readOnly: true }} 
                style={{width:'100%'}}  
                required
                placeholder='이슈에 대한 나의 의견을 적어주세요.'/>  
        </Grid>

      </Grid>
        
    </Stack>
  );
};

export default DetailedFree;