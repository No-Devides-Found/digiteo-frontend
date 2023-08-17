import React, {useState} from 'react';

import {Box, Button, FormControl,  Stack, Grid, TextField, Typography, } from '@mui/material'; 



export default function Comments() {

  const [comment, setComment] = useState('');
  
  const onChange=(e)=>{
    setComment(e.target.value);  
  }
  const onClick=(e)=>{
    setComment(""); //댓글 작성창 초기화
    //comment 보내기
  }
  
  return (
    <Box style={{padding:"0", margin:"0"}}>
      <Grid container spacing={1} 
        style={{width:'100%', margin:"0", padding:"0"}}>
        <Grid item xs={12}>
            <Typography fontFamily="Kumbh Sans" variant="h6" style={{textAlign:'left', fontWeight:"medium",}}>
              댓글 
              <span style={{fontSize:"medium", color:"gray"}}>
                {" "}{'('} 총 {} 개 {')'}
              </span>
            </Typography>
            
        </Grid>
        <Grid item xs={12} >
          <TextField
          multiline
          value={comment}
          onChange={onChange}
          placeholder="댓글을 작성해보세요. (200자 이내)"
          rows={6}
          style={{width:'100%', margin:"0", padding:"0"}}
        />
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="flex-end" mt={1}>
          <Button type='submit' 
          sx={{ width: '10%' }}
          style={{backgroundColor:"#C5E1A5", color:"black", fontFamily:"Kumbh Sans", borderRadius:"10px",
          fontWeight:"medium"}}
          onClick={onClick}
          >
            올리기
          </Button>
        </Grid>

      </Grid>
    </Box>
  );
}
