import * as React from 'react';

import {Box, Grid, ToggleButton, ToggleButtonGroup, Button, 
  FormControl,  TextField, } from '@mui/material'; 



export default function AgoraComments( ) {
  const [choice, setChoice] = React.useState("yes");  //찬반 선택
  const [comment, setComment] = React.useState("");  

  const handleChange = (e) => {  //찬반 선택 세팅
    setChoice(e.target.value);
  };
  const onChangeComment=(e)=>{
    setComment(e.target.value)
  }
  const regComment = (e) => {
    setComment("")
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
      <div style={{textAlign:'left'}}>댓글 {'('}총~개{')'}  </div>
      </Grid>
      <Grid item xs={12}>
        <ToggleButtonGroup
          color="primary"
          value={choice}
          exclusive
          onChange={handleChange}
          aria-label="Platform"  
          style={{width: '100%'}}    
        >
          <ToggleButton value="yes" 
            style={{width: '50%'}}    
          >
            찬성
          </ToggleButton>
          <ToggleButton value="no" 
          style={{width: '50%'}}    
          >
            반대
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
   
      <Grid item xs={12}>
        <TextField
          multiline
          value={comment}
          onChange={onChangeComment}
          placeholder="의견을 작성해보세요. (1000자 이내)"
          rows={6}
          style={{ width: '100%'}}
        />
      </Grid>

      <Grid item xs={12}>
        <Box display="flex" justifyContent="flex-end">
          <Button type='submit' 
            onClick={regComment}
          >
            올리기
          </Button>
        </Box>

      </Grid>
      

      
   

    </Grid>
    
  );
}
